import React from "react"
import { Link } from "react-router-dom"

// for showing User info and activity feed
class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  // }

  render() {
    const user = this.props.currentUser
    const date = new Date(user.created_at)
    const joinYear = date.getFullYear()

    return (
      <div className="user-profile-cntr">
        <header className="up header">
          <h2>
            {user.first_name} {user.last_name}
          </h2>
          <h4>Member since: {joinYear}</h4>
        </header>
        <div className="up feed-header">
          <p>Activity Feed</p>
        </div>
        <section className="up feed">List of runs</section>
      </div>
    )
  }
}

export default UserProfile
