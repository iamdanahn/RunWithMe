import React from "react";
import MapTools from "./map_tools";
import RouteForm from "../routes/route_form";

const getCoordsObj = (latLng) => ({
	lat: latLng.lat(),
	lng: latLng.lng(),
});

class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.route;
		// debugger
    
    if (this.state.markers.length > 0) {
      this.wayPoints = JSON.parse(this.state.markers);
    } else {
      this.wayPoints = this.state.markers;
    }

		this.initMap = this.initMap.bind(this);
		// this.addPoint = this.addPoint.bind(this);
		// this.geocoderAddr = this.geocoderAddr.bind(this);
		this.renderMarkers = this.renderMarkers.bind(this);

		this.undoMark = this.undoMark.bind(this);
		this.clearMarks = this.clearMarks.bind(this);
		this.centerMap = this.centerMap.bind(this);
		this.reverseMarks = this.reverseMarks.bind(this);
		this.returnHome = this.returnHome.bind(this);
	}

	componentDidMount() {
		this.initMap();
	}

	initMap() {
		// get default position

		const center =
			this.state.markers.length > 0
				? this.state.markers[0]
				: new google.maps.LatLng(40.7362891, -73.9937557);
		const mapProps = {
			zoom: 15,
			center: center,
			clickableIcons: false,
		};

		this.map = new google.maps.Map(this.mapNode, mapProps);
		this.usersPosition();

		// enables D.Service - initiates direction request with route() method
		// Returns DirectionsResult & DirectionsStatus code
		this.directionsService = new google.maps.DirectionsService();
		// enables D.Renderer - displays DirectionResults
		this.directionsRenderer = new google.maps.DirectionsRenderer();
		this.directionsRenderer.setMap(this.map);

		// this.eventListeners(map);
		this.map.addListener("click", (e) => {
			// const marker = new google.maps.Marker({
			// 	position: e.latLng,
			// 	map: this.map,
			// });
      // marker.setMap(this.map);
      this.wayPoints.push({lat: e.latLng.lat(), lng: e.latLng.lng()})
      this.setState({ ["markers"]: [...this.state.markers, e.latLng] });
      debugger
			this.renderMarkers();
		});
	}

	// obtains user's current position if allowed
	usersPosition() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				};
				this.map.setCenter(pos);
			});
		}
	}

	renderMarkers() {
		const { markers } = this.state;
		const origin = markers[0];

		let dest = markers[markers.length - 1];
		let wP = markers.slice(1, markers.length - 1).map((val) => ({
			location: val,
			stopover: false,
    }));
    debugger

		if (markers.length > 1) {
			this.directionsService.route(
				{
					origin: origin,
					destination: dest,
					waypoints: wP,
					travelMode: google.maps.TravelMode.DRIVING,
				},
				(response, status) => {
					if (status === "OK") {
						const rtDistance =
							response.routes[0].legs[markers.length - 2].distance.value;
						this.addDistance(rtDistance);
						console.log(this.state.distance);
            debugger
						this.directionsRenderer.setDirections(response);
					} else {
						console.log("Directions failed");
					}
				},
			);
		}
	}
	addDistance(routeDist) {
		const oldDistance = this.state.distance;
		const newDistance = oldDistance + routeDist;
		this.setState({ distance: newDistance });
	}

	// console.log(response.routes[0].legs[markers.length-2])
	// gets details of previous marker to marker just clicked
	// console.log(response.routes[0].legs[markers.length-2].distance.value);
	// gets distance from previous marker to marker just clicked

	// markers[0].lat()
	// 40.739394483605125
	// markers[0].lng()
	// -74.0023508387882

	// ATTEMPT TO PUSH ROUTEINFO INTO URL
	// this.props.history.push({
	// 	pathname: "/routes/create",
	// 	search: `lat=${coords.lat}&lng=${coords.lng}`,
	// });
	// }

	undoMark() {
		if (this.markers.length > 0) {
			this.wayPoints.pop();
			this.renderMarkers();
		}
	}

	clearMarks() {
		this.wayPoints = [];
		this.renderMarkers();
	}

	centerMap() {
		() => this.map.panTo(mapProps[center]);
	}
	reverseMarks() {
		this.wayPoints.reverse();
		this.renderMarkers();
	}

	returnHome() {
		if (this.markers.length > 1) {
			this.wayPoints.push(this.wayPoints[0]);
			this.renderMarkers();
		}
	}

	render() {
		const {
			route_title,
			creator_id,
			activity,
			location,
			distance,
			markers,
		} = this.state;
		const { route, formType } = this.props;
		debugger;

		return (
			<div className="user-panel">
				<div className="left-half">
					<RouteForm
						route_title={route_title}
						creator_id={creator_id}
						activity={activity}
						location={location}
						distance={distance}
						markers={markers}
						formType={formType}
					/>
				</div>

				<div className="map-container" ref={(map) => (this.mapNode = map)}>
					Map
				</div>
				<div>
					<MapTools
						distance={this.state.distance}
						undo={this.undoMark}
						clear={this.clearMarks}
						center={this.centerMap}
						reverse={this.reverseMarks}
						returnHome={this.returnHome}
					/>
				</div>
			</div>
		);
	}
}

export default Map;

