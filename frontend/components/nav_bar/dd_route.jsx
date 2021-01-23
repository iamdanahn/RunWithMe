import React from "react";
import { Link } from "react-router-dom";

class RouteDDContent extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="dropdown">
				<Link to="/routes/search">
					<button className="dropdown-content">Find Route</button>
				</Link>
				<Link to="/routes/create">
					<button className="dropdown-content">Create Route</button>
				</Link>
				<Link to="/routes">
					<button className="dropdown-content">My Routes</button>
				</Link>
			</div>
		);
	}
}

export default RouteDDContent;
