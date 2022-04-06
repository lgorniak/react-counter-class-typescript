import React, { Component } from "react";
import { Count } from "../types/count";

interface IProps {}

class Counter extends Component<IProps, Count> {
	constructor(props: any) {
		super(props);
		this.state = {
			number: 0,
		};
	}

	format = (): number | string => {
		const { number } = this.state;
		return number === 0 ? "Zero" : number;
	};

	iterateCounter = (): void => {
		if (this.state) this.setState({ number: this.state.number + 1 });
	};

	render() {
		return (
			<React.Fragment>
				<h1>{this.format()}</h1>
				<button onClick={this.iterateCounter}>Increment</button>
			</React.Fragment>
		);
	}
}

export default Counter;
