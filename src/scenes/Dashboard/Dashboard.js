import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './Components/Header'
import Main from './Components/Main'
import Transactions from './Components/Transactions'
import SideBar from './Components/SideBar'
import Wallet from './Components/Wallet'

import {setUser} from "../../actions/Login";


import '../../styles/Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileMenuOpen: false,
            profileMenuAnchor: null,
            sideDrawerOpen: false,
            sideDrawerAnchor: null,
            showWallet: false,
        }
    }

    handleProfileClick = (event) => {
        this.setState({
            profileMenuOpen: !this.state.profileMenuOpen,
            profileMenuAnchor: event.target
        })
    };

    handleProfileMenuClose = () => {
        this.setState({
            profileMenuOpen: false,
            profileMenuAnchor: null,
        })
    };

    handleSideDrawerClick = event => {
        this.setState({
            sideDrawerOpen: true,
            sideDrawerAnchor: event.target,
        })
    };

    handleSideDrawerClose = () => {
        this.setState({
            sideDrawerOpen: false,
            sideDrawerAnchor: null,
        })
    };

    handleSideDrawerWallet = () => {
        this.handleSideDrawerClose();
        this.setState({
            showWallet: true
        })
    };

    handleSideDrawerHome = () => {
        this.handleSideDrawerClose();
        this.setState({
            showWallet: false
        })
    };

    getCurrentComponent = () =>{
        if(!this.state.showWallet){
            return (
                <div>
                    <Main
                        daysLeftToSellShares={1}
                    />
                    <Transactions/>
                </div>
            )
        }else{
            return (
                <Wallet balance={350} currency={"ETH"}/>
            )
        }
    };

    render() {
      return (
          <div className="Dashboard">
              {console.log(this.props)}
                <Header
                    handleProfileOpen={this.handleProfileClick}
                    handleProfileClose={this.handleProfileMenuClose}
                    handleDrawerOpen={this.handleSideDrawerClick}
                    profileOpen={this.state.profileMenuOpen}
                    profileAnchor={this.state.profileMenuAnchor}
                />
                {this.getCurrentComponent()}
                <SideBar
                    handleSideDrawerClose={this.handleSideDrawerClose}
                    handleSideDrawerHome={this.handleSideDrawerHome}
                    handleSideDrawerWallet={this.handleSideDrawerWallet}
                    sideDrawerOpen={this.state.sideDrawerOpen}
                />
          </div>
      );
    }
}

export default Dashboard