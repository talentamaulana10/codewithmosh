import React, { Component } from 'react'

export default class Lvc extends Component {
   
    Let=()=>{
        for(let i = 0 ; i<=10; i++){
            console.log(i)
        }
    }
    
  render() {
    return (
      <div>
        {this.Let()}
      </div>
    )
  }
}
