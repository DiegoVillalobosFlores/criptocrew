import React, {Component} from 'react';

import {LandingCard1, LandingCard2, LandingCard3, LandingCard4} from "../index";
import {  SectionsContainer, Section} from 'react-fullpage';

import Snackbar from 'material-ui/Snackbar';

export default class  LandingSlides  extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      subject: "",
      message: "",
      snackbarOpen: false,
    }
  }

  handleQuerySubmit = () => {
    this.setState({
      snackbarOpen: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      snackbarOpen: false,
    });
  };

  handleQueryChange = (field,value) => {
    console.log(field,value);
    this.setState({
        [field]: value
    })
  };

  render() {
    let options = {
      sectionClassName: 'Section',
      anchors: ['IPO', 'rendimientos', 'faq', 'Contacto'],
      scrollBar: false,
      navigation: true,
      verticalAlign: true,
      delay: 1000,
      sectionPaddingTop: '10vh',
      sectionPaddingBottom: '10vh',
      arrowNavigation: true
    };

    return (
        <div>
          <SectionsContainer className="container" {...options}>
            <Section className="is-centered"><LandingCard1 handleEnter={this.props.handleEnter}/></Section>
            <Section className="is-centered"><LandingCard2 handleEnter={this.props.handleEnter}/></Section>
            <Section className="is-centered"><LandingCard3 handleEnter={this.props.handleEnter}/></Section>
            <Section className="is-centered">
                <LandingCard4
                  handleEnter={this.props.handleEnter}
                  handleSupportQuery={this.handleQueryChange}
                  handleSupportQuerySubmit={this.handleQuerySubmit}/>
            </Section>
          </SectionsContainer>
          <Snackbar
              open={this.state.snackbarOpen}
              message={"Se ha enviado la información de soporte"}
              autoHideDuration={4000}
              onClose={this.handleRequestClose}
          />
        </div>
    );
  }
};
