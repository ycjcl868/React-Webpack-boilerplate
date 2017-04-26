import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import { counter } from './reducers'
import Counter from './components/Counter'

const store = createStore(counter)


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
            value={store.getState()} 
            onIncrement={() => 
              store.dispatch({ type: 'INCREMENT' })
            }
            onDecrement={() => 
              store.dispatch({ type: 'DECREMENT' })
            }        
          />
          </div>
        );
    }
}

ReactDOM.render(
(
  <App />
),
document.getElementById('app')
);
