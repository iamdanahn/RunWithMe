import React from 'react';
import { Link } from 'react-router-dom'

const RouteIndexItem = ({ route, deleteRoute, updateRoute}) => {

    return (
			<tr>
				<td>
					<Link>Image of route</Link>
				</td>
				<td>
					<Link>
						{new Intl.DateTimeFormat('en-US').format(route.created_at)}
					</Link>
				</td>
				<td>{route.distance}</td>
				<td>Elevation</td>
				<td>
					<Link>{route.route_title}</Link>
				</td>
				<td>{route.location}</td>
				<td>Privacy</td>
				<td>
					<Link to={`/routes/${route.id}/edit`}>Edit</Link>
					<Link to="">Delete</Link>
          {/* Link to DeleteModal */}
				</td>
			</tr>
		);
}

export default RouteIndexItem;