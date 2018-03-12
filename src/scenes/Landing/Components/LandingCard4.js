import React from 'react';
import {LandingNavbar} from './LandingNavbar'

export const LandingCard4 = (props) => {
  return (
      <section id="LandingCard4" className="">
        <LandingNavbar handleEnter={props.handleEnter}/>
        <div className="hero-body is-transparent is-vcentered">
          <div className="container has-text-centered">
            <div className="columns fixview">

              <div className="column is-5 is-offset-1 ">
                <h1 className="title is-2 has-text-grey-light has-text-right has-text-weight-light" style={{fontSize:"50pt"}}>
                  <hr style={{height:"4px"}}/>
                  Comunicate con nosotros
                </h1>

                <br/>

                <br/>
                <br/>
              </div>

              <div className="column is-4 is-offset-1 has-text-grey-light has-text-left">
                <form>
                  <br/>
                  <div className="field is-medium">
                    <label className="label has-text-grey-light is-medium" >Asunto</label>
                    <div className="control">
                      <input className="input Landing-input has-text-grey-light is-medium" type="text" placeholder="" onChange={(evt) => props.handleSupportQuery("subject",evt.target.value)}/>
                    </div>
                  </div>
                  <div className="field is-medium">
                    <label className="label has-text-grey-light is-medium" style={{marginTop:"1.5em"}}>Correo</label>
                    <div className="control">
                      <input className="input Landing-input has-text-grey-light is-medium" type="email" placeholder="" onChange={(evt) => props.handleSupportQuery("email",evt.target.value)}/>
                    </div>
                  </div>
                  <div className="field is-medium">
                    <label className="label is-medium has-text-grey-light" style={{marginTop:"1.5em"}}>Mensaje</label>
                    <div className="control">
                      <textarea   cols="50" className=" has-text-grey-light is-large textarea Landing-input" placeholder="" onChange={(evt) => props.handleSupportQuery("subject",evt.target.value)}/>
                    </div>
                  </div>
                  <div className="control has-addons-right">
                    <button onClick={props.handleSupportQuerySubmit} className="button Landing-button is-main is-medium is-right" style={{marginTop:"1.5em"}}>Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
};
