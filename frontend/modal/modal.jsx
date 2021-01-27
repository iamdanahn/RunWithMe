import React from 'react'
import { closeModal } from '../actions/modal_actions';
import { connect }  from 'react-redux';
import DeleteRouteContainer from './delete_route_container';


function Modal ({modal, closeModal, deleteRoute}) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'open':
       // debugger
      component = <DeleteRouteContainer deleteRoute={deleteRoute}/>;
      break;
    default:
      return null;
  }

  return (
		<div className="modal-background" onClick={closeModal}>
			<div className="modal-child" onClick={(e) => e.stopPropagation()} >
				{component}
			</div>
		</div>
	);
}

const msp = state => {
  return {
    modal: state.ui.modal
  }
}

const mdp = dispatch => {
  //  // debugger
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(Modal)