import React, { Component } from 'react'

export default class This extends Component {
  render() {
      const person={
          name:"talenta",
          walk(){
              console.log(this);
          }
      };
      person.walk();

      const walk = person.walk();
      console.log(walk)

    return (
      <div>
        <h1>Hello world</h1>
      </div>
    )
  }
}
