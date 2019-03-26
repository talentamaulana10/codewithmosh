import React, { Component } from 'react'

export default class AmM extends Component {
  render() {
      const colors = ['red','green','blue']
      const item = colors.map(function(color){
          return '<li>'+color+'</li>'
      })
      console.log(item)
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
}
