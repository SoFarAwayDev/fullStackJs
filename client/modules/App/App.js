import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router'

// Import Components
import Helmet from 'react-helmet';



class App extends Component {
  constructor(props) {
    super(props);
  }

 
  render() {
    return (
      <div>
       
        <div>
          <Helmet
            title="Mii"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
 
          <div>
            {this.props.children}
          </div>

        </div>
      </div>
    );
  }
}


export default withRouter(App);
