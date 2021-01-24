import React from 'react';
import { Link } from 'react-router-dom';
import RouteIndexItem from './route_index_item'

class RouteIndex extends React.Component {

  componentDidMount() {
    this.props.fetchRoutes();
  }

  render() {
    const { deleteRoute, updateRoute } = this.props;

    return (
      <div className="my-routes">
        <div className="mr-header">
          <div>
            <h1>My Routes</h1>
          </div>
          <div>
            <Link to="/routes">Routes</Link>
            <Link to='/bookmarks'>Bookmarked</Link>
          </div>
        </div>
        <div className="mr-create">
          <h3>My Routes</h3>
          <Link to="/routes/create">
            <button className="button-create">Create a Route</button>
          </Link>
        </div>
        <div className="mr-search">
          <input 
            className="search-box"
            type="text"
            placeholder="Enter a keyword"
            />
          <div>
            <Link to="">Search</Link>
            <Link to="">Reset</Link>
          </div>
          <div>

          </div>
        </div>

        <section className='route-index'>
          <table>
            <thead>
              <tr>
                <th>Route</th>
                <th>Created</th>
                <th>Distance</th>
                <th>Elevation</th>
                <th>Name</th>
                <th>City</th>
                <th>Privacy</th>
                <th>Options</th>
              </tr>
            </thead>
          </table>
          {/* <RouteIndexItem deleteRoute={deleteRoute} updateRoute={updateRoute} /> */}
        </section>
      </div>
		);
  }
}

export default RouteIndex;