import React from 'react'
import { Link } from 'react-router-dom'

class RouteDDContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.mouseIn = this.mouseIn.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }
	

	mouseIn() {
		this.setState({ [show]: true })
	}
	mouseOut() {
		this.setState({ [show]: false })
	}


  render() {
    return (
			<div className="rdd">
				<div
					className="links"
					onMouseOver={() => this.mouseIn("route")}
					onMouseLeave={() => this.mouseOut("route")}
				>
					<Link className="rdd root" to="/">
						Routes
					</Link>
          <div className="rdd items">
          <Link to="/routes/search">
            <button className="rdd item">Find Route</button>
          </Link>
          <Link to="/routes/create">
            <button className="rdd item">Create Route</button>
          </Link>
          <Link to="/routes">
            <button className="rdd item">My Routes</button>
          </Link>
				</div>
        </div>
			</div>
		);
  }
}

export default RouteDDContent