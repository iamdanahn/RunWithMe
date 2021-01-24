import React from "react";

import CreateRouteContainer from './create_route_container'
import Map from "./../map/map";

const Search = () => (
	<div className="user-pane">
		<div className="left-half">
			<CreateRouteContainer />
			
		</div>
		<div className="right-half">
			<Map />
		</div>
	</div>
);

export default Search;
