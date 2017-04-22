import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import { counter } from './reducer'
import './less/index.less'

import Counter from './components/Counter'


const store = createStore(counter)

class App extends Component {
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

const render = () => {
  ReactDOM.render(
  (
    <App />
  ),
  document.getElementById('app')
)};

store.subscribe(render)
render()