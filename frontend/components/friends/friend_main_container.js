import { connect } from 'react-redux';
import FriendMain from './friend_main.jsx'


const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[]
  }
}

const mdp = dispatch => {
  return {

  }
}

export default connect(msp, mdp)(FriendMain)