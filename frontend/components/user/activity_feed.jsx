import React from "react";
import { Link, withRouter } from "react-router-dom";

class ActivityFeed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: "",
		};

		this.handleDelete = this.handleDelete.bind(this);
	}

	componentDidUpdate() {
		// this.props.fetchRoutes(this.props.match.params.id)
	}

	update(value) {
		return (e) => {
			this.setState({ [value]: e.currentTarget.value });
		};
	}

	handleDelete(commentId) {
		// promised below so fetchRoutes would happen immediately after
		this.props.deleteComment(commentId).then(() => {
			this.props.fetchRoutes(this.props.match.params.id);
		});
	}

	handleSubmit(routeId) {
		return (e) => {
			e.preventDefault();
			const newComment = {
				"body": this.state.comment, 
				"commentable_id": routeId, 
				"commentable_type": "Route",
				// "user_id": this.props.userProfile.id // this is handled in the backend controlller
			}
			this.props.createComment(newComment).then(() => {
				this.props.fetchRoutes(this.props.match.params.id)
				// fetch routes in the end to update the list
			})
		};
	}

	render() {
		const { userProfile, routes } = this.props;

		// create each route's contents
		return routes.map((route) => {
			// grab distance # only
			const distance = route.distance.split(" ")[0];

			// format activity wording
			const activity =
				route.activity === "bike"
					? "biked"
					: route.activity === "walk"
					? "walked"
					: "ran";

			// if comments exist, arrays comments
			let comments = [];
			if (this.props.comments) {
				comments = this.props.comments[route.id].comments;
			}

			debugger;

			// list of each route's comments 
			const routeComments = comments.map((comment) => {
				return (
					<li key={comment.id} className="comments-item">
						<div className="ci-left">
							<Link to={`/profile/${comment.commenter.id}`}>
								{comment.commenter.first_name} {comment.commenter.last_name}
							</Link>
							<div className="ci-body">{comment.body}</div>
						</div>
						<div className="ci-right">
							<button onClick={() => this.handleDelete(comment.id)}>
								Delete
							</button>
						</div>
					</li>
				);
			});


			// list of each route
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

					{/* lower portion of route's div */}
					<section className="up-comments-cntr">
						<div className="comments-cntr upper">
							<i className="far fa-comments fa-2x"> </i>
						</div>
					</section>
					<div className="comments-lower-cntr">
						<ul className="comments-lower">
							{routeComments}
						</ul>
					</div>

					{/* comments input box */}
					<footer className="create-comment-cntr">
						<div className="create-comment-box">
							<form onSubmit={this.handleSubmit(route.id)}>
								<input
									input="text"
									placeholder="Write a comment..."
									onChange={this.update("comment")}
								/>
								<button>POST</button>
							</form>
						</div>
					</footer>
				</li>
			);
		});
	}
}

export default withRouter(ActivityFeed);
