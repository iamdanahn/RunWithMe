import React from 'react'
import { Link } from "react-router-dom"

class RouteShow extends React.Component {
	constructor(props) {
		super(props);

		this.editPage = this.editPage.bind(this);
		this.renderMarkers = this.renderMarkers.bind(this);

		this.directionsService = new google.maps.DirectionsService();
		this.directionsRenderer = new google.maps.DirectionsRenderer();
		this.geocoder = new google.maps.Geocoder();
	}

	componentDidMount() {
		const routeId = this.props.match.params.routeId;
		// fetches single route and saves it in state to be used
		// this.props
		// 	.fetchRoute(routeId)
		// 	.then(() => this.props.fetchComments(routeId))
		// 	.then(() => this.initMap());
		this.props.fetchUser(this.props.routes[routeId].creator_id);

		if (!this.props.routes[routeId]) {
			this.props.fetchRoute(routeId).then(() => this.initMap());
		} else {
			this.initMap();
		}
	}

	componentDidUpdate(prevProps) {
		// checks if url changed, if yes, update
		if (this.props.match.params.routeId !== prevProps.match.params.routeId) {
			// this.props.fetchComments(this.props.match.params.routeId);
			this.props
				.fetchRoute(this.props.match.params.routeId)
				.then(() => this.props.fetchUser(this.props.routes[routeId]).creator_id)
				.then(() => this.initMap());
		}
	}

	editPage(e) {
		e.preventDefault();
		const route = this.props.routes[this.props.routeId];

		this.props.history.push(`/routes/${route.id}/edit`);
	}

	initMap() {
		const route = this.props.routes[this.props.routeId];
		this.wayPoints = JSON.parse(route.markers);
		this.center = this.wayPoints[0];

		this.mapProps = {
			zoom: 15,
			center: this.center,
			clickableIcons: false,
			draggableCursor: "crosshair",
		};

		this.map = new google.maps.Map(this.mapNode, this.mapProps);

		// renders the whole route on map
		this.map.fitBounds(JSON.parse(route.bounds));

		this.directionsRenderer.setOptions({
			map: this.map,
			preserveViewport: true,
		});

		this.renderMarkers();
	}

	renderMarkers() {
		const origin = this.wayPoints[0];
		const dest = this.wayPoints[this.wayPoints.length - 1];
		const wP = this.wayPoints
			.slice(1, this.wayPoints.length - 1)
			.map((val) => ({
				location: val,
				stopover: false,
			}));

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
					// const distance = response.routes[0].legs[0].distance.text;

					// renders directions that are inside the response
					this.directionsRenderer.setDirections(response);
				} else {
					console.log("Directions failed");
				}
			}
		);
	}

	render() {
		// need to return null for cDM, then route info can be fetched
		const route = this.props.routes[this.props.routeId];
		if (!route) return null;

		const { currentUser, comments, deleteComment, user } = this.props;
		const createDate = new Date(route.created_at).toDateString();
		const updateDate = new Date(route.updated_at).toDateString();

		let deleteButton;
		if (Object.keys(route).length) {
			// deleteButton = (
			// 	<button onClick={() => deleteComment(comment.id)}>Delete</button>
			// );
			const markers = JSON.parse(route.markers);
			this.startCoord = markers[0];
			this.endCoord = markers[markers.length - 1];
		} else {
			// deleteButton = null;
			this.startCoord = { lat: 0, lng: 0 };
			this.endCoord = { lat: 0, lng: 0 };
		}

		const routeComments = comments.map((comment) => {
			return (
				<li key={comment.id} className="comment-cntr">
					<div className="comment-body">
						<h4>
							{comment.first_name} {comment.last_name}
						</h4>
						<p>{comment.body}</p>
					</div>
					<div className="comment-delete">{deleteButton}</div>
				</li>
			);
		});

		return (
			<div className="route-show-cntr">
				{/* section 1 - route title, distance, user name, 
            date created, activity, location, edit button */}
				<div className="rs-body">
					<section className="rs-header">
						<div className="rs-header-content">
							{/* <Link to={`/routes/${route.id}/edit`}>Edit Page</Link> */}

							{/* HEADER TOP  */}
							<div className="rs-top">
								<div className="rs-top-1">
									<span className="rst1-name">
										<Link to={`/profile/${route.creator_id}`}>
											{user.first_name} {user.last_name}
										</Link>
									</span>
									<span className="rst1-filler"></span>
									<span className="rst1-globe">
										<i className="fas fa-globe"></i>
									</span>
									<span className="rst1-status"> Public </span>
								</div>
								<div className="rs-top-2">
									<span className="rst2 activity">
										<div>{route.activity}</div>
									</span>
									<span className="rst2 location">
										<div>
											<i className="fas fa-map-marker-alt"></i>
											{route.location}
										</div>
									</span>
									<span className="rst2 distance">
										<div>
											<i className="fas fa-route"></i>
											{route.distance}
										</div>
									</span>
								</div>
								<div className="rs-top-3">
									<h2>{route.name}</h2>
								</div>
							</div>

							{/* HEADER BOTTOM */}
							<div className="rs-bottom-cntr">
								<div className="rs-bottom-content">
									<div className="coords-cntr">
										<h4>Start Coordinates:</h4>
										<div className="coords">
											<span>Lat: {this.startCoord.lat.toFixed(4)}</span>
											<span>Lng: {this.startCoord.lng.toFixed(4)}</span>
										</div>
									</div>
								</div>
								<div className="rs-bottom-content">
									<div className="coords-cntr">
										<h4>End Coordinates:</h4>
										<div className="coords">
											<span>Lat: {this.endCoord.lat.toFixed(4)}</span>
											<span>Lng: {this.endCoord.lng.toFixed(4)}</span>
										</div>
									</div>
								</div>
								<div className="rs-bottom-content">
									<div className="center-cntr">
										<div className="center-content">
											<i className="fas fa-walking fa-2x"></i>
											<i className="fas fa-running fa-2x"></i>
											<i className="fas fa-biking fa-2x"></i>
										</div>
									</div>
								</div>
								<div className="rs-bottom-content">
									<div className="rsb-create-date">
										<span>Route Created:</span>
										<span>{createDate}</span>
									</div>
								</div>
								<div className="rs-bottom-content">
									{/* <div className="edit-link"> */}
									<Link to={`/routes/${route.id}/edit`} className="edit-link">
										Edit
									</Link>
									{/* </div> */}
								</div>
							</div>
						</div>
					</section>

					{/* section 2 - minimap */}
					<section className="map-cntr">
						<div id="rs-map" ref={(map) => (this.mapNode = map)}>
							Map
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default RouteShow;