import React from 'react';
import { Link } from 'react-router-dom';

class WorkoutLinks extends React.Component {

  render() {
    const { currentUser, logout } = this.props;

    return currentUser ? (
      <div className="dropdown-content">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/workouts">Stats</Link>
        <Link to="/dashboard/goals">Goals</Link>
      </div>
    ) : null;
  }
}

export default WorkoutLinks;

// <div className="dropdown-content">
// 	<Link to="/dashboard">Dashboard</Link>
// 	<Link to="/dashboard/workouts">Stats</Link>
// 	<Link to="/dashboard/goals">Goals</Link>
// </div>;