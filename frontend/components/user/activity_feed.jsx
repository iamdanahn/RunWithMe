import React from "react";
import { Link, withRouter } from "react-router-dom";

class ActivityFeed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: "",
			showError: false,
			showComments: false,
		};

		this.clearInput = this.clearInput.bind(this);
		this.renderComments = this.renderComments.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		// this.props.fetchRoutes(this.props.match.params.id)
		// if (this.state.showError) {
		// 	this.setState({ ["showError"]: false });
		// }
	}
	
	// clears comment input box after submitting
	clearInput() {
		document.getElementById("comment-input").value = "";
		this.setState({
			["comment"]: "",
			["showError"]: false,
		});
	}

	renderComments() {
		if (this.state.showComments) {
			this.setState({ ["showComments"]: false })
		} else {
			this.setState({ ["showComments"]: true })
		}
		this.setState({ ["showError"]: false})
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
				body: this.state.comment,
				commentable_id: routeId,
				commentable_type: "Route",
				// "user_id" is handled in the backend controlller
			};

			if ((this.state.comment === "") & !this.state.showError) {
				this.setState({ showError: true });
			} else {
				this.props.createComment(newComment).then(() => {
					// clears input text area
					this.clearInput();

					// fetch routes in the end to update the list
					this.props.fetchRoutes(this.props.match.params.id);
				});
			}
		};
	}


	render() {
		console.log(this.state);

		const { currentUser, userProfile, routes } = this.props;

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

			let comments = [];
			// if comments exist, arrays comments
			if (Object.keys(this.props.comments).length) {
				comments = this.props.comments[route.id].comments;
			}

			// list of each route's comments
			const routeComments = comments.map((comment) => {
				// setup for creation date
				let month = new Date(comment.created_at).getMonth() + 1;
				let day = new Date(comment.created_at).getDate();
				let year = new Date(comment.created_at).getFullYear();

				// delete button only if creator
				let deleteButton = null;
				if (comment.commenter.id === currentUser.id) {
					deleteButton = (
						<button onClick={() => this.handleDelete(comment.id)}>
							Delete
						</button>
					);
				}

				return (
					<li key={comment.id} className="comments-item">
						<div className="ci-left">
							<Link to={`/profile/${comment.commenter.id}`}>
								{comment.commenter.first_name} {comment.commenter.last_name}
							</Link>
							<div className="ci-body">{comment.body}</div>
						</div>
						<div className="ci-right">
							<div>
								{month}/{day}/{year}
							</div>
							{deleteButton}
						</div>
					</li>
				);
			});

			// comment error div
			let commentError = null;
			if (this.state.showError) {
				commentError = (
					<div className="comment-errors-cntr">
						<p className="comment-error"> Please enter some text. </p>
					</div>
				);
			}

			// route's comments and input text box
			let lowerComments = null;
			if (this.state.showComments) {
				lowerComments = (
					<div>
						<div className="comments-lower-cntr">
							<ul className="comments-lower">{routeComments}</ul>
						</div>

						<footer className="create-comment-cntr">
							<div className="create-comment-box">
								<form onSubmit={this.handleSubmit(route.id)}>
									<input
										input="text"
										placeholder="Write a comment..."
										onChange={this.update("comment")}
										id="comment-input"
									/>
									<button>POST</button>
								</form>
							</div>
							{commentError}
						</footer>
					</div>
				);
			}

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
							<i
								className="far fa-comments fa-2x"
								onClick={this.renderComments}
							/>
							<h3 className="comment-count">{comments.length}</h3>
						</div>
					</section>

					{lowerComments}
				</li>
			);
		});
	}
}

export default withRouter(ActivityFeed);
