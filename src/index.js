import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import './less/index.less';

class App extends Component {
    render () {
      
        return (
          <div>
          Hello React Markdown
          <h1>DEV Mode: </h1>
          <code>npm dev</code> 
          
          <h1>Production Mode: </h1>
          <code>npm start</code> 

             />,
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