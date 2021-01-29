import React from 'react';

class RouteForm extends React.Component {
  constructor(props) {
    super(props)
		this.state = {
			route: this.props.route,
			address: "",
			name: "",
			activity: props.activity
		}
		debugger
	
		this.handleSubmit = this.handleSubmit.bind(this);
		this.formattedState = this.formattedState.bind(this);
  }

  update(field) {
    return e => {
    this.setState({ [field]: e.currentTarget.value})
    }
	}
	
	formattedState() {
		debugger
		const { creator_id, location, distance, markers} = this.state.route;
		const { name, activity } = this.state;
		const strMarkers = JSON.stringify(markers)

		return {
			name,
			creator_id,
			activity,
			location,
			distance,
			markers: strMarkers
		};
	}

  handleSubmit(e){
		const { action } = this.props;
		e.preventDefault();
		action(this.formattedState).then( (route) => {
			this.props.history.push(`/routes/${route.id}`)
		})
  }

  render () {
		const { formType, searchAddy } = this.props;
		const { address, activity } = this.state

		debugger 

    return (
			<div className="create-route-cntr">
				<div className="cr-form">
					<h4>Choose map location</h4>
					<form className="cr-search-bar" onSubmit={() => searchAddy(address)}>
						<input
							id="geocoder-addr"
							type="text"
							placeholder="Enter location"
							value={this.state.address}
							onChange={this.update("address")}
						/>
						<button id="geocoder-submit">
							{" "}
							{/* onClick={() => searchAddy(address)}> */}
							Search
						</button>
					</form>

					<br />

					<form onSubmit={this.handleSubmit}>
						<div>
							<h3>{formType} Route Details</h3>
							<input
								type="text"
								value={this.state.name}
								onChange={this.update("name")}
								placeholder="Route title"
							/>
							<span>*</span>
						</div>

						<div>
							<select defaultValue={activity}>
								<option>Choose an Activity</option>
								<option value="walk">Walk</option>
								<option value="run">Run</option>
								<option value="bike">Bike</option>
							</select>
							<span>*</span>
						</div>
						<div>
							<button >Save Route</button>
						</div>
					</form>


				</div>
			</div>
		);
  }
}

export default RouteForm;