import React, { Component } from "react";
import { Count } from "../types/count";

class Counter extends Component {
	state: Count = {
		number: 0,
	};

	render() {
		return (
			<React.Fragment>
				<h1>{this.format()}</h1>
				<button>Increment</button>
			</React.Fragment>
		);
	}

	format = (): number | string => {
		const { number } = this.state;
		return number === 0 ? "Zero" : number;
	};
}

export default Counter;
