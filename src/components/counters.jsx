import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    Counters: [
      { id: 1, value: 0 },
      { id: 2, value: 15 },
      { id: 3, value: 13 },
      { id: 4, value: 14 },
    ],
  };

  render() {
    const { onReset, onDelete, onIncrease } = this.props;
    // console.log(this.props);
    return (
      <div>
        <this.BtnReset />
        <br />
        <this.CounrersGenerate />
      </div>
    );
  }

  BtnReset = () => {
    const { onReset } = this.props;
    return (
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        reset
      </button>
    );
  };

  CounrersGenerate = () => {
    const { onDelete, onIncrease, Counters } = this.props;
    return Counters.map((counter) => (
      <Counter
        key={counter.id}
        counter={counter}
        onDelete={onDelete}
        onIncrease={onIncrease}
      ></Counter>
    ));
  };
}

export default Counters;
