import React, { Component } from 'react'

export default class Lvc extends Component {
    Var=()=>{
       const x = 6;
       x = 3;
       console.log(x)
    }
    
  render() {
    return (
      <div>
        {this.Var()}
        <h1>hello world</h1>
      </div>
    )
  }
}
