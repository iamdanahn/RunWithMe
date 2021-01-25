import React from 'react';
import RouteIndexContainer from '../routes/route_index_container'
import Map from '../map/map'
class Dashboard extends React.Component{

  componentDidMount() {
    this.props.fetchRoutes()
  }

  render() {
    return(
      <div className="bg dashboard">
        <Map/>
        <RouteIndexContainer />
        
      </div>
    )
  }
}

export default Dashboard;