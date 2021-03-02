import { connect } from 'react-redux';
import { fetchFriends } from "../../actions/friend_actions";
import FriendMain from './friend_main.jsx'


const msp = (state, ownProps) => {
  debugger;
  const currentUserId = state.session.id;
  return {
    currentUser: state.entities.user[currentUserId],
    friends: Object.values(state.entities.friends),
  }
}

const mdp = dispatch => {
  debugger;
  return {
    fetchFriends: () => dispatch(fetchFriends()),
  };
}

export default connect(msp, mdp)(FriendMain)