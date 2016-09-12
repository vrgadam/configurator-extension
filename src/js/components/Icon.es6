import React, { Component, PropTypes } from 'react';
import styles from '../../css/components/icon.css';

class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (<div className={styles.icon}></div>);
  };

}

export default Icon;
