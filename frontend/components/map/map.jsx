import React from 'react';


const getCoordsObj = (latLng) => ({
	lat: latLng.lat(),
	lng: latLng.lng(),
});


class Map extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      markers: [],
      miles: 0,
		};

		this.initMap = this.initMap.bind(this);
	}

	componentDidMount() {
		this.initMap();
	}

	initMap() {
    // get default position 
    const appAcademy = new google.maps.LatLng(40.7362891, -73.9937557)
    const mapProps = {
      zoom: 14,
      center: appAcademy
    };
    const map = new google.maps.Map(this.mapNode, mapProps);
    
    // enables D.Service - initiates direction request with route() method
    // Returns DirectionsResult & DirectionsStatus code
    const directionsService = new google.maps.DirectionsService();
    
    // enables D.Renderer - displays DirectionResults
    const directionsRenderer = new google.maps.DirectionsRenderer();

    this.usersPosition(map);
    this.eventListeners(map);
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

	eventListeners(map) {
    map.addListener("idle", () => {
      const { north, south, east, west } = map.getBounds().toJSON();
			const bounds = {
        northEast: { lat: north, lng: east },
				southWest: { lat: south, lng: west },
			};
			// this.props.updateFilter("bounds", bounds);
		});
		map.addListener("click", (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
      console.log(coords)
		});
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

  handleClick(coords) {
		this.setState((state) => {
			return { [markers]: [...state.markers, coords] };
		});
		// same as this.setState({markers: [...state.markers, coords]})

		// this.props.history.push({
		// 	pathname: "/routes/create",
		// 	search: `lat=${coords.lat}&lng=${coords.lng}`,
		// });
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