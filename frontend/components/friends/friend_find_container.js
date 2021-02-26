import { connect } from "react-redux";
import FriendFind from "./friend_find.jsx";
import { findFriends } from "../../actions/friend_actions.js";

const msp = (state, ownProps) => {
  debugger
  return {
    // state.entities.people is an Object so need to Object.values for each user's info
    people: Object.values(state.entities.people),
  }
};

const mdp = (dispatch) => {
  return {
    findFriends: (criteria) => dispatch(findFriends(criteria)),
  }
};

export default connect(msp, mdp)(FriendFind);
