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
      id: this.props.route.id,
      name: this.props.route.name,
      creator_id: this.props.route.creator_id,
      activity: this.props.route.activity,
      location: this.props.route.location,
      distance: this.props.route.distance,
      address: "",
      markers:
        this.props.route.markers.length > 0
          ? JSON.parse(this.props.route.markers)
          : this.props.route.markers,
      formErr: "form-err-hide",
    }

    this.wayPoints = this.state.markers

    this.initMap = this.initMap.bind(this)
    this.renderMarkers = this.renderMarkers.bind(this)
    this.searchAddress = this.searchAddress.bind(this)

    this.formattedState = this.formattedState.bind(this)
    this.undoMark = this.undoMark.bind(this)
    this.clearMarks = this.clearMarks.bind(this)
    this.centerMap = this.centerMap.bind(this)
    this.reverseMarks = this.reverseMarks.bind(this)
    this.returnHome = this.returnHome.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    // enables D.Service - initiates direction request with route() method
    // Returns DirectionsResult & DirectionsStatus code
    this.directionsService = new google.maps.DirectionsService()

    // enables D.Renderer - displays DirectionResults
    // https://developers.google.com/maps/documentation/javascript/reference/directions
    this.directionsRenderer = new google.maps.DirectionsRenderer()
  }

  componentDidMount() {
    this.initMap()
    if (this.props.formType === "Edit") {
      this.renderMarkers()
    }
  }

  initMap() {
    // get default position

    this.center =
      this.state.markers.length > 0
        ? this.state.markers[0]
        : new google.maps.LatLng(40.7362891, -73.9937557)

    debugger
    this.mapProps = {
      zoom: 14,
      center: this.center,
      clickableIcons: false,
      draggableCursor: "crosshair",
    }

    // mapNode == ref to <div map>
    this.map = new google.maps.Map(this.mapNode, this.mapProps)
    this.usersPosition()

    // sets directions rendering options, draggable = points draggable
    this.directionsRenderer.setOptions({
      map: this.map,
      draggable: true,
      preserveViewport: true,
    })

    this.map.addListener("click", (e) => {
      // adds lat/lng object to waypoints array
      this.wayPoints.push({ lat: e.latLng.lat(), lng: e.latLng.lng() })

      //TEST
      console.log(this.wayPoints)
      debugger
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
    
		const origin = this.wayPoints[0]
    let dest = this.wayPoints[this.wayPoints.length - 1]

    let wP = this.wayPoints.slice(1, this.wayPoints.length - 1).map((val) => ({
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
      this.renderMarkers()
    } else if (this.wayPoints.length === 1) {
      this.clearMarks()
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

      //commented out below due to error in console
      // this.directionsRenderer.setDirections({ routes: [] }) // setMap(null) removes directions from map
      // this.renderMarkers()
    }
  }

  centerMap() {
    // this.map.panTo(this.center);
    // https://developers.google.com/maps/documentation/javascript/reference/map#Map.panToBounds
    // this.map.panToBounds( <need bounds> )
    // bounds available in response.routes[0].bounds
    const { markers } = this.state.markers
    let latLngBounds = this.directionsRenderer.getDirections().routes[0].bounds
    const padding = { top: 500, right: 500, bottom: 500, left: 500 }

    if (markers.length > 1) {
      this.map.panToBounds(latLngBounds, padding)
    }
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
    // console.log(JSON.stringify(this.state.markers))

    return (e) => {
      console.log(this.state)
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  formattedState() {
    debugger
    const {
      id,
      activity,
      creator_id,
      distance,
      location,
      markers,
      name,
    } = this.state
    const strMarkers = JSON.stringify(markers)

    return {
      id,
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
    console.log(this.formattedState())

		if (this.state.name.length === 0) {
      this.setState({ formErr: "form-err-show" })

      // return out to avoid unnecessary backend hit
      return
    } else {
			this.setState({ formErr: "form-err-hide" })
		}
		console.log(this.formErr)

		if (this.wayPoints.length > 1) {
			debugger
				this.props.action(this.formattedState()).then((response) => {
				debugger
				// res is whole action pkg
				this.props.history.push(`/dashboard`)
			})
		} else {
			alert("Must have 2 points to save route")
		}
  }

  render() {
    let { name, creator_id, activity, location, distance, markers , address, formErr} = this.state
    const { action, route, formType } = this.props
    debugger

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
    )
  }
}

export default Map;

