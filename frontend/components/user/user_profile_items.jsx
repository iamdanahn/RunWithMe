import React from "react";
import { Link } from "react-router-dom";

export const ProfileItems = ({ userProfile, routes }) => {
	debugger;

	return routes.map((route) => {
		// format activity wording
		let activity =
			route.activity === "bike"
				? "biked"
				: route.activity === "walk"
				? "walked"
				: "ran";

		let distance = route.distance.split(" ")[0];

		// create each route's contents
		return (
			<li key={route.id} className="up-list-cntr">
				<header className="up-list-header">
					<p>
						{userProfile.first_name} {userProfile.last_name} {activity}{" "}
						{route.distance}les
					</p>
					<i className="fas fa-map-marker-alt fa-2x"></i>
				</header>
				<Link className="up-list-body" to={`/routes/${route.id}`}>
					<div className="ulb-left">
						<img src={route.thumbnail} alt="route thumbnail" />
					</div>
					<div className="ulb-right-cntr">
						<div className="ulb-right">
							<h4>Distance</h4>
							<h2>
								{distance}
								<span>mi</span>
							</h2>
						</div>
					</div>
				</Link>

				<footer className="up-comments-cntr">
					<div className="comments-cntr upper">
						<i className="far fa-comments fa-2x"> </i>
					</div>
					<div className="comments-cntr lower"></div>
				</footer>
			</li>
		);
	});
};
