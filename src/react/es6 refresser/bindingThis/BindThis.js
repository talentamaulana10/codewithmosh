import React, { Component } from 'react'

export default class BindThis extends Component {
  render() {
      const person ={
          name:"talenta",
          walk(){
              console.log(this);
          }
      }
      person.walk();

      const walk = person.walk.bind(person);
      walk()
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
}
