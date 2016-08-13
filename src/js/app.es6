import ReactDOM from 'react-dom';
import React from 'react';
import Configurator from './components/Configurator.es6';

let root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Configurator/>, root);
