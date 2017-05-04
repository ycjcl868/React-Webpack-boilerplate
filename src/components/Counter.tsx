import * as React from 'react'
export default class extends React.Component<any, any> {
  constructor (props){
    super(props)
  }
  render () {
    return (
      <div>
        <h1>{this.props.value}</h1>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}