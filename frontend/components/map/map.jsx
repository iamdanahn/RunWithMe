import React from 'react';


const getCoordsObj = (latLng) => ({
	lat: latLng.lat(),
	lng: latLng.lng(),
});

const mapProps = {
  zoom: 14,
  center: new google.maps.LatLng(37.7758, -122.435),
  mapTypeId: "roadmap",
};

class Map extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			miles: 0,
		};

		this.initMap = this.initMap.bind(this);
	}

	componentDidMount() {
		this.initMap();
	}

	initMap() {
		const map = new google.maps.Map(this.mapNode, mapProps);
		this.usersPosition(map);
	}

	// obtains user's current position if allowed
	usersPosition(map) {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				};
				map.setCenter(pos);
			});
		}
	}

	addMarker(location, map) {
		const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let labelIndex = 0;

		new google.maps.Marker({
			position: location,
			label: labels[labelIndex++ % labels.length],
			map: map,
		});
	}

	eventListeners() {
		google.maps.event.addListener(this.map, "idle", () => {
			const { north, south, east, west } = this.map.getBounds().toJSON();
			const bounds = {
				northEast: { lat: north, lng: east },
				southWest: { lat: south, lng: west },
			};
			// this.props.updateFilter("bounds", bounds);
		});
		google.maps.event.addListener(this.map, "click", (event) => {
			const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
      console.log(coords)
		});
	}

  handleClick(coords) {
		this.props.history.push({
			pathname: "routes/create",
			search: `lat=${coords.lat}&lng=${coords.lng}`,
		});
	}

	render() {
		return (
			<div id="map-container" ref={(map) => (this.mapNode = map)}>
				Map
			</div>
		);
	}
}

export default Map;