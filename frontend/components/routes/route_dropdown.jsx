import React from 'react'
import { Link } from 'react-router-dom'

class RouteDDContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDD: false
    }
  }



  render() {
    return (
      <div className="rdd">
        <Link to="/routes/search">
          <button className="rdd item">Find Route</button>
        </Link>
        <Link to="/routes/create">
          <button className="rdd item">Create Route</button>
        </Link>
        <Link to="/routes">
          <button className="rdd item">My Routes</button>
        </Link>
      </div>
    );
  }
}

export default RouteDDContent