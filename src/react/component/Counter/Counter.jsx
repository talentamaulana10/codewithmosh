import React, { Component } from 'react'

export default class Counter extends Component {
    state={
        count:0
    }
    formatCount(){
        const { count } = this.state
        const x = <h1>Zero</h1>
        return count === 0 ? x:count
    }
  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>press me</button>
      </div>
    )
  }
  
}
