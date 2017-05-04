import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'


import { Hello } from './components/Hello'
import Counter from './components/Counter'

class App extends React.Component<any,any> {
  render() {
    return (
      <div>
        <Hello compiler="Typescript" framework="React" />
        <Counter value="1" />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)