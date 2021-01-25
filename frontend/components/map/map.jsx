import React from 'react';

class Map extends React.Component {
  componentDidMount() {
    const mapProps = {
			zoom: 13,
			center: new google.maps.LatLng(37.7758, -122.435),
			mapTypeId: 'roadmap'
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