import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchData as getTxt} from "./MiiActions";
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Mii extends Component {
  
  static propTypes={
    getTxt: PropTypes.func,
    miiData: PropTypes.string
  }

  static fetchData(store) {
    return store.dispatch(getTxt());
  }

  componentDidMount() {
    this.props.getTxt();
  }

  render() {
    return (
      <div className={styles.hello_block}>
       <h1>{this.props.miiData}</h1>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.

// Retrieve data from store as props
function mapStateToProps({mii}) {
  return {
    miiData: mii.data,
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getTxt }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Mii));
