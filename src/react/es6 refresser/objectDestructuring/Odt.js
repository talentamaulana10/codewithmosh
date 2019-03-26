import React, { Component } from 'react'

export default class Odt extends Component {
  render() {
      const address={
          street:'ngaliyan',
          city:'',
          country:''
      };

      const {street:st} = address;
      console.log(st)
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
}
