import React, { Component } from "react";

class BirthDay extends Component {
	constructor() {
		super();

		this.state = {
      showDay: false,
      day: 1
		};

		this.showDay = this.showDay.bind(this);
	}

	showDay(e) {
		e.preventDefault();

    const toggledShow = !this.state.showDay;
		this.setState({ showDay: toggledShow });
	}

	render() {
		return (
			<div>
				<button onClick={this.showDay}>Day</button>

				{this.state.showDay ? (
					<div
						className="menu"
						ref={(element) => {
							this.dropdownMenu = element;
						}}
					>
						<button value="1"> 1 </button>
						<button value="2"> 2 </button>
						<button value="3"> 3 </button>
					</div>
				) : null}
			</div>
		);
	}
}
export default BirthDay;