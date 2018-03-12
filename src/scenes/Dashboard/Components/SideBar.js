import React from 'react'

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { MenuList, MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';

import HomeIcon from 'material-ui-icons/Home';
import AccountBalanceWalletIcon from 'material-ui-icons/AccountBalanceWallet';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'

import '../../../styles/Dashboard.css'

const svgSize = {
    width: "32px",
    height: "32px",
    fill: "#B3B3B3"
};

const SideBar = (props) =>{
    return(
        <Drawer
            variant="persistent"
            anchor="left"
            open={props.sideDrawerOpen}>
            <div className="Dashboard-sidebar-drawer">
                {/*<MenuItem className="Dashboard-sidebar-drawer-header" onClick={this.handleSideDrawerClose}>
                          <div className="Dashboard-sidebar-drawer-icon">
                              <ChevronLeftIcon style={svgSize}/>
                          </div>
                      </MenuItem>*/}
                <div className="Dashboard-sidebar-drawer-header" onClick={props.handleSideDrawerClose}>
                    <ChevronLeftIcon style={svgSize}/>
                </div>
                <Divider/>
                <MenuList >
                    <MenuItem onClick={props.handleSideDrawerHome}>
                        <ListItemIcon><HomeIcon style={svgSize}/></ListItemIcon>
                        <ListItemText primary="Inicio"/>
                    </MenuItem>
                    <MenuItem onClick={props.handleSideDrawerWallet}>
                        <ListItemIcon><AccountBalanceWalletIcon style={svgSize}/></ListItemIcon>
                        <ListItemText primary="Cartera"/>
                    </MenuItem>
                </MenuList>
                {/*<div className="Dashboard-sidebar-drawer-element-container">
                          <HomeIcon style={svgSize}/>
                          <p className="Dashboard-sidebar-element-p">Inicio</p>
                      </div>
                      <div className="Dashboard-sidebar-drawer-element-container">
                          <AccountBalanceWalletIcon style={svgSize}/>
                          <p className="Dashboard-sidebar-element-p">Cartera</p>
                      </div>*/}
            </div>

        </Drawer>
    )
};

export default SideBar