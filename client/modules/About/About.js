import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {fetchData as getTxt} from "./AboutActions";
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'

import styles from './about.css';

class About extends Component {
  static fetchData(store) {
    return store.dispatch(getTxt());
  }

  componentDidMount() {
    this.props.getTxt();
  }

  render() {

    return (
      <div>

          <span className={styles.data_string}>{this.props.aboutData}</span>

          <a className={styles.link_to_main} href="/">Mii)))</a>
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
