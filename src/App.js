import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

class App extends Component {
  state = {
    Counters: [
      { id: 1, value: 0 },
      { id: 2, value: 12 },
      { id: 3, value: 13 },
      { id: 4, value: 14 },
    ],
  };

  hendelDelete = (id) => {
    const Counters = this.state.Counters.filter((Counter) => Counter.id !== id);
    this.setState({ Counters });
  };

  hendleIncrease = (counter) => {
    const editState = (state) => {
      const index = state.Counters.indexOf(counter);
      return state.Counters[index].value++;
    };

    this.setState(editState);
  };
  hendelReset = () => {
    const Counters = this.state.Counters.map((c) => {
      c.value = 0;
      return c;
    });

    // console.log(Counters);
    this.setState({ Counters });
  };
  totalCounters = () => this.state.Counters.filter((c) => c.value > 0).length;

  //<span className="badge bg-pill bg-secondary m-2"> {tot} </span>
  render() {
    return (
      <React.Fragment>
        <NavBar TotalCounters={this.totalCounters()} />
        <main className="container">
          <Counters
            Counters={this.state.Counters}
            onDelete={this.hendelDelete}
            onIncrease={this.hendleIncrease}
            onReset={this.hendelReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
