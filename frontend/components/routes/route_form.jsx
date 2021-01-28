import React from 'react';

class RouteForm extends React.Component {
  constructor(props) {
    super(props)
		this.state = {
			route: props.route,
			address: ""
		}
		

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
    this.setState({ [field]: e.currentTarget.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
		
  }

  render () {
		const { formType, searchAddy } = this.props;
		const address = this.state.address

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

					<form >
						<div>
							<h3>{formType} Route Details</h3>
							<input
								type="text"
								// value={this.state.route_title}
								// onChange={this.update("route_title")}
								placeholder="Route title"
							/>
							<span>*</span>
						</div>

						<div>
							<select>
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