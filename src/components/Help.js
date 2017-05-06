import React, { Component } from 'react'
import { Link } from 'react-router'
export default class Help extends Component {
  constructor (props){
    super(props)
  }
  render () {
    return (
      <div>
        Help Kylin
        <Link to='/'>Home</Link>
      </div>
    )
  }
}