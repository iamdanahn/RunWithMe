import React from "react";
import MapTools from "./map_tools";
import RouteForm from "../routes/route_form";

const getCoordsObj = (latLng) => ({
	lat: latLng.lat(),
	lng: latLng.lng(),
});

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.route.name,
      creator_id: this.props.route.creator_id,
      activity: this.props.route.activity,
      location: this.props.route.location,
      distance: this.props.route.distance,
      markers: this.props.route.markers,
      address: "",
    }

    if (this.state.markers.length > 0) {
      this.wayPoints = JSON.parse(this.state.markers)
    } else {
      // this.wayPoints = this.state.markers;
      this.wayPoints = []
    }
    debugger

    this.initMap = this.initMap.bind(this)
    // this.addPoint = this.addPoint.bind(this);
    // this.geocoderAddr = this.geocoderAddr.bind(this);
    this.renderMarkers = this.renderMarkers.bind(this)
    this.searchAddress = this.searchAddress.bind(this)

    this.undoMark = this.undoMark.bind(this)
    this.clearMarks = this.clearMarks.bind(this)
    this.centerMap = this.centerMap.bind(this)
    this.reverseMarks = this.reverseMarks.bind(this)
    this.returnHome = this.returnHome.bind(this)
    this.initMap = this.initMap.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.formattedState = this.formattedState.bind(this)
		
    // enables D.Service - initiates direction request with route() method
    // Returns DirectionsResult & DirectionsStatus code
    this.directionsService = new google.maps.DirectionsService()

    // enables D.Renderer - displays DirectionResults
    // https://developers.google.com/maps/documentation/javascript/reference/directions
    this.directionsRenderer = new google.maps.DirectionsRenderer()
  }

  componentDidMount() {
    this.initMap()
  }

  initMap() {
    // get default position

    this.center =
      this.state.markers.length > 0
        ? this.state.markers[0]
        : new google.maps.LatLng(40.7362891, -73.9937557)
    this.mapProps = {
      zoom: 14,
      center: this.center,
      clickableIcons: false,
      draggableCursor: "crosshair",
    }

    // mapNode == ref to <div map>
    this.map = new google.maps.Map(this.mapNode, this.mapProps)
    this.usersPosition()
    this.directionsRenderer.setOptions({
      map: this.map,
      draggable: true,
      preserveViewport: true,
    })

    this.map.addListener("click", (e) => {
      // const marker = new google.maps.Marker({
      // 	position: e.latLng,
      // 	map: this.map,
      // });
      // marker.setMap(this.map);

      // adds lat/lng object to waypoints array
      this.wayPoints.push({ lat: e.latLng.lat(), lng: e.latLng.lng() })

      //TEST
      console.log(this.wayPoints)
      debugger
      // console.log(marks)
      // this.setState({ ["markers"]: this.wayPoints });
      // console.log(marks)
      //TEST

      this.renderMarkers()
    })
  }

  // obtains user's current position if allowed on browser
  usersPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        debugger
        this.map.setCenter(pos)
      })
    }
  }

  renderMarkers() {
    const { markers } = this.state // if a saved route, will fetch those and render onto map
    const origin = markers[0]
    let dest = markers.length === 1 ? markers[0] : markers[markers.length - 1]
    let wP = markers.slice(1, markers.length - 1).map((val) => ({
      location: val,
      stopover: false,
    }))
    debugger

    this.setState({ ["markers"]: this.wayPoints })

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
          const distance = response.routes[0].legs[0].distance.text
          this.setState({ distance: distance })

          console.log(response)
          debugger

          // renders directions that are inside the response
          this.directionsRenderer.setDirections(response)
        } else {
          console.log("Directions failed")
        }
      },
    )
  }

  // search bar on left side of screen
  searchAddress(address) {
    //https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingResults
    // GEOCODING converts address <=> coordinates. Usefulf to palc emarkers or position map
    const geocoder = new google.maps.Geocoder()

    geocoder.geocode({ address: address }, (res, status) => {
      const locationName = res[0]
      if (status === "OK") {
        this.map.setCenter(res[0].geometry.location)
        this.setState({ ["location"]: res[0] })
      }
    })
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
    if (this.wayPoints.length > 1) {
      this.wayPoints.pop()
      // const oldMarks = Object.assign({}, this.state.markers)
      // oldMarks.pop();
      // const newMarks = oldMarks;
      // this.setState({ ["markers"]: this.wayPoints })

      // const
      // this.setState({ ["distance"]: newDistance })
      console.log(this.wayPoints)
      this.renderMarkers()
    }
  }

  clearMarks() {
    // https://developers.google.com/maps/documentation/javascript/examples/marker-remove
    // 1. iterate thru array of markers
    // 2. set marker's map to null
    // 3. set Marker Object to [], removes all markers in its array
    if (this.wayPoints.length > 0) {
      this.wayPoints = []
      debugger

      this.setState({ ["distance"]: "0 MI" })
      this.setState({ ["markers"]: [] })
      this.directionsRenderer.setDirections({ routes: [] }) // setMap(null) removes directions from map
      // this.directionsRenderer.setMap(null) // setMap(null) removes directions from map
      this.renderMarkers()
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
      this.wayPoints.reverse()
      this.renderMarkers()
    }
  }

  returnHome() {
    if (this.wayPoints.length > 1) {
      this.wayPoints.push(this.wayPoints[0])
      this.renderMarkers()
    }
  }

  update(field) {
    console.log(this.state)
    console.log(JSON.stringify(this.state.markers))

    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  formattedState() {
    debugger
    const {
      activity,
      creator_id,
      distance,
      location,
      markers,
      name,
    } = this.state
    const strMarkers = JSON.stringify(markers)

    return {
      name,
      creator_id,
      activity,
      location,
      distance,
      markers: strMarkers,
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    debugger
    console.log(this.formattedState())

    this.props.action(this.formattedState()).then((response) => {
			debugger
			// res is whole action pkg
      this.props.history.push(`/routes/${response.route.id}`)
    })
  }

  render() {
    let { name, creator_id, activity, location, distance, markers , address} = this.state
    const { action, route, formType } = this.props
    debugger

    return (
      <div className="user-panel">
        <div className="left-half">
          {/* <RouteForm
            action={action}
            activity={activity}
            creator_id={creator_id}
            distance={distance}
            formType={formType}
            location={location}
            markers={markers}
            name={name}
            searchAddy={this.searchAddress}
          /> */}

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
                <button id="geocoder-submit">
                  Search
                </button>
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
                    <option>Choose an Activity</option>
                    <option value="walk">Walk</option>
                    <option value="run">Run</option>
                    <option value="bike">Bike</option>
                  </select>
                  <span>*</span>
                </div>
                <div>
                  <button>Save Route</button>
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
    )
  }
}

export default Map;

