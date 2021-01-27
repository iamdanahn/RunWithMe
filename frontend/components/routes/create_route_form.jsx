import React from 'react';

class CreateRouteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      route_title: "",
      search: ""
    }

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
    this.setState({ [field]: e.currentTarget.value})
    }
  }


  // handleSubmit(e){
  //   e.preventDefault();

  // }

  render () {
    return (
			<div className="create-route-cntr">
			
				<div className="cr-search-bar">
					<input
						id="geocoder-addr"
						type="text"
						placeholder="Enter location"
						value={this.state.search}
						onChange={this.update("search")}
					/>
					<button  id="geocoder-submit">Search</button>
				</div>

				<div>
					<h3>Route Details</h3>
					<input
						type="text"
						value={this.state.route_title}
						onChange={this.update("route_title")}
            placeholder="Route title"
					/>

					<select>
						<option>Choose an Activity</option>
						<option>Walk</option>
						<option>Run</option>
						<option>Bike</option>
					</select>
				</div>
			</div>
		);
  }
}

export default CreateRouteForm;