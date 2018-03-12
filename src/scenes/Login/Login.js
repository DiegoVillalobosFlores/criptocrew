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

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            uid: "0",
            token: "0",
            user: {},
            showMissingDetails: true,
            showLoading: true,
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
        this.props.handleSignIn({...user,isLoggedIn: true});
        if(!user.nip || !user.address){
            this.setState({showMissingDetails: true})
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
        this.setState({
            token: idToken,
        })
      }).catch(error => {
        console.log(error)
      })
    };

    render(){
        return (
            <div className="Login">
                <Paper style={paperStyle} elevation={4}>
                    <img src={Logo}/>
                    {/*<p>{this.state.uid}</p>*/}
                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                    {this.state.showLoading ? (<CircularProgress style={{color: "#F1C40C"}}/>) : null}
                    {this.state.showMissingDetails ? (<UserDetails/>) : null}
                    {/*<h2>Token</h2>
                    <p>{this.state.token}</p>
                    <input type="button" onClick={() => this.getUserToken((token) => {this.setState({token: token})})} value={"Get IdToken"}/>*/}
                </Paper>
            </div>
        )
    }
}

export default Login