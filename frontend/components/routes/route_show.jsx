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
		// debugger;
		// fetches single route and saves it in state to be used
		this.props
			.fetchRoute(routeId)
			.then(() => this.props.fetchComments(routeId))
			.then(() => this.initMap());
	}

	componentDidUpdate(prevProps) {
		debugger;
		// checks if url changed, if yes, update
		if (this.props.match.params.routeId !== prevProps.match.params.routeId) {
			debugger;
			// this.props.fetchComments(this.props.match.params.routeId);
			this.props.fetchRoute(this.props.match.params.routeId);
			this.props
				.fetchUser(this.props.match.params.routeId)
				.then(() => this.renderMarkers());
		}
	}

	editPage(e) {
		e.preventDefault();
		const { route } = this.props;

		this.props.history.push(`/routes/${route.id}/edit`);
	}

	initMap() {
		debugger;
		this.wayPoints = JSON.parse(this.props.route.markers);
		this.center = this.wayPoints[0];

		this.mapProps = {
			zoom: 15,
			center: this.center,
			clickableIcons: false,
			draggableCursor: "crosshair",
		};

		this.map = new google.maps.Map(this.mapNode, this.mapProps);

		// renders the whole route on map
		this.map.fitBounds({
			south: 40.70131000000001,
			west: -74.01636,
			north: 40.86892,
			east: -73.91801000000001,
		});

		this.directionsRenderer.setOptions({
			map: this.map,
			preserveViewport: true,
		});

		this.renderMarkers();
	}

	renderMarkers() {
				console.log(this.wayPoints);
		const origin = this.wayPoints[0];
		const dest = this.wayPoints[this.wayPoints.length - 1];
		const wP = this.wayPoints.slice(1, this.wayPoints.length - 1).map((val) => ({
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
		if (!this.props.route) return null;

		const { route, currentUser, comments, deleteComment } = this.props;
		const createDate = new Date(route.created_at).toDateString();
		const updateDate = new Date(route.updated_at).toDateString();

		// console.log(route)
		// console.log(this.props)

		let deleteButton;
		if (comments.user_id === currentUser.id) {
			deleteButton = (
				<button onClick={() => deleteComment(comment.id)}>Delete</button>
			);
		} else {
			deleteButton = null;
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
							<div className="rs-top">
								<div className="rs-top-1">
									<h5>
										{currentUser.first_name} {currentUser.last_name}
									</h5>
									<span></span>
								</div>
								<div className="rs-top-2">
									<span>{route.activity}</span>
									<span>{route.location}</span>
									<span>{route.distance}</span>
								</div>
								<div className="rs-top-3">
									<h2>{route.name}</h2>
								</div>
							</div>
							<div className="rs-bottom-cntr">
								<div className="rs-bottom-content">
									User: {`${currentUser.first_name} ${currentUser.last_name}`}
								</div>
								<div className="rs-bottom-content">
									Created Date: {createDate}
								</div>
								<div className="rs-bottom-content">
									Updated Date: {updateDate}
								</div>
								<div className="rs-bottom-content"></div>
								<div className="rs-bottom-content"></div>
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