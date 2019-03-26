import React, { Component } from 'react'

export default class Odt extends Component {
  render() {
      const address={
          street:'',
          city:'',
          country:''
      };

      const { street : st } = address;
      console.log(address)
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
}
