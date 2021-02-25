import { connect } from 'react-redux';
// import { fetchFriends } from ""
import FriendMain from './friend_main.jsx'


const msp = (state, ownProps) => {
  debugger
  return {
    currentUser: state.entities.users[1],
  }
}

const mdp = dispatch => {
  return {
    // fetchFriends: () => dispatch(fetchFriends()),
  }
}

export default connect(msp, mdp)(FriendMain)