import { connect } from "react-redux";
import FriendFind from "./friend_find.jsx";
import { findFriends, sendFriendReq } from "../../actions/friend_actions.js"

const msp = (state, ownProps) => {
  debugger
  const currentUserId = state.session.id
  return {
    // state.entities.people is an Object so need to Object.values for each user's info
    people: Object.values(state.entities.people),
    currentUser: state.entities.users[currentUserId],
  }
};

const mdp = (dispatch) => {
  debugger
  return {
    findFriends: (criteria) => dispatch(findFriends(criteria)),
    sendFriendReq: (request) => dispatch(sendFriendReq(request)),
  }
};

export default connect(msp, mdp)(FriendFind);
