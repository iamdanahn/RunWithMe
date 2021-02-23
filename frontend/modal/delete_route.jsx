import React from 'react';
import { Link } from 'react-router-dom'


const DeleteRoute = ({route, deleteRoute, closeModal}) => {
   debugger
  return (
    <div className="modal-delete">
      <h3>Delete Route?</h3>
      <div className="modal-btns">
        <button className="modal-btns-ok" onClick={() => deleteRoute()}>
          OK
        </button>
        <button className="modal-btns-cancel" onClick={closeModal}>
          CANCEL
        </button>
      </div>
    </div>
  )
}

export default DeleteRoute;