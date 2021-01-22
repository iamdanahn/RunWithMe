import React from 'react';


class Dashboard extends React.Component{

  componentDidMount() {
    this.props.fetchRoutes()
  }

  render() {
    return(
      <div className="bg dashboard">
        Dashboard component

        {/* <Map /> */}
      </div>
    )
  }
}

export default Dashboard;