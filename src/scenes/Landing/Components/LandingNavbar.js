import React from 'react';
import Logo from '../../../assets/logo-name.png'

export const LandingNavbar = (props) => {
  return (
      <div className="hero-head">
        <nav className="navbar is-transparent">
          <div className="container" style={{marginTop:"10px"}}>
            <div className="navbar-brand">
              <a className="navbar-item is-transparent" href="../" style={{height:"65px"}}>
                <img src={Logo} style={{position:"relative",top:"0", height: "50px",maxHeight:"50px",marginRight: "5px"}} alt="Logo"/>
              </a>
              <span className="navbar-burger burger" data-target="navbarMenu">
                                   <span/>
                                   <span/>
                                   <span/>
                        </span>
            </div>
            <div id="navbarMenu" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-main">
                  <h2 className="has-text-weight-bold" onClick={props.handleEnter}>Entrar</h2>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
  )
};
