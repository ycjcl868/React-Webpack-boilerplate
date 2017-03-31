import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import ReactMarkdown from 'react-markdown';
import './less/index.less';

import './prism.css'
import './prism.js'

import source from './md/zd1.md';


class App extends Component {
    render () {
      
        return (
          <div>
          Hello React Markdown
           <ReactMarkdown 
            unwrapDisallowed 
            source={source}
            
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