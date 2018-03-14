import React, { Component } from 'react';
import firebase from '../../firebase/config'
import Firebase from 'firebase'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import UserDetails from './Components/UserDetails'
import { CircularProgress } from 'material-ui/Progress';
import Paper from 'material-ui/Paper';

import Logo from '../../assets/logo-name.png'

import '../../styles/Login.css'

const paperStyle = {
    placeSelf: "center",
    padding: "16px",
    textAlign: "center",
};

const disabledStyle = {
    color: "#9B9B9B",
    backgroundColor: "#D1D1D1",
    marginTop: "16px"
};

const enabledStyle = {
    backgroundColor: "var(--accent-orange)",
    color: "var(--text-button)",
    marginTop: "16px"
};

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            uid: "0",
            token: "0",
            user: {},
            showMissingDetails: false,
            showLoading: false,
            nip: "",
            address: "",
        }
    }

    async getUser (idToken) {
        let request = await fetch('https://cryptocrewtest.firebaseapp.com/getUserData', {
            method: 'GET',
            headers: {
                'authorization': idToken,
            },
            mode: 'cors'
        });
        const response = await request.json();
        console.log(response);
        this.setState({showLoading: false});
        const {user} = response;
        if(!user.nip || !user.address){
            this.setState({showMissingDetails: true,user: user})
        }else{
            this.props.handleSignIn({...user,isLoggedIn: true,token: idToken});
        }
    };

    uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            Firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            {
                provider: Firebase.auth.EmailAuthProvider.PROVIDER_ID,
                // Whether the display name should be displayed in the Sign Up page.
                requireDisplayName: false
            }
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccess: () => {
                this.setState({showLoading: true});
                this.getUserToken();
                return false;
            }
        }
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(
            (user) => {
                console.log(user);
                this.setState({user: user});
            }
        );
    }

    getUserToken = () => {
        firebase.auth().currentUser.getIdToken(true).then((idToken) => {
            console.log(idToken);
            this.getUser(idToken);
        }).catch(error => {console.log(error)
        })
    };

    async setUser(idToken,address,nip) {
        let request = await fetch('https://cryptocrewtest.firebaseapp.com/setUserInfo?address=' + address + "&nip=" + nip, {
            method: 'GET',
            headers: {
                'authorization': idToken,
            },
            mode: 'cors'
        });
        const response = await request.json();
        console.log(response);
        const {ok} = response;
        if(ok){
            this.props.handleSignIn({...this.state.user,address:address,nip:nip,isLoggedIn: true,token: idToken});
        }else{
            this.setState({
                showLoading: false,
                showMissingDetails: true,
            })
        }
    }

    setUserData = () => {
        firebase.auth().currentUser.getIdToken(true).then((idToken) => {
            this.setState({showLoading: true, showMissingDetails: false});
            this.setUser(idToken,this.state.address,this.state.nip)
        })
    };

    validAddressAndNip = () => {
        return !(this.state.nip.length >=4 && this.state.address)
    };

    handleDataChange = (field,value) => {
        this.setState({
            [field]:value,
        })
    };

    render(){
        return (
            <div className="Login">
                <Paper style={paperStyle} elevation={4}>
                    <img src={Logo}/>
                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                    {this.state.showLoading ? (<CircularProgress style={{color: "#F1C40C"}}/>) : null}
                    {this.state.showMissingDetails ? (<UserDetails onSubmit={this.setUserData} validData={this.validAddressAndNip()} buttonStyle={this.validAddressAndNip() ? disabledStyle: enabledStyle} handleDataChange={this.handleDataChange}/>) : null}
                </Paper>
            </div>
        )
    }
}

export default Login