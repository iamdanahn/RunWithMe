import React from 'react';
import MapTools from './map_tools'
import RouteForm from '../routes/route_form'

const getCoordsObj = (latLng) => ({
	lat: latLng.lat(),
	lng: latLng.lng(),
});


class Map extends React.Component {
	constructor(props) {
		super(props);
    this.state = this.props.route;
    // debugger

    this.initMap = this.initMap.bind(this);
    // this.addPoint = this.addPoint.bind(this);
    // this.geocoderAddr = this.geocoderAddr.bind(this);
    this.renderMarkers = this.renderMarkers.bind(this);

    this.undoMark = this.undoMark.bind(this)
    this.clearMarks = this.clearMarks.bind(this)
    this.centerMap = this.centerMap.bind(this)
    this.reverseMarks = this.reverseMarks.bind(this)
    this.returnHome = this.returnHome.bind(this)

	}

	componentDidMount() {
		this.initMap();
  }

	initMap() {
		// get default position
    
    const center = this.state.markers.length > 0 ? this.state.markers[0] : new google.maps.LatLng(40.7362891, -73.9937557);
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

		// creates info window object
		const infoWindow = new google.maps.InfoWindow();

		// enable geocoding
		const geocoder = new google.maps.Geocoder();
		document.getElementById("geocoder-submit").addEventListener("click", () => {
			this.geocodeAddr(geocoder, this.map);
		});

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
		this.map.addListener("click", (e) => {
			const marker = new google.maps.Marker({
				position: e.latLng,
				map: this.map,
			});
			// marker.setMap(this.map);
      this.setState({ ["markers"]: [...this.state.markers, e.latLng] });
      this.renderMarkers()
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
    
    let dest = markers[markers.length-1];
    let wP = markers.slice(1, markers.length - 1).map((val) => ({
			location: val,
			stopover: true,
    }));
    
    if (markers.length > 1) {
      this.directionsService.route({
        origin: origin,
        destination: dest,
        waypoints: wP,
        travelMode: google.maps.TravelMode.WALKING,
      }, (response, status) => {
        if (status === "OK") {
          const rtDistance = response.routes[0].legs[markers.length-2].distance.value;
          this.addDistance(rtDistance)          
          console.log(this.state.distance)

          this.directionsRenderer.setDirections(response);
        } else {
          console.log("Directions failed")
        }
      })
    } 
  }
  addDistance(routeDist) {
    const oldDistance = this.state.distance;
    const newDistance = oldDistance + routeDist;
    this.setState({distance: newDistance})
  }

  // console.log(response.routes[0].legs[markers.length-2])
  // gets details of previous marker to marker just clicked
  // console.log(response.routes[0].legs[markers.length-2].distance.value);
    // gets distance from previous marker to marker just clicked
    
  
  // markers[0].lat()
    // 40.739394483605125
    // markers[0].lng()
    // -74.0023508387882
    
    
    // obtains location via address name
    // geocoderAddr(geocoder, map) {
    //   const addr = document.getElementById("geocoder-addr").value;
  
    //   geocoder.geocode({ address: address}), (results, status) => {
    //     if (status ==="OK") {
    //       map.setCenter(results[0].geometry.location);
    //     } else {
    //       alert(`Unable to obtain location due to: ${status}`)
    //     }
    //   }
    // }
    
    // ATTEMPT TO PUSH ROUTEINFO INTO URL
		// this.props.history.push({
		// 	pathname: "/routes/create",
		// 	search: `lat=${coords.lat}&lng=${coords.lng}`,
		// });
	// }

  undoMark() {
    const oldMarks = this.state.markers
    const newMarks = () => oldMarks.pop()
    this.setState({['markers']: newMarks})
  }

  clearMarks() {
    this.setState({['markers']: []})
  }

  centerMap() {
    () => this.map.panTo(mapProps[center])
  }
  reverseMarks() {

  }

  returnHome() {

  }
	render() {
    	const {
				route,
				route_title,
				creator_id,
				activity,
				location,
				distance,
				markers,
      } = this.state;
      const { formType } = this.props;
    debugger

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

  // contains, distance in miles
  // undo button aka pop from markers array
  // clear button aka clear markers array
  // center button aka center map to default lat.lng
  // reverse button aka reverse markers array
  // return button aka markers array .push(markers[0])