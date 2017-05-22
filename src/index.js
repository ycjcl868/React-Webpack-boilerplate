import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux'

import Main from './containers/Main'

render(
  <Main />,
  document.getElementById('app')
);
