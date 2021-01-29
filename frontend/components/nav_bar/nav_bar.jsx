import React from 'react';
import { Link } from 'react-router-dom';
import SessionLinks from './dd_session'
import RouteLinks from './dd_route'
import WorkoutLinks from './dd_workouts';

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		// debugger;
		e.preventDefault();
		this.props.clearErrors([]);
		this.props.history.push("/login");
	}

	render() {
		const { currentUser, logout } = this.props;

		return (
			<div className="masthead">
				<div className="masthead logo">
					<Link to="/">
						<img src={window.logoURL} alt="run-with-me-logo" />
					</Link>
				</div>

				<div className="masthead a-box">
					<div className="dropdown">
						<button className="navbtn" to="/">
							Workouts
						</button>
						<WorkoutLinks currentUser={currentUser} logout={logout} />
					</div>

					<div className="dropdown">
						<button className="navbtn" to="/">
							Routes
						</button>
						<RouteLinks currentUser={currentUser} logout={logout} />
					</div>

					<div className="dropdown">
						<button className="navbtn" to="/">
							Commmunity
						</button>
						<div className="dropdown-content">
							<Link to="">
								{/* https://github.com/friesarecurly/MapMyRun-Clone*/}
								Github Repo
							</Link>
						</div>
					</div>

					<div className="dropdown">
						<button className="navbtn" to="https://github.com/friesarecurly">
							Github
						</button>
					</div>

					<div className="dropdown">
						<button
							className="navbtn"
							to="https://www.linkedin.com/in/daniel-ahn-6b34151bb/"
						>
							LinkedIn
						</button>
					</div>
				</div>

				{/* <SessionLinks currentUser={currentUser} logout={logout} clearErrors={clearErrors} history={history}/> */}

				{currentUser ? (
					<div className="masthead auth">
						<div className="dropdown">
							<button className="navbtn" to="/account/my_profile">
								Welcome {currentUser.first_name}!
							</button>
							<div className="dropdown-content">
								<Link to="">Profile and Settings</Link>
								<Link to="">Connected Apps</Link>
								<Link to="">Support</Link>
								<Link onClick={logout} to="/">
									Logout
								</Link>
							</div>
						</div>
					</div>
				) : (
					<div className="masthead login-signup">
						<a>
							<button className="button-login" onClick={this.handleClick}>
								Log in
							</button>
						</a>
						<Link to="/signup">
							<button className="button-signup">Sign up</button>
						</Link>
					</div>
				)}
			</div>
		);
	}
}

export default NavBar;