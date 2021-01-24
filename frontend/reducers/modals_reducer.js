import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions'

const modalReducer = (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case OPEN_MODAL:
      return {[state.ui.modal]: action.state};
    case CLOSE_MODAL:
  
    default:
      return state;
  }
}