import React from "react"
import { Link } from "react-router-dom"

// for showing User info and activity feed
class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
     
    const id = parseInt(this.props.match.params.id)
    this.props.fetchUser(id)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchUser(this.props.match.params.id)
    }
  }

  render() {
     
    const { userProfile, routes } = this.props

    if (!userProfile) return null

    const date = new Date(userProfile.created_at)
    const joinYear = date.getFullYear()
    // const userProfile

     
    let runs = routes.map((route) => {
      return (
        <li key={route.id}>
          <div>
            Title: {route.name}
            Distance: {route.distance}
            Description: {route.description}
          </div>
          <footer className="up comments">Comments section</footer>
        </li>
      )
    })

    return (
			<div className="user-profile-bg">
				<div className="user-profile-cntr">
					<header className="up header">
						<div className="header-top">
							<i class="fas fa-running fa-3x"></i>
							<div className="ht-right">
								<h2>
									{userProfile.first_name} {userProfile.last_name}
								</h2>
								<span>
									<i class="fas fa-calendar-day fa-xs"></i>
									Member since: {joinYear}
								</span>
							</div>
						</div>
						<div className="header-bottom">
							<span>
                <p>
                  Activity Feed
                </p>
              </span>
						</div>
					</header>
					<section className="up feed">
						List of runs
						<ul>{runs}</ul>
					</section>
				</div>
			</div>
		);
  }
}

export default UserProfile
