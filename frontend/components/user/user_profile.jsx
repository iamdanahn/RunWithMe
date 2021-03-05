import React from "react"
import { Link } from "react-router-dom"
import { ProfileItems } from "./user_profile_items"

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
			this.props.fetchRoutes(this.props.match.params.id);
		}
	}

	render() {
		const { userProfile, routes } = this.props;

		if (userProfile.id !== parseInt(this.props.match.params.id)) return null;

		const date = new Date(userProfile.created_at);
		const joinYear = date.getFullYear();

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
							<ul>
							<ProfileItems  userProfile={userProfile} routes={routes} />							</ul>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default UserProfile
