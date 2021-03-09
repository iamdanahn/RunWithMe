import React from 'react'
import { Link } from "react-router-dom"

class RouteShow extends React.Component {
	constructor(props) {
		super(props);

		this.editPage = this.editPage.bind(this);
	}

	componentDidMount() {
		const routeId = this.props.match.params.routeId;
		// debugger;
		this.props.fetchRoute(routeId);
		this.props.fetchComments(routeId);
		// fetches single route and saves it in state to be used
	}

	componentDidUpdate(prevProps) {
		// checks if url changed, if yes, update
		if (this.props.match.params.id !== prevProps.match.params.id) {
			this.props.fetchUser(this.props.match.params.id);
			this.props.fetchComments(this.props.match.params.id);
		}
	}

	editPage(e) {
		e.preventDefault();
		const { route } = this.props;

		this.props.history.push(`/routes/${route.id}/edit`);
	}

	render() {
		// debugger;
		// need to return null for cDM, then route info can be fetched
		if (!this.props.route) return null;

		// debugger;

		const { route, currentUser, comments, deleteComment } = this.props;
		const createDate = new Date(route.created_at).toDateString();
		const updateDate = new Date(route.updated_at).toDateString();

		// console.log(route)
		// console.log(this.props)

		let deleteButton;
		if (comments.user_id === currentUser.id) {
			deleteButton = (
				<button onClick={() => deleteComment(comment.id)}>Delete</button>
			);
		} else {
			deleteButton = null;
		}

		const routeComments = comments.map((comment) => {
			return (
				<li key={comment.id} className="comment-cntr">
					<div className="comment-body">
						<h4>
							{comment.first_name} {comment.last_name}
						</h4>
						<p>{comment.body}</p>
					</div>
					<div className="comment-delete">{deleteButton}</div>
				</li>
			);
		});

		return (
			<div className="route-show-cntr">
				{/* section 1 - route title, distance, user name, 
            date created, activity, location, edit button */}
				<div className="rs-body">
					<div className="bar">
						<Link to={`/routes/${route.id}/edit`}>Edit Page</Link>
					</div>

					<section className="rs-content1">
						<div className="rs-left-half">
							<h2>{route.name}</h2>
							<h1>{route.distance}</h1>
							<h5>Distance (MI)</h5>
						</div>
						<div className="rs-right-half">
							<br />
							<div className="rs-user">
								User: {`${currentUser.first_name} ${currentUser.last_name}`}
							</div>
							<br />
							Created Date: {createDate}
							<br />
							Updated Date: {updateDate}
							<br />
							Activity: {route.activity}
							<br />
							Location: {route.location}
						</div>
					</section>

					<section className="rs-comments">
						<ul>{routeComments}</ul>
					</section>

					{/* section 2 - minimap, comments section */}
					<section 
						id="rs-map"
						ref={map => this.mapNode = map}
					>
						Map
					</section>
				</div>
			</div>
		);
	}
}

export default RouteShow;