import { connect } from "react-redux";
import FriendFind from "./friend_find.jsx";
import {
  clearPeople,
  findFriends,
  sendFriendReq,
  addFriend,
} from "../../actions/friend_actions.js"

const msp = (state, ownProps) => {
	const currentUserId = state.session.currentUser.id;
	return {
		// state.entities.people is an Object so need to Object.values for each user's info
		people: Object.values(state.entities.people),
		currentUser: state.entities.user[currentUserId],
	};
};

const mdp = (dispatch) => {
	return {
		addFriend: (friendId) => dispatch(addFriend(friendId)),
		findFriends: (criteria) => dispatch(findFriends(criteria)),
		sendFriendReq: (request) => dispatch(sendFriendReq(request)),
		clearPeople: () => dispatch(clearPeople()),
	};
};

export default connect(msp, mdp)(FriendFind)