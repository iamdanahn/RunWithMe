import React from "react";
import { Link } from "react-router-dom";

// export const ProfileItems = ({ deleteComment, userProfile, routes }) => {

class ProfileItems extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(commentId) {
		this.props.deleteComment(commentId);
	}

	render() {
		const { userProfile, routes } = this.props;
		
		// create each route's contents
		return (routes.map((route) => {
				// grab distance # only
				const distance = route.distance.split(" ")[0];
				
				// format activity wording
				const activity = route.activity === "bike" ? "biked"
				: route.activity === "walk" ? "walked": "ran";
				
				// if comments exist, arrays comments
				let comments = [];
				if (route.route_comments) {
					comments = Object.values(route.route_comments);
				}

				debugger;
				const routeComments = comments.map((comment) => {
					return (
						<li key={comment.id}>
							<div className="comment-left">
								<Link to={`/profile/${userProfile.id}`}>
									{comment.first_name} {comment.last_name}
								</Link>
								<p>{comment.body}</p>
							</div>
							<div className="comment-right">
								<button onClick={() => this.handleClick(comment.id)}>
									Delete
								</button>
							</div>
						</li>
					);
				});

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
						<div className="comments-cntr lower">
							<ul>{routeComments}</ul>
						</div>
					</footer>
				</li>
			);
		})
	)}
};

export default ProfileItems;