import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    this.initMap();
  }

  usersPosition(map) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
        map.setCenter(pos);
      });
    }
  }

  initMap() {
    const mapProps = {
      zoom: 14,
      center: new google.maps.LatLng(37.7758, -122.435),
      mapTypeId: "roadmap",
    };
    
    const map = new google.maps.Map(this.mapNode, mapProps);
    this.usersPosition(map);
    
  }


  render() {
    return(
      <div id="map-container" ref={map => this.mapNode = map}> 
        Map
      </div>
    )

  }

}

export default Map;