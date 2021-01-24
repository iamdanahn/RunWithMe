import React from 'react';
import RouteIndexContainer from '../routes/route_index_container'

class Dashboard extends React.Component{

  componentDidMount() {
    this.props.fetchRoutes()
  }

  render() {
    return(
      <div className="bg dashboard">
        Dashboard component
        <RouteIndexContainer />
        {/* <Map /> */}
      </div>
    )
  }
}

export default Dashboard;