import React from "react"
import { Link } from "react-router-dom"

// for showing User info and activity feed
class UserProfile extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const id = parseInt(this.props.match.params.id);
		this.props.fetchUser(id);
		this.props.fetchRoutes(id);
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.id !== prevProps.match.params.id) {
			this.props.fetchUser(this.props.match.params.id);
		}
	}

	render() {
		const { userProfile, routes } = this.props;

		if (userProfile.id !== parseInt(this.props.match.params.id)) return null;

		const date = new Date(userProfile.created_at);
		const joinYear = date.getFullYear();

		let runs = routes.map((route) => {
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
					<div className="up-list-body">
						<div className="ulb-left">
							<img src={route.thumbnail} alt="route thumbnail" />
						</div>
						<div className="ulb-right-cntr">
							<div className="ulb-right">
								<h4>Distance</h4>
								<h2>
									{distance} <span>mi</span>
								</h2>
							</div>
						</div>
					</div>

					<footer className="up-comments-cntr">
						<div>
							<i className="far fa-comments fa-2x"></i>
						</div>
						<div>
							
						</div>
					</footer>
				</li>
			);
		});

		// entire profile page
		return (
			<div className="user-profile-bg">
				<div className="user-profile-cntr">
					<header className="up header">
						<div className="header-top">
							<div className="ht-left">
								<i className="fas fa-running fa-7x"></i>
							</div>
							<div className="ht-right">
								<h2>
									{userProfile.first_name} {userProfile.last_name}
								</h2>
								<span>
									<i className="fas fa-calendar-day fa-xs"></i>
									Member since: {joinYear}
								</span>
							</div>
						</div>
						<div className="header-bottom">
							<span>
								<p>Activity Feed</p>
							</span>
						</div>
					</header>
					<section className="up-feed">
						List of runs
						<div>
							<ul>{runs}</ul>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default UserProfile
