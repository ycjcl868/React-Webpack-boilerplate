import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Router, Route, browserHistory, Link} from 'react-router'
import { Provider, connect } from 'react-redux'

import reducer from './reducers'
import Counter from './components/Counter'
import Help from './components/Help'

const store = createStore(reducer)


class App extends Component {
    componentDidMount() {
      store.subscribe(() =>
        this.forceUpdate()
      )
    }
    componentWillUnMount(){
      this.unsubscribe();
    }
    render () {
        return (
          <div>
            <Counter 
            value={store.getState().counter} 
            onIncrement={() => 
              store.dispatch({ type: 'INCREMENT' })
            }
            onDecrement={() => 
              store.dispatch({ type: 'DECREMENT' })
            }        
            />
            <Link to='/help'>Help</Link>
          </div>
        );
    }
}

render(

  <Router history={ browserHistory } >
    <Route path='/' component={App} />
    <Route path='/help' component={Help}></Route>
  </Router>,
  document.getElementById('app')
);
