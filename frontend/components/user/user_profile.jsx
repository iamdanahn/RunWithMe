import React from "react"
import { Link } from "react-router-dom"

// for showing User info and activity feed
class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    debugger
    const id = parseInt(this.props.match.params.id)
    this.props.fetchUser(id)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchUser(this.props.match.params.id)
    }
  }

  render() {
    debugger
    const { userProfile, routes } = this.props

    if (!userProfile) return null

    const date = new Date(userProfile.created_at)
    const joinYear = date.getFullYear()
    // const userProfile

    debugger
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
      <div className="user-profile-cntr">
        <header className="up header">
          <h2>
            {userProfile.first_name} {userProfile.last_name}
          </h2>
          <h4>Member since: {joinYear}</h4>
        </header>
        <div className="up feed-header">
          <p>Activity Feed</p>
        </div>
        <section className="up feed">
          List of runs
          <ul>{runs}</ul>
        </section>
      </div>
    )
  }
}

export default UserProfile
