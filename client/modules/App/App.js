import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router'

import { renderRoutes } from 'react-router-config';

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
            <h1>Mii root</h1>
          <div>
                  {renderRoutes(this.props.route.routes)}
          </div>

        </div>
      </div>
    );
  }
}


export default withRouter(App);
