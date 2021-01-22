import React from 'react';
// use loader creates a Promise and callback interface
import { Loader } from "@googlemaps/js-api-loader"



class Map extends React.Component {


  render() {

    const loader = new Loader({
      apiKey: "{window.googleAPIKey}", // insert hidden api version
      version: "weekly",
      // ...additionalOptions, // libraries that gmaps has
    });
    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });

  return(
    <>
      {map}
    </>
  )

  }

}

export default Map;