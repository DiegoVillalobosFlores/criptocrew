import React from 'react';
import {LandingNavbar} from './LandingNavbar'
import clickOnCoin from '../../../assets/clickOnCoin.png'


export const LandingCard1 = (props) => {
  console.log(clickOnCoin);
  return (
      <section id="LandingCard1"  className="hero  is-default  is-10 is-offset-1">
        <LandingNavbar handleEnter={props.handleEnter}/>
        <div className="hero-body is-white">
          <div className="container has-text-centered is-vcentered" style={{marginTop:"6vh"}}>
            <div className="columns is-vcentered">

              <div className="column is-5  is-inline has-text-left is-offset-1">

                <h1 className="title is-2 has-text-grey-light has-text-left is-inline has-text-weight-light" style={{fontSize:"50pt",lineHeight:"1.3em"}}>
                  <hr style={{height:"4px"}}/>
                  Bienvenidos, <div className="title is-2 is-main has-text-left is-inline has-text-weight-bold" style={{fontSize:"50pt"}}>
                  IPO
                </div> de <div className="title is-2 is-main has-text-left is-inline has-text-weight-bold" style={{fontSize:"50pt"}}>
                  CriptoCrew
                </div>  esta abierta
                </h1>

                <div className="has-text-centered is-right" onClick={props.handleEnter}>
                  <a className="button Landing-button is-medium" style={{marginTop:"3.5em"}}>
                    Participar
                  </a>
                </div>

              </div>

              <div className="column is-5 is-offset-1">
                <figure className="image">
                  <div className="clickOnCoin"/>
                </figure>
              </div>
            </div>
          </div>
        </div>

      </section>
  )
};
