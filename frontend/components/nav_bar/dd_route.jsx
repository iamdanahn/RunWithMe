import React from "react";
import { Link } from "react-router-dom";

class RouteLinks extends React.Component {

	render() {
    const { currentUser, logout } = this.props

    return currentUser ? (
			<div className="dropdown-content">
				{/* <Link to="/routes/search">Find Route</Link> */}
				<Link to="/routes/create">Create Route</Link>
				<Link to="/dashboard">My Routes</Link>
			</div>
		) : null;
	}
}

export default RouteLinks;


{
	/* <div className="dropdown-content">
	<Link to="/routes/search">Find Route</Link>
	<Link to="/routes/create">Create Route</Link>
	<Link to="/routes">My Routes</Link>
</div> */
}