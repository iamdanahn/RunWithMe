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
			// this.wayPoints = this.state.markers;
			this.wayPoints = [];
		}
		debugger

		this.initMap = this.initMap.bind(this);
		// this.addPoint = this.addPoint.bind(this);
		// this.geocoderAddr = this.geocoderAddr.bind(this);
		this.renderMarkers = this.renderMarkers.bind(this);
		this.searchAddress = this.searchAddress.bind(this);

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

		this.center =
			this.state.markers.length > 0
				? this.state.markers[0]
				: new google.maps.LatLng(40.7362891, -73.9937557);
		this.mapProps = {
			zoom: 14,
			center: this.center,
			clickableIcons: false,
		};

		this.map = new google.maps.Map(this.mapNode, this.mapProps);
		this.usersPosition();

		// enables D.Service - initiates direction request with route() method
		// Returns DirectionsResult & DirectionsStatus code
		this.directionsService = new google.maps.DirectionsService();
		// enables D.Renderer - displays DirectionResults
		// https://developers.google.com/maps/documentation/javascript/reference/directions
		this.directionsRenderer = new google.maps.DirectionsRenderer();
		this.directionsRenderer.setOptions({
			map: this.map,
			draggable: true,
			preserveViewport: true,
		}) 

		//TEST
		// const wP = this.wayPoints
		// const marks = this.state.markers
		// this.eventListeners(map);


		this.map.addListener("click", (e) => {
			// const marker = new google.maps.Marker({
			// 	position: e.latLng,
			// 	map: this.map,
			// });
      // marker.setMap(this.map);
			this.wayPoints.push({lat: e.latLng.lat(), lng: e.latLng.lng()}) 
			
			// this.setState({ ["markers"]: this.wayPoints });
			// this.setState({ ["markers"]: [...this.state.markers, e.latLng] });
			
			//TEST
			console.log(this.wayPoints)
      debugger
			// console.log(marks)
			// this.setState({ ["markers"]: this.wayPoints });
			// console.log(marks)
			//TEST

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
		debugger;
		
		this.setState({ ["markers"]: this.wayPoints});
		
		// if (markers.length > 1) {
			this.directionsService.route(
				{
					origin: origin,
					destination: dest,
					waypoints: wP,
					travelMode: google.maps.TravelMode.WALKING,
				},
				(response, status) => {
					if (status === "OK") {
						// updates distance state
						const distance = response.routes[0].legs[0].distance.text
						this.setState({ distance: distance });
						
						console.log(response);
						debugger;

						this.directionsRenderer.setDirections(response);
						// renders directions that are inside the response
					} else {
						console.log("Directions failed");
					}
				},
			);
		// }
	}

	searchAddress(address) {
		//https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingResults
		// GEOCODING converts address <=> coordinates. Usefulf to palc emarkers or position map
		const geocoder = new google.maps.Geocoder();
		
		geocoder.geocode({ address: address }, (res, status) => {
			const locationName = res[0]
			if (status === "OK") {
				this.map.setCenter(res[0].geometry.location);
				this.setState({["location"]: res[0]})
			}
		});
	}


	// BELOW ONLY APPLIES IF WAYPOINTS STOPOVER ARE SET TO TRUE
		// console.log(response.routes[0].legs[markers.length-2])
		// gets details of previous marker to marker just clicked
		// console.log(response.routes[0].legs[markers.length-2].distance.value);
		// gets distance from previous marker to marker just clicked
	// NO NEED TO CHECK MARKERS LENGTH IF STOPOVER = FALSE. 

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
		if (this.wayPoints.length > 0) {
			this.wayPoints.pop();
			// const oldMarks = Object.assign({}, this.state.markers)
			// oldMarks.pop();
			// const newMarks = oldMarks;
			// this.setState({ ["markers"]: this.wayPoints })
			
			// const 
			// this.setState({ ["distance"]: newDistance })
			console.log(this.wayPoints);
			this.renderMarkers();
		}
	}

	clearMarks() {
		// https://developers.google.com/maps/documentation/javascript/examples/marker-remove
		// 1. iterate thru array of markers
		// 2. set marker's map to null
		// 3. set Marker Object to [], removes all markers in its array
		if (this.wayPoints.length > 0) {
			this.wayPoints = [];
			debugger
			
			
			this.setState({["distance"]: "0 MI"})
			this.setState({["markers"]: []})
			this.directionsRenderer.setDirections({routes:[]}) // setMap(null) removes directions from map
			// this.directionsRenderer.setMap(null) // setMap(null) removes directions from map
			this.renderMarkers();
		}
	}

	centerMap() {
		// this.map.panTo(this.center);
		// https://developers.google.com/maps/documentation/javascript/reference/map#Map.panToBounds
		// this.map.panToBounds( <need bounds> )
		// bounds available in response.routes[0].bounds
		this.map.panToBounds()
	}
	reverseMarks() {
		if (this.wayPoints.length > 1) {
			this.wayPoints.reverse();
			this.renderMarkers();
		}
	}

	returnHome() {
		if (this.wayPoints.length > 1) {
			this.wayPoints.push(this.wayPoints[0]);
			this.renderMarkers();
		}
	}

	render() {
		const {
			name,
			creator_id,
			activity,
			location,
			distance,
			markers,
		} = this.state;
		const { action, route, formType } = this.props;
		debugger;

		return (
			<div className="user-panel">
				<div className="left-half">
					<RouteForm
						action={action}
						activity={activity}
						creator_id={creator_id}
						distance={distance}
						formType={formType}
						location={location}
						markers={markers}
						name={name}
						searchAddy={this.searchAddress}
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

