import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {fetchData} from "./AboutActions";

class About extends Component {


  render() {
    return (
      <div>
       {this.props.aboutData}

       <a href="/">Mii)))</a>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
About.need = [() => { return  fetchData() }];


// Retrieve data from store as props
function mapStateToProps({about}) {
  return {
    aboutData: about.data,
  };
}


export default connect(mapStateToProps)(About);
