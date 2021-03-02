import { connect } from "react-redux"
import UserProfile from "./user_profile"

const msp = (state, ownProps) => {
  debugger
  return {
    currentUser: Object.values(state.entities.user)[0],
  }
}

const mdp = (dispatch) => {
  return {}
}

export default connect(msp, mdp)(UserProfile)
