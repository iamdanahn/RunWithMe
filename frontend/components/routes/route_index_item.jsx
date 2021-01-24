import React from 'react';
import { Link } from 'react-router-dom'
// import { openModal } from '../../actions/modal_actions' 
import Modal from "../../modal/modal";

class RouteIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }  

  render(){
    debugger
    const { route, deleteRoute, openModal } = this.props;

    return (
			<tr>
				<td>
					<Link to="">Image of route</Link>
				</td>
				<td>
					<Link to="">
						{new Intl.DateTimeFormat("en-US").format(route.created_at)}
					</Link>
				</td>
				<td>{route.distance}</td>
				<td>Elevation</td>
				<td>
					<Link to="">{route.route_title}</Link>
				</td>
				<td>{route.location}</td>
				<td>Privacy</td>
				<td>
					<Link to={`/routes/${route.id}/edit`}>Edit</Link>
					<button routeid={route.id} onClick={() => openModal("open")}>
						Delete
					</button>
					<Modal deleteRoute={(route) => deleteRoute(route.id)} />
					
				</td>
			</tr>
		);
  }
}


export default RouteIndexItem;