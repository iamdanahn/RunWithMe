import React from "react";

import CRFContainer from './create_route_form_container'
import Map from '../map/map';

const CreateRoute = () => (
	<section className="user-panel">
		<div className="left-half">
			<CRFContainer />
			
		</div>
		<div className="right-half">
			<Map />
		</div>
	</section>
);

export default CreateRoute;
