import React from 'react'

import Menu, { MenuItem } from 'material-ui/Menu';

import Logo from '../../../assets/logo-name.png'

import MenuIcon from 'material-ui-icons/Menu';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown';
import PermIcon from 'material-ui-icons/PermIdentity'
import InputIcon from 'material-ui-icons/Input'

import '../../../styles/Dashboard.css'

const svgSize = {
    width: "32px",
    height: "32px",
    fill: "#B3B3B3"
};

const Header = (props) => {
    return (
        <div className="Dashboard-header">
            <MenuIcon className="Dashboard-header-drawer-menu" style={svgSize} onClick={props.handleDrawerOpen}/>
            <div className="Dashboard-header-icon-container">
                <img src={Logo} className="Dashboard-header-logo"/>
                <p className="Dashboard-h2">1 Acción = 1.25 ETH</p>
            </div>
            <div className="Dashboard-header-profile-container" onClick={props.handleProfileOpen}>
                <Menu
                    id="profile"
                    open={props.profileOpen}
                    anchorEl={props.profileAnchor}
                    onClose={props.handleProfileClose}>
                    <MenuItem onClick={props.handleProfileClose}>
                        <div className="Dashboard-menu-item-container">
                            <PermIcon/>
                            <p className="Dashboard-menu-item-text">Mi cuenta</p>
                        </div>
                    </MenuItem>
                    <MenuItem onClick={props.handleProfileClose}>
                        <div className="Dashboard-menu-item-container">
                            <InputIcon/>
                            <p className="Dashboard-menu-item-text">Salir</p>
                        </div>
                    </MenuItem>
                </Menu>
                <AccountCircleIcon style={svgSize}/>
                <ArrowDropDownIcon style={svgSize}/>
            </div>
        </div>
    )
} ;

export default Header