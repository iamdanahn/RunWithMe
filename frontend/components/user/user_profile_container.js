import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import UserProfile from "./user_profile"
import { findFriends } from "../../actions/friend_actions"
import { fetchUser } from "../../actions/user_actions"

const msp = (state, ownProps) => {
  debugger
  return {
    currentUser: Object.values(state.entities.user)[0],
    // userProfile: ,
    routes: Object.values(state.entities.routes),
  }
}

const mdp = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    findFriends: (criteria) => dispatch(findFriends(criteria)),
  }
}

export default withRouter(connect(msp, mdp)(UserProfile))
