import React from "react"
import { Link } from "react-router-dom"
import { fetchFriends } from "../../actions/friend_actions"

class FriendFind extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillUnmount() {
    debugger
    this.props.clearPeople()
  }

  handleClick(friend_id) {
    return (e) => {
      e.preventDefault()
      debugger
      const { addFriend, currentUser, sendFriendReq } = this.props
      // this section for direct friend request (demo purpose)
      // find friends == promise otherwise, non-friends list will not update after click
      addFriend(friend_id).then(() => this.props.findFriends(this.state))

      // this section for friend request functionality
      // create request payload to go and send
      // const request = { requester_id: currentUser.id, receiver_id: friend_id }
      // sendFriendReq(request)
    }
  }

  handleChange(e) {
    this.setState({ search: e.currentTarget.value })
  }

  handleSubmit(e) {
    debugger
    e.preventDefault()
    // search function from props set
    // const { search } = this.state
    this.props.findFriends(this.state)

    // this.setState({ search: "" })
  }

  render() {
    const selected1 =
      this.props.match.path === "/friends"
        ? "friends-links selected"
        : "friends-links"
    const selected2 =
      this.props.match.path === "/friends/find"
        ? "friends-links selected"
        : "friends-links"

    const { people } = this.props
    const members = people.map((person) => {
      return (
        <li key={person.id} className="friend-item-cntr">
          <div className="friend-item main">
            {person.first_name} {person.last_name}
            <button onClick={this.handleClick(person.id)}>ADD</button>
          </div>
        </li>
      )
    })

    return (
      <div className="friends-bg">
        <div className="friends-cntr">
          <section className="friends-header">
            <Link to="/friends" className={selected1}>
              My Friends
            </Link>
            <Link to="/friends/find" className={selected2}>
              Find Friends
            </Link>
          </section>
          
          <section className="friends-body">
            <h3>
              Find RunWithMe Friends by First Name, Last Name, or Email:
            </h3>
            <form onSubmit={this.handleSubmit}>
              <div className="input-cntr">
                <input type="text" onChange={this.handleChange}></input>
              </div>
              <div className="button-cntr">
                <button>Search</button>
              </div>
            </form>

            <ul>{members}</ul>
          </section>
        </div>
      </div>
    )
  }
}

export default FriendFind
