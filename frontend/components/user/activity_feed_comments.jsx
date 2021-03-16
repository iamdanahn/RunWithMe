import React from "react";

class FeedComments extends React.Component {
	render() {
		const { handleSubmit, route, routeComments, update } = this.props;
		return (
			<div className="comment-hide">
				<div className="comments-lower-cntr">
					<ul className="comments-lower">{routeComments}</ul>
				</div>

				<footer className="create-comment-cntr">
					<div className="create-comment-box">
						<form onSubmit={handleSubmit(route.id)}>
							<input
								input="text"
								placeholder="Write a comment..."
								onChange={update("comment")}
								id="comment-input"
							/>
							<button>POST</button>
						</form>
					</div>
				</footer>
			</div>
		);
	}
}

export default FeedComments;
