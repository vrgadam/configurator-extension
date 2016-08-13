import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Configurator extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    open: false
  }

  toggleBody = () => {
    console.log('toggle');
    this.setState({open: !this.state.open});
  }

  render = () => {
    let bodyClasses = {
      'configurator-body': true,
      'open': this.state.open
    };

    return (<div id='amp-configurator'>
       <div className='configurator-icon' onClick={this.toggleBody.bind(this)}></div>
       
       <div className={classNames(bodyClasses)}></div>
    </div>);
  };
}

export default Configurator;
