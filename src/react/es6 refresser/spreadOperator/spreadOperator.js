import React, { Component } from 'react'

export default class spreadOperator extends Component {
  render() {
      const first= [1,2,3];
      const second= [2,3,4];
      const clone= [...first,...second];
      console.log(clone)
      
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
}
