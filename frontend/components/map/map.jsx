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
    // this.addPoint = this.addPoint.bind(this);
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
    this.directionsService = new google.maps.DirectionsService();
    // enables D.Renderer - displays DirectionResults
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(map);

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

    const addPoint = (e) => {
			const marker = new google.maps.Marker({
				position: e.latLng,
				// label: `${path.getLength()}`,
				map: this.map,
			});
			marker.setMap(map);
      // setState({ ["markers"]: [...this.state.markers, e.latLng] });
    };
    
    
    // this.eventListeners(map);
    map.addListener("click", (e) => {
      const marker = new google.maps.Marker({
        position: e.latLng,
        map: this.map,
      });
      //  // debugger
      marker.setMap(map);
      this.setState({ ["markers"]: [...this.state.markers, e.latLng] });
    })
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
  
  // Check marker's state and when lenght is > 1, send directionsService.route
  // 
  componentDidUpdate() {
    const { markers } = this.state;
    const origin = markers[0];
    // let markLength = markers.length
    let dest = markers[markers.length-1];
    let wP = markers.slice(1, markers.length - 1).map((val) => ({
			location: val,
			stopover: true,
    }));
    

    if (markers.length > 2) {
      this.directionsService.route({
        origin: origin,
        destination: dest,
        waypoints: wP,
        travelMode: google.maps.TravelMode.WALKING,
      }, (response, status) => {
        if (status === "OK") {
          // console.log(response)
          this.directionsRenderer.setDirections(response);
          // console.log(markers)
          //  // debugger
          // gets details of previous marker to marker just clicked
          // console.log(response.routes[0].legs[markers.length-2])
          // gets distance from previous marker to marker just clicked
          // console.log(response.routes[0].legs[markers.length-2].distance.value);
        } else {
          // console.log("Directions failed")
        }
      })
    } else if ( markers.length === 2 ) {
        this.directionsService.route(
          {
            origin: origin,
            destination: dest,
            travelMode: google.maps.TravelMode.WALKING,
          },
          (response, status) => {
            if (status === "OK") {
              this.directionsRenderer.setDirections(response);
            } else {
              // console.log("Directions failed");
            }
          },
        );
    }
  }

    // markers[0].lat()
    // 40.739394483605125
    // markers[0].lng()
    // -74.0023508387882
    
    
    // ATTEMPT TO SET MARKERS IN STATE. ERRORS SAY CANNOT FIND MARKERS
    // const oldMarkers = Object.assign({}, this.state.markers)
    // // console.log(oldMarkers)
    // return this.setState({ markers: [...oldMarkers, coords]})
    
    // ATTEMPT TO PUSH ROUTEINFO INTO URL
		// this.props.history.push({
		// 	pathname: "/routes/create",
		// 	search: `lat=${coords.lat}&lng=${coords.lng}`,
		// });
	// }


	render() {
    //  // debugger
		return (
			<div id="map-container" ref={(map) => (this.mapNode = map)}>
				Map
			</div>
		);
	}
}

export default Map;