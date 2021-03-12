import React from "react";
import { Link } from "react-router-dom";

class CommunityLinks extends React.Component {
	render() {
		const { currentUser, logout } = this.props;

		return currentUser ? (
			<div className="dropdown-content">
				<Link to="/friends">Friends</Link>
			</div>
		) : null;
	}
}

export default CommunityLinks;
