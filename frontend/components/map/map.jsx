import React from "react";
import { withRouter } from "react-router-dom"
import MapTools from "./map_tools";

class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.route.id,
			name: this.props.route.name,
			creator_id: this.props.route.creator_id,
			activity: this.props.route.activity,
			location: this.props.route.location,
			distance: this.props.route.distance,
			address: "",
			thumbnail: this.props.route.thumbnail,
			bounds: this.props.route.bounds,
			markers:
				this.props.route.markers.length > 0
					? JSON.parse(this.props.route.markers)
					: this.props.route.markers,
			formErr: "form-err-hide",
		};

		this.wayPoints = this.state.markers;

		this.initMap = this.initMap.bind(this);
		this.renderMarkers = this.renderMarkers.bind(this);
		this.searchAddress = this.searchAddress.bind(this);
		this.updateLocation = this.updateLocation.bind(this);

		this.formattedState = this.formattedState.bind(this);
		this.undoMark = this.undoMark.bind(this);
		this.clearMarks = this.clearMarks.bind(this);
		this.centerMap = this.centerMap.bind(this);
		this.reverseMarks = this.reverseMarks.bind(this);
		this.returnHome = this.returnHome.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    this.getThumbnailUrl = this.getThumbnailUrl.bind(this);

		// enables D.Service - initiates direction request with route() method
		// Returns DirectionsResult & DirectionsStatus code
		this.directionsService = new google.maps.DirectionsService();

		// enables D.Renderer - displays DirectionResults
		// https://developers.google.com/maps/documentation/javascript/reference/directions
		this.directionsRenderer = new google.maps.DirectionsRenderer();

		// GEOCODING converts address <=> coordinates. Useful to palce markers or position map
		//https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingResults
		this.geocoder = new google.maps.Geocoder();
	}

	componentDidMount() {
		this.initMap();
		if (this.props.formType === "Edit") {
			this.renderMarkers();
		}
	}

	initMap() {
		// get default position

		this.center =
			this.state.markers.length > 0
				? this.state.markers[0]
				: new google.maps.LatLng(40.7362891, -73.9937557);

		 ;
		this.mapProps = {
			zoom: 14,
			center: this.center,
			clickableIcons: false,
			draggableCursor: "crosshair",
		};

		// mapNode == ref to <div map>
		// actual map creation onto page
		this.map = new google.maps.Map(this.mapNode, this.mapProps);
		this.usersPosition();

		// sets directions rendering options, draggable = points draggable
		this.directionsRenderer.setOptions({
			map: this.map,
			// draggable: true,
			preserveViewport: true,
		});

		this.map.addListener("click", (e) => {
			// adds lat/lng object to waypoints array
			this.wayPoints.push({ lat: e.latLng.lat(), lng: e.latLng.lng() });

			this.renderMarkers();
		});
	}

	// =======================
	// obtains user's current position if allowed on browser
	// =======================
	usersPosition() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				};
				 ;
				this.map.setCenter(pos);
			});
		}
	}

	// =======================
	// creates markers on the map
	// =======================

	renderMarkers() {
		const origin = this.wayPoints[0];
		let dest = this.wayPoints[this.wayPoints.length - 1];

		let wP = this.wayPoints.slice(1, this.wayPoints.length - 1).map((val) => ({
			location: val,
			stopover: false,
		}));
		 ;

		this.setState({ ["markers"]: this.wayPoints });
		this.updateLocation();

		// sends directions request to google
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
					const distance = response.routes[0].legs[0].distance.text;
          let thumbnail = this.getThumbnailUrl(response)
					let bounds = response.routes[0].bounds;
					
					debugger;

					console.log(bounds);
          this.setState({
						distance: distance,
						thumbnail: thumbnail,
						bounds: JSON.stringify(bounds),
					});

					console.log(response);

					// renders directions that are inside the response
					this.directionsRenderer.setDirections(response);
				} else {
					console.log("Directions failed");
				}
			}
		);
	}

	// =======================
	// updates city for created route
	// =======================

	updateLocation() {
		if (this.wayPoints.length > 0) {
			this.geocoder.geocode(
				{
					location: this.wayPoints[0],
				},
				(res, status) => {
					if (status === "OK") {
						for (let i = 0; i < res.length; i++) {
							if (res[i].types[0] === "locality") {
								this.setState({ location: res[i].formatted_address });
								break;
							}
						}
					}
				}
			);
		}
	}

	// =======================
	// create static map url for Google Maps Static API
	// https://developers.google.com/maps/documentation/maps-static/start
	// =======================
	getThumbnailUrl(res) {
    const start = "https://maps.googleapis.com/maps/api/staticmap?"
    const size = "size=175x175";
		const scale = "scale=2";
    let location = res.routes[0].overview_polyline
    location = "path=enc:".concat(location);
    let key = "key=".concat(window.googleAPIKey);
    let url = []
    url.push(start, size, scale, location, key);
    url = url.join("&")
    return url
  }

	// =======================
	// search bar on left side of screen
	// =======================
	searchAddress(address) {
		this.geocoder.geocode({ address: address }, (res, status) => {
			const locationName = res[0];
			if (status === "OK") {
				this.map.setCenter(res[0].geometry.location);
				this.setState({ ["location"]: res[0] });
			}
		});
	}

	// =======================
	// Tool bar buttons
	// =======================

	undoMark() {
		if (this.wayPoints.length > 1) {
			this.wayPoints.pop();
			this.renderMarkers();
		} else if (this.wayPoints.length === 1) {
			this.clearMarks();
		}
	}

	clearMarks() {
		// https://developers.google.com/maps/documentation/javascript/examples/marker-remove
		// 1. iterate thru array of markers
		// 2. set marker's map to null
		// 3. set Marker Object to [], removes all markers in its array
		if (this.wayPoints.length > 0) {
			this.wayPoints = [];
			 ;

			this.setState({ ["distance"]: "0 MI" });
			this.setState({ ["markers"]: [] });

			//commented out below due to error in console
			this.directionsRenderer.setDirections({ routes: [] }); // setMap(null) removes directions from map
			// this.renderMarkers()
		}
	}

	centerMap() {
		// this.map.panTo(this.center);
		// https://developers.google.com/maps/documentation/javascript/reference/map#Map.panToBounds
		// this.map.panToBounds( <need bounds> )
		// bounds available in response.routes[0].bounds
		const { markers } = this.state;

		let latLngBounds = this.directionsRenderer.getDirections().routes[0].bounds;
		const padding = { top: 500, right: 500, bottom: 500, left: 500 };

		// console.log(
		//   JSON.stringify(this.directionsRenderer.getDirections().routes[0].bounds),
		// )

		if (markers.length > 1) {
			this.map.panToBounds(latLngBounds, padding);
		}
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

	// =======================
	// updates local state of entered "field"
	// =======================

	update(field) {
		// console.log(JSON.stringify(this.state.markers));

		return (e) => {
			this.setState({ [field]: e.currentTarget.value });
		};
	}

	// =======================
	// formats state to get it ready for save
	// =======================

	formattedState() {
		 ;
		const {
			id,
			activity,
			creator_id,
			distance,
			location,
			markers,
			name,
			thumbnail,
			bounds,
		} = this.state;
		const strMarkers = JSON.stringify(markers);

		return {
			id,
			name,
			creator_id,
			activity,
			location,
			distance,
			markers: strMarkers,
			thumbnail,
			bounds,
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		// console.log(this.formattedState())

		if (this.state.name.length === 0) {
			this.setState({ formErr: "form-err-show" });

			// return out to avoid unnecessary backend hit
			return;
		} else {
			this.setState({ formErr: "form-err-hide" });
		}

		if (this.wayPoints.length > 1) {
			 ;
			this.props.action(this.formattedState()).then((response) => {
				 ;
				// res is whole action pkg
				this.props.history.push(`/dashboard`);
			});
		} else {
			alert("Must have 2 points to save route");
		}
	}

	render() {
		let {
			name,
			creator_id,
			activity,
			location,
			distance,
			markers,
			address,
			formErr,
		} = this.state;
		const { action, route, formType } = this.props;
		 ;

		return (
			<div className="user-panel">
				<div className="left-half">
					<div className="create-route-cntr">
						<div className="cr-form">
							<h4>Choose map location</h4>
							<form
								className="cr-search-bar"
								onSubmit={() => this.searchAddress(address)}
							>
								<input
									id="geocoder-addr"
									type="text"
									placeholder="Enter location"
									value={this.state.address}
									onChange={this.update("address")}
								/>
								<button id="geocoder-submit">Search</button>
							</form>

							<br />

							<form onSubmit={this.handleSubmit}>
								<div>
									<h3>{formType} Route Details</h3>
									<input
										type="text"
										value={this.state.name}
										onChange={this.update("name")}
										placeholder="Route title"
									/>
									<span>*</span>
								</div>

								<div>
									<select
										defaultValue={activity}
										onChange={this.update("activity")}
									>
										<option default disabled>
											Choose an Activity
										</option>
										<option value="walk">Walk</option>
										<option value="run">Run</option>
										<option value="bike">Bike</option>
									</select>
									<span>*</span>
								</div>
								<div>
									<button>Save Route</button>
								</div>
								<div className={formErr}>
									<h2>Route Title cannot be blank!</h2>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div className="map-container" ref={(map) => (this.mapNode = map)}>
					Map
				</div>
				<div>
					<MapTools
						distance={distance}
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

export default withRouter(Map)

