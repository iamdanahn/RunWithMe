import React from "react";
import { Route } from 'react-router-dom'

import CRFContainer from './create_route_form_container'
import ProtectedRoute from '../../util/route_util'
import Map from '../map/map';

const CreateRoute = () => (
	<section className="user-panel">
		<div className="left-half">
			<CRFContainer />
			
		</div>
		<div className="right-half">
			<Route component={Map} />
			{/* <ProtectedRoute component={Map} /> */}
		</div>
	</section>
);

export default CreateRoute;
