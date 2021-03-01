import React from "react"
import { Link } from "react-router-dom"

class FriendFind extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // firstName: "",
      // lastName: "",
      // email: "",
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
      const { currentUser, sendFriendReq } = this.props
      const request = { requester_id: currentUser.id, receiver_id: friend_id }
      // create request payload to go and send

      sendFriendReq(request)
    }
  }

  handleChange(e) {
    this.setState({ search: e.currentTarget.value })
  }

  handleSubmit(e) {
    debugger
    e.preventDefault()
    // search function from propssett
    // const { search } = this.state
    this.props.findFriends(this.state)
    this.setState({ search: "" })
  }

  render() {
    const { people } = this.props
    const members = people.map((person) => {
      return (
        <li key={person.id}>
          <div>
            {person.first_name} {person.last_name}
            <button onClick={this.handleClick(person.id)}>ADD</button>
          </div>
        </li>
      )
    })

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
          <div>Find RunWithMe Friends by First Name, Last Name, or Email:</div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange}></input>
            <button>Submit</button>
          </form>

          <ul>{members}</ul>
        </section>
      </div>
    )
  }
}

export default FriendFind
