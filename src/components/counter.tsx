import React, { Component } from "react";
import { Count } from "../types/count";

interface IProps {}

class Counter extends Component<IProps, Count> {
	constructor(props: any) {
		super(props);
		this.state = {
			number: null,
		};
	}

	componentDidMount() {
		this.setState({
			number: 0,
		});
	}

	valueIsSet = (value: number | null): boolean => {
		return !(!value && value !== 0);
	};

	format = (): number | string | null => {
		const { number } = this.state;
		return this.valueIsSet(number)
			? number === 0
				? "Zero"
				: number
			: "State Number not set";
	};

	iterateCounter = (): void => {
		if (this.valueIsSet(this.state.number)) {
			this.setState({ number: this.state.number! + 1 });
		}
	};

	render() {
		return (
			<React.Fragment>
				<span className="badge bg-info m-2">{this.format()}</span>
				<button
					className="btn btn-success btn-sm"
					onClick={this.iterateCounter}
				>
					Increment
				</button>
			</React.Fragment>
		);
	}
}

export default Counter;
