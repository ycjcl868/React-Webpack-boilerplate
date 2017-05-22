import React, { Component } from 'react'
import { Link } from 'react-router'
import { createStore } from 'redux'
import reducer from '../reducers'
const store = createStore(reducer)

import Counter from '../components/Counter'

export default class App extends Component {
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

