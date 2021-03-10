import React from 'react';
import { Link } from "react-router-dom";
import Modal from "../../modal/modal";

class RouteIndexItem extends React.Component {
	constructor(props) {
		super(props);
	}

	// componentWillUnmount() {
	// 	debugger;
	// 	this.props.clearRoutes();
	// 	debugger;
	// }

	render() {
		const { route, deleteRoute, openModal } = this.props;
		debugger;
		let month = new Date(route.created_at).getMonth() + 1;
		let day = new Date(route.created_at).getDate();
		let year = new Date(route.created_at).getFullYear();

		let activity =
			route.activity === "bike"
				? "Cycling"
				: route.activity === "walk"
				? "Walking"
				: "Running";

		return (
			<tr className="route-row">
				<td className="route-row-img">
					<Link to={`/routes/${route.id}`}>
						<img
							className="route-thumbnail"
							src={route.thumbnail}
							alt="route thumbnail"
						/>
					</Link>
				</td>
				<td className="route-row-date">
					<Link to={`/routes/${route.id}`}>
						{month}/{day}/{year}
					</Link>
				</td>
				<td className="route-row-distance">{route.distance}</td>
				<td className="route-row-activity">{activity}</td>
				<td className="route-row-title">
					<Link to={`/routes/${route.id}`}>{route.name}</Link>
				</td>
				<td className="route-row-location">{route.location}</td>
				<td className="route-row-privacy">
					<i className="fas fa-globe-americas"></i>
				</td>
				<td className="route-row-options">
					<div>
						<Link to={`/routes/${route.id}/edit`}>Edit</Link>
						<a routeid={route.id} onClick={() => openModal("open")}>
							Delete
						</a>
					</div>
					<Modal deleteRoute={() => deleteRoute(route.id)} />
				</td>
			</tr>
		);
	}
}


export default RouteIndexItem;