import React from 'react';
import {LandingNavbar} from './LandingNavbar'
import videoPlaceholder from '../../../assets/videoPlaceholder.png'


export const LandingCard3 = (props) => {
  return (
      <section id="LandingCard3"  className="hero is-default  is-transparent">
        <LandingNavbar handleEnter={props.handleEnter}/>
        <div className="hero-body is-transparent">
          <div className="container has-text-centered is-vcentered" style={{marginTop:"3vh"}}>
            <div className="columns is-vcentered">

              <div className="column is-4 is-offset-1">
                <h1 className="title is-2  has-text-grey-light has-text-left has-text-weight-light" style={{fontSize:"50pt"}}>
                  <hr style={{height:"4px"}}/>
                  ¿Cómo puedo participar?
                </h1>

                <br/>
                <div className="has-text-centered is-right">
                  <a className="button Landing-button is-medium" onClick={props.handleEnter}>
                    Participar
                  </a>
                </div>
                <br/>
                <br/>
              </div>

              <div className="column is-5 is-offset-1">
                <figure className="image is-4by3">
                  <img src={videoPlaceholder} alt="video" />
                </figure>
              </div>


            </div>
          </div>
        </div>


      </section>
  )
};
