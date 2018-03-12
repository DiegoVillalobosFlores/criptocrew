import React from 'react';
import {LandingNavbar} from './LandingNavbar'
//import {coins} from "../../assets/coins.svg";

export const LandingCard2 = (props) => {
  return (
      <section id="LandingCard2" className="is-default is-bold is-10 ">
        <LandingNavbar handleEnter={props.handleEnter}/>
        <div className="hero-body is-transparent">
          <div className="container has-text-centered">
            <div className="columns is-vcentered" >

              <div className="column is-5 is-offset-1">
                <figure className="image">
                  <div className="coins"/>
                </figure>
              </div>

              <div className="column is-5  is-inline has-text-right ">
                <h1 className="title is-2 has-text-grey-light has-text-right is-inline  has-text-weight-light" style={{fontSize:"45pt",lineHeight:"1.3em"}}>
                  <hr style={{height:"4px"}}/>
                  Adquiere Particiación y recibe <div className="title is-2 is-main has-text-right is-inline" style={{fontSize:"45pt"}}>
                  rendimientos</div> por medio de <div className="title is-2 is-main has-text-right is-inline" style={{fontSize:"45pt"}}>
                  contratos inteligentes
                </div>
                </h1>

                <br/><br/><br/>
                <div className="has-text-centered is-right">
                  <a className="button Landing-button is-medium">
                    Leer más
                  </a>
                  <a>  </a>
                  <a className="button Landing-button is-medium">
                    Participar
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>


      </section>
  )
};
