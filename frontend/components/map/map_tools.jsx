import React from 'react'

class MapTools extends React.Component {


  // contains, distance in miles
  // undo button aka pop from markers array
  // clear button aka clear markers array
  // center button aka center map to default lat.lng
  // reverse button aka reverse markers array
  // return button aka markers array .push(markers[0])


  render() {
    const { distance, undo, clear, center, reverse, returnHome } = this.props

    return (
      <div className="map-toolbar-cntr">
        <div className="tb-1">
          {distance}
        </div>
        <div className="tb-2">

        </div>
      </div>
    )
  }

}

export default MapTools;