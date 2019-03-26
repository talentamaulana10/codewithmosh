import React, { Component } from 'react'

export default class Lvc extends Component {
    myFunction=()=>{
      var person ={
          name:"talent",
          walk(){},
          talk(){}, 
      };
     const target = "name";
     person[target.value] = "talentaaa"
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
