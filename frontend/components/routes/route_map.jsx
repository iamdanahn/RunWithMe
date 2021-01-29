import React from "react";
import { Route } from 'react-router-dom'

import RouteForm from './route_form';
import Map from '../map/map';

class RouteMap extends React.Component {
	
	render() {
		const { route, name, creator_id, activity, location, distance, markers} = this.props;
		
		return (
			<section className="user-panel">
				<div className="left-half">
					<RouteForm
						name={name}
						creator_id={creator_id}
						activity={activity}
						location={location}
						distance={distance}
						markers={markers}
					/>
				</div>
				<div className="right-half">
					<Route
						component={Map}
						name={name}
						creator_id={creator_id}
						activity={activity}
						location={location}
						distance={distance}
						markers={markers}
					/>
				</div>
			</section>
		);
	}
};

export default RouteMap;
