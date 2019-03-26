import React, { Component } from 'react'

export default class Lvc extends Component {
    myFunction=()=>{
      var person ={
          name:"talenta",
          walk(){},
          talk(){}, 
      };
      person["name"] = "jhon"
      console.log(person.name)
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
