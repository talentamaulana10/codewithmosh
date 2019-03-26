import React, { Component } from 'react'

export default class TObject extends Component {
  render() {
    var person ={
        name:"talent",
        walk(){},
        talk(){}, 
    };
   const target = "name";
   person[target.value] = "talentaaa"
   console.log(person.name)
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
}
