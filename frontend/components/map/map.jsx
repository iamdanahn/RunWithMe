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
    this.addPoint = this.addPoint.bind(this);
    this.geocoderAddr = this.geocoderAddr.bind(this);
	}

	componentDidMount() {
		this.initMap();
	}

	initMap() {
    // get default position 
    const mapProps = {
			zoom: 15,
      center: new google.maps.LatLng(40.7362891, -73.9937557),
      
		};
    const map = new google.maps.Map(this.mapNode, mapProps);
    this.usersPosition(map);
    
    // enables D.Service - initiates direction request with route() method
    // Returns DirectionsResult & DirectionsStatus code
    const directionsService = new google.maps.DirectionsService();
    // enables D.Renderer - displays DirectionResults
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    // creates info window object
    const infoWindow = new google.maps.InfoWindow();
    
    // enable polylines to be used on map
    const poly = new google.maps.Polyline({
      strokeColor: "#add8e6",
      strokeOpacity: 1.0,
      strokeWeight: 3,
      editable: true
    });
    poly.setMap(map);

    // enable geocoding
    const geocoder = new google.maps.Geocoder();
    document.getElementById("geocoder-submit").addEventListener("click", () => {
      this.geocodeAddr(geocoder, map);
    })

    // this.eventListeners(map);
    map.addListener("click", this.addPoint(map, poly))
  }
  
  addPoint(map, poly) {
    return e => {
      const marker = new google.maps.Marker({
        position: e.latLng,
        label: `${path.getLength()}`,
        map: this.map
      })
      marker.setMap(map)
    
    // Polyline mapping
    // const path = poly.getPath();
    // path.push(e.latLng);
    // console.log(poly.getPath());

    
    // this.setState({ [markers]: [...markers, e.latLng]})
    // not sure why its not saving
    }
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

  geocoderAddr(geocoder, map) {
    const addr = document.getElementById("geocoder-addr").value;

    geocoder.geocode({ address: address}), (results, status) => {
      if (status ==="OK") {
        map.setCenter(results[0].geometry.location);
      } else {
        alert(`Unable to obtain location due to: ${status}`)
      }
    }
  }


	// eventListeners(map) {
  //   map.addListener("idle", () => {
  //     const { north, south, east, west } = map.getBounds().toJSON();
	// 		const bounds = {
  //       northEast: { lat: north, lng: east },
	// 			southWest: { lat: south, lng: west },
  //     };
  //     console.log(bounds);
	// 		// this.props.updateFilter("bounds", bounds);
	// 	});
	// 	map.addListener("click", (event) => {
  //     const coords = getCoordsObj(event.latLng);
  //     console.log(coords)
  //     this.handleClick(coords, map);
  //     // this.addMarker(coords, map)
	// 	});
  // }
  
  // addMarker(location, map) {
  //   const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   let labelIndex = 0;

  //   new google.maps.Marker({
  //     position: location,
  //     label: labels[labelIndex++ % labels.length],
  //     map: map,
  //   });
  // }

    
    // ATTEMPT TO SET MARKERS IN STATE. ERRORS SAY CANNOT FIND MARKERS
    // const oldMarkers = Object.assign({}, this.state.markers)
    // console.log(oldMarkers)
    // return this.setState({ markers: [...oldMarkers, coords]})
    
    // ATTEMPT TO PUSH ROUTEINFO INTO URL
		// this.props.history.push({
		// 	pathname: "/routes/create",
		// 	search: `lat=${coords.lat}&lng=${coords.lng}`,
		// });
	// }


	render() {
		return (
			<div id="map-container" ref={(map) => (this.mapNode = map)}>
				Map
			</div>
		);
	}
}

export default Map;