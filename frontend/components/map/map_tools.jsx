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
    // const miles = (distance * 0.000621371).toFixed(2);

    return (
			<div className="map-toolbar-cntr">
				<div className="tb-1">
					<label> Distance
						<h2>{distance}</h2>
					</label>
				</div>
				<div className="tb-2">
					<div>
            <button className="tb-row 1" onClick={undo}>Undo</button>
            {/* <button className="tb-row 1" onClick={clear}>Clear</button>
            <button className="tb-row 1" onClick={center}>Center</button> */}
          </div>
					<div>
            <button className="tb-row 2" onClick={reverse}>Reverse</button>
            <button className="tb-row 2" onClick={returnHome}>Return</button>
          </div>
				</div>
			</div>
		);
  }

}

export default MapTools;