import React, { Component } from 'react'

export default class spreadOperator extends Component {
  render() {
        const first = {name:"talenta"}
        const second = {job:"student"}

        const combined ={...first,...second,location:"indonesia"}
        console.log(combined)
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
}
