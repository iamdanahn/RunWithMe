import React from 'react';
import { Link } from 'react-router-dom';
import RIIContainer from './route_index_item_container'

class RouteIndex extends React.Component {

  componentDidMount() {
    this.props.fetchRoutes();
  }

  render() {
    // const { deleteModal } = this.props;
    const route = this.props.routes.map( route => {
      return (
				<RIIContainer 
          route={route}
          key={route.id}
          />
			);
    })


    return (
      <div className="my-routes">
        <div className="mr-header">
          <div>
            <h1>MY ROUTES</h1>
          </div>
          <div className="mr-header links">
            <Link to="/routes">ROUTES</Link>
            <Link to='/bookmarks'>BOOKMARKED</Link>
          </div>
        </div>
        <div className="mr-create">
          <h3>MY ROUTES</h3>
          <Link to="/routes/create">
            CREATE A ROUTE
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
              <tr className="route-index-headers">
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
            <tbody>
              {route}
            </tbody>
          </table>
        </section>
      </div>
		);
  }
}

export default RouteIndex;