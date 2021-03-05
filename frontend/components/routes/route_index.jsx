import React from 'react';
import { Link } from 'react-router-dom';
import RIIContainer from './route_index_item_container'

class RouteIndex extends React.Component {

  componentDidMount() {
    this.props.fetchRoutes(this.props.currentUserId);
  }

  render() {
    const { currentUserId } = this.props
    
    debugger; 

    const route = this.props.routes.map((route) => {
			if (route.creator_id === currentUserId) {
				return <RIIContainer route={route} key={route.id} />;
			}
		})

    return (
			<div className="my-routes">
				<div className="mr-header">
					<div>
						<h1>MY ROUTES</h1>
					</div>
					<div className="mr-header links">
						<Link to="">ROUTES</Link>
						<Link to="">BOOKMARKED</Link>
					</div>
				</div>
				<div className="mr-create">
					<h3>MY ROUTES</h3>
					<Link to="/routes/create">CREATE A ROUTE</Link>
				</div>

				<div className="mr-search-cntr">
					<div className="mrsc-left">
						<div className="search-box">
							<input
								type="text"
								placeholder="Enter a keyword (coming soon)"
								disabled
							/>
						</div>
						<div className="search-buttons">
							<Link to="" className="search-btn">
								Search
							</Link>
							<Link to="" className="reset-btn">
								Reset
							</Link>
						</div>
					</div>
					<div className="mrsc-right">
						<div className="search-filter">
							<select defaultValue="-date_created">
								<option value="-date_created"> Most Recent </option>
								<option value="date_created"> Oldest </option>
								<option value="-distance"> Longest </option>
								<option value="distance"> Shortest </option>
							</select>
						</div>
					</div>
				</div>

				<section className="route-index-cntr">
					<table className="route-index-table">
						<thead>
							<tr className="route-index-headers">
								<th>Route</th>
								<th>Created</th>
								<th>Distance</th>
								<th>Activity</th>
								<th>Name</th>
								<th>City</th>
								<th>Privacy</th>
								<th>Options</th>
							</tr>
						</thead>
						<tbody>{route}</tbody>
					</table>
				</section>
			</div>
		);
  }
}

export default RouteIndex;