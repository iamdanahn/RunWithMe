import React from 'react';
import RouteIndexContainer from '../routes/route_index_container'

class Dashboard extends React.Component{

  componentDidMount() {
    this.props.fetchRoutes()
  }

  render() {
    return(
      <div className="bg dashboard">
        <RouteIndexContainer />
        
      </div>
    )
  }
}

export default Dashboard;