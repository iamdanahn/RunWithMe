import React from "react"
import { Link } from "react-router-dom";

class Friends extends React.Component {
  componentDidMount() {
    debugger;
    this.props.fetchFriends();
  }

  render() {
    debugger;
    console.log(this.props.friends);

    const frands = this.props.friends.map((friend) => {
      debugger;
      return (
        <li key={friend.id}>
          Friends name: {`${friend.first_name} ${friend.last_name}`}
        </li>
      );
    });

    return (
      <div className="friends-cntr">
        <section className="friends-header">
          Friends Header
          <div className="friends-links 1">
            <Link to="/friendships">My Friends Link</Link>
          </div>
          <div className="friends-links 2">
            <Link to="/friendships/find">Find Friends Link</Link>
          </div>
        </section>
        <section className="friends-body">
          <div>Friend Body Header </div>
          <div>Friends Body List</div>
          <div>
            My Friends
            <ul> {frands} </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Friends
