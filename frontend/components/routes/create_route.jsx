import React from 'react';

class CreateRoute extends React.Component {

  gMap() {
    let mapProp = {
      center: new google.maps.LatLng()
    }
  }
  
  render () {
    let myMap = () => {}
    return (
      <div className="create-route">
        <div className="cr search-bar">


        </div>
        <div classname="gmap">

        </div>
      </div>
    )
  }
}