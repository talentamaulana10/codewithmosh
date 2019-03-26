import React, { Component } from 'react'

export default class Lvc extends Component {
    Var=()=>{
        for(var i = 0; i<5; i++){
            console.log(i)
        }
    }
  render() {
    return (
      <div>
        {this.Var()}
      </div>
    )
  }
}
