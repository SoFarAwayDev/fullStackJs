import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {fetchData} from "./MiiActions";


class Mii extends Component {


  render() {
    return (
      <div>
       {this.props.miiData}
       <a href="/about">About)))</a>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
Mii.need = [() => { return  fetchData() }];

// Retrieve data from store as props
function mapStateToProps({mii}) {
  return {
    miiData: mii.data,
  };
}


export default connect(mapStateToProps)(Mii);
