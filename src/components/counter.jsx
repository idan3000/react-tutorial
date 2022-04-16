import React, { Component } from "react";

class Counter extends Component {
  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <this.Span />
        <this.BtnIncrease />
        <this.BtnDelete />
        <br />
      </React.Fragment>
    );
  }

  Span = () => (
    <span className={this.getBadgeClasses()}>
      {this.formatCount(this.props.value)}
    </span>
  );

  BtnIncrease = () => (
    <button
      onClick={() => this.props.onIncrease(this.props.counter)}
      className="btn btn-secondary btn-sm"
    >
      Increments
    </button>
  );

  BtnDelete = () => (
    <button
      onClick={() => this.props.onDelete(this.props.counter.id)}
      className="btn-danger btn-sm m-2"
    >
      Delete
    </button>
  );

  getBadgeClasses() {
    let classses = `badge m-2 bg-`;
    classses += this.props.counter.value === 0 ? `warning` : `primary`;
    return classses;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? `Zero` : value;
  }
}

export default Counter;
