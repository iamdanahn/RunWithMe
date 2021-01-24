import React from 'react';

class CreateRouteForm extends React.Component {


  render () {
    return (
      <div className="create-route">
        <div className="cr search-bar">
          <input
            type="text"
            placeholder="Enter location"
          />

        </div>
      </div>
    )
  }
}

export default CreateRouteForm;