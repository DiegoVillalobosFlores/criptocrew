import React, { Component } from 'react';

import '../../styles/Landing.css';
import '../../styles/LandingNew.css'


import LandingSlides from "./Components/LandingSlides";

class App extends Component {
  render() {
    return (
        <div className="App">
          <LandingSlides id="LandingSlides" handleEnter={this.props.handleEnter}/>
        </div>
    );
  }
}

export default App;
