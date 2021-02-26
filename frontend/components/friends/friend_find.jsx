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
    // const { people } = this.props;
    // const members = people.map((person) => {
    //   return;
    //   <li> persons fname, lname, add button </li>;
    // });

    return (
      <div className="friends-cntr">
        <section className="friends-header">
          Friends Header
          <div className="friends-links 1">
            <Link to="/friendships">My Friends Link, no button</Link>
          </div>
          <div className="friends-links 2">
            <button>
              <Link to="/friendships/find">Find Friends Link in a button</Link>
            </button>
          </div>
        </section>
        <section className="friends-body">
          <div>Find RunWithME Friends by First Name, Last Name, or Email:</div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange}></input>
            <button>Submit</button>
          </form>

          {/* <ul>{members}</ul> */}
        </section>
      </div>
    )
  }
}

export default FriendFind
