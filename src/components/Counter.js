import { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    // declare state
    this.state = { counter: 0 };
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter > 1 ? this.state.counter - 1 : 0,
    });
  };

  handleReset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div className="card m-2 p-4">
        <h3 className="text-center">
          Class-based counter: {this.state.counter}
        </h3>

        <div className="btn-group" role="group">
          <button
            onClick={this.handleIncrement}
            type="button"
            className="btn btn-success"
          >
            Increment
          </button>
          <button
            onClick={this.handleReset}
            type="button"
            className="btn btn-danger"
          >
            Reset
          </button>
          <button
            onClick={this.handleDecrement}
            type="button"
            className="btn btn-warning"
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}
