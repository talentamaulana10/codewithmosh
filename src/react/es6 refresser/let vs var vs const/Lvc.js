import React, { Component } from 'react'

export default class Lvc extends Component {
    myFunction=()=>{
      var person ={
          name:"talenta",
          walk(){},
          talk(){}, 
      };
      const tata =  person.name;
      console.log(tata)
    }

    
  render() {
    return (
      <div>
        {this.myFunction()}
        <h1>hello world</h1>
      </div>
    )
  }
}
