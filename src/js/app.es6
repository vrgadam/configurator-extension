import $ from 'jquery';
import ReactDOM from 'react-dom';
import React from 'react';
import Configurator from './components/Configurator.es6';

$('document').ready(() => {
  let root = $('<div/>', {
    id: 'root'
  });
  root.appendTo('body');

  ReactDOM.render(<Configurator/>, root.get(0));
});

