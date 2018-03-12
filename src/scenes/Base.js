import React, { Component } from 'react';

import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login'
import Landing from './Landing/Landing'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {},
            component: <Landing handleEnter={this.handleEnter}/>
        }
    }

    handleEnter = () => {
        if(this.state.user.isLoggedIn){
            this.setState({
                component: <Dashboard/>
            })
        }else{
            this.setState({
                component: <Login handleSignIn={this.handleSignIn}/>
            })
        }
    };

    handleSignIn = (user) => {
        console.log("Userino:",user);
        this.setState({
            user: user,
            component: <Dashboard/>
        })
    };

    render () {
        return (
            <div>
                {console.log(this.state.component)}
                {this.state.component}
            </div>
        )
    }
}

export default App