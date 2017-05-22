import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory, Link} from 'react-router'

import App from '../containers/App'
import Help from '../components/Help'

export default class Main extends Component {
    render () {
        return (
            <Router history={ browserHistory } >
                <Route path='/' component={App} />
                <Route path='/help' component={Help} />
            </Router>            
        );
    }
}

