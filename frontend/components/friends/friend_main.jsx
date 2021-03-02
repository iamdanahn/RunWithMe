import React from "react"
import { Link } from "react-router-dom";

class Friends extends React.Component {
  constructor(props) {
    super(props);

    this.unFriend = this.unFriend.bind(this)
  }
  
  componentDidMount() {
    debugger;
    this.props.fetchFriends();
  }

  unFriend(friendId) {
    return e => {
      e.preventDefault();
      this.props.unFriend(friendId)
    }
  }

  render() {
    debugger;
    console.log("grabbing friends")
    console.log(this.props.friends);

    const frands = this.props.friends.map((friend) => {
      debugger;
      return (
        <li key={friend.id}>
          <Link to={`/profile/${friend.id}`} >
            Friends name: {`${friend.first_name} ${friend.last_name}`}
          </Link>
          <div>
            <button onClick={this.unFriend(friend.id)}>
              Unfriend
            </button>
          </div>
        </li>
      )
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
          <section className="fb list">
            My Friends
            <ul> {frands} </ul>
          </section>
        </section>
      </div>
    )
  }
}

export default Friends
