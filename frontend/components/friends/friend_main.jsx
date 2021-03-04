import React from "react"
import { Link } from "react-router-dom";

class Friends extends React.Component {
	constructor(props) {
		super(props);

		this.unFriend = this.unFriend.bind(this);
	}

	componentDidMount() {
		this.props.fetchFriends();
	}

	unFriend(friendId) {
		return (e) => {
			e.preventDefault();
			this.props.unFriend(friendId);
		};
	}

	render() {
		const selected1 =
			this.props.match.path === "/friends"
				? "friends-links selected"
				: "friends-links";
		const selected2 =
			this.props.match.path === "/friends/find"
				? "friends-links selected"
				: "friends-links";

		const frands = this.props.friends.map((friend) => {
			return (
				<li key={friend.id} className="friend-item-cntr">
					<div className="friend-item">
						<Link to={`/profile/${friend.id}`}>
							{`${friend.first_name} ${friend.last_name}`}
						</Link>
						<div>
							<Link to="" onClick={this.unFriend(friend.id)}>
								Unfriend
							</Link>
						</div>
					</div>
				</li>
			);
		});

		return (
			<div className="friends-bg">
				<div className="friends-cntr">
					<section className="friends-header">
						<Link to="/friends" className={selected1}>
							My Friends
						</Link>
						<Link to="/friends/find" className={selected2}>
							Find Friends
						</Link>
					</section>

					<section className="friends-body">
						<div className="fb list">
							<h3>
								Friends ({frands.length} of {frands.length})
							</h3>
							<ul> {frands} </ul>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default Friends
