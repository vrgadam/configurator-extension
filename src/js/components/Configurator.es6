import React, { Component, PropTypes } from 'react';
import Icon from './Icon.es6';

import styles from '../../css/components/editor.css';

class Configurator extends Component {
  constructor(props) {
    super(props);
  }
  
  render = () => {
    return (
      <div className={styles.editor}>
        <Icon />
      </div>);
  };
}

export default Configurator;
