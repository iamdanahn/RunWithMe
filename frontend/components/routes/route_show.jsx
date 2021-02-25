import React from 'react'
import { Link } from "react-router-dom"

class RouteShow extends React.Component {
  constructor(props) {
    super(props)

    this.editPage = this.editPage.bind(this)
  }

  componentDidMount() {
    const routeId = this.props.match.params.routeId
    this.props.fetchRoute(routeId)
    // fetches single route and saves it in state to be used
  }

  editPage(e) {
    e.preventDefault()
    const { route } = this.props

    this.props.history.push(`/routes/${route.id}/edit`)
  }

  render() {
    // need to return null for cDM, then route info can be fetched
    if (!this.props.route) return null

    const { route, user } = this.props
    const createDate = new Date(route.created_at).toDateString()
    const updateDate = new Date(route.updated_at).toDateString()
    
    console.log(route)
    console.log(this.props)
    
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
                User: {`${user.first_name} ${user.last_name}`}
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

          <section>
            Comments section
          </section>

          {/* section 2 - minimap, comments section */}
          <section className="rs-map"></section>
        </div>
      </div>
    )
  }
}

export default RouteShow;