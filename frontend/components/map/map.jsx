import React from 'react';

class Map extends React.Component {
  componentDidMount() {
    const mapProps = {
      center: new google.maps.LatLng(-34.397, 150.644),
      zoom: 15,
      // mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(this.mapNode, mapProps)
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