import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0
  };
  formatCount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }
  styles = {};
  render() {
    return (
      <div>
        <span className="badge badge-primary m-2" style={this.styles}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">press me</button>
      </div>
    );
  }
}
