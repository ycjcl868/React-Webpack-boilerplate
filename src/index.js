import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, Link} from 'react-router'
import { Provider, connect } from 'react-redux'

import App from './containers/App'
import Help from './components/Help'

render(
  <Router history={ browserHistory } >
    <Route path='/' component={App} />
    <Route path='/help' component={Help}></Route>
  </Router>,
  document.getElementById('app')
);
