import React from 'react';

class CreateRouteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      route_title: "",
  
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

  }


  render () {
    return (
      <div className="create-route">
        <div className="cr-search-bar">
          <input
            type="text"
            placeholder="Enter location"
          />
          <button onClick={this.handleSubmit}>
            Search
          </button>
        </div>

        <div>
          <h3>Route Details</h3>
          <input
            type="text"
            value={this.state.route_title}  
          />
          <select>
            <option>Choose an Activity</option>
            <option>Walk</option>
            <option>Run</option>
            <option>Bike</option>
          </select>
        </div>
      </div>
    )
  }
}

export default CreateRouteForm;