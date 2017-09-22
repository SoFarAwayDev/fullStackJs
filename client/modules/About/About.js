import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchData as getTxt} from "./AboutActions";
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import styles from './about.scss';

class About extends Component {
  static propTypes={
    aboutData: PropTypes.string,
    getTxt: PropTypes.func
  }
  
  static fetchData(store) {
    return store.dispatch(getTxt());
  }

  componentDidMount() {
    this.props.getTxt();
  }

  render() {

    return (
      <div>
          <div>
            <span className={styles.ml__data_string}>{this.props.aboutData}</span>
          </div>
          <div>
            <a className={`btn btn-primary ${styles.ml__link_to_main}`} href="/">Mii)))</a>
          </div>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.



// Retrieve data from store as props
function mapStateToProps({about}) {
  return {
    aboutData: about.data,
  };
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getTxt }, dispatch);



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));
