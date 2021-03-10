import React from 'react'
import { closeModal } from '../actions/modal_actions';
import { connect }  from 'react-redux';
// import DeleteRouteContainer from './delete_route_container'; DEPRECATED


function Modal ({modal, closeModal, deleteRoute}) {
	if (!modal) {
		return null;
	}

	let component;
	switch (modal) {
		case "open":
			component = (
				<div className="modal-delete">
					<h3>Delete Route?</h3>
					<div className="modal-btns">
						<button className="modal-btns-ok" onClick={deleteRoute}>
							OK
						</button>
						<button className="modal-btns-cancel" onClick={closeModal}>
							CANCEL
						</button>
					</div>
				</div>
			);

			break;
		default:
			return null;
	}

	return (
		<div className="modal-background" onClick={closeModal}>
			<div className="modal-child" onClick={(e) => e.stopPropagation()}>
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
	return {
		closeModal: () => dispatch(closeModal()),
	};
}

export default connect(msp, mdp)(Modal)