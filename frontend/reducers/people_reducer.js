import {
  CLEAR_PEOPLE,
  RECEIVE_PEOPLE,
  RECEIVE_FRIENDS,
} from "../actions/friend_actions"

const peopleReducer = (state = {}, action) => {
  Object.freeze(state)
  const { people } = action

  switch (action.type) {
		case RECEIVE_PEOPLE:
			return people;
		case CLEAR_PEOPLE:
			return {};
		default:
			return state;
	}
}

export default peopleReducer;
