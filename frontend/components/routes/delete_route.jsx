import React from 'react';
import { Link } from 'react-router-dom'


const DeleteRoute = ({route, deleteRoute, closeModal}) => {
  return (
    <div className="modal-delete">
      <h3>Delete Route?</h3>
      <div>
        <Link to={()=> deleteRoute}> OK </Link>
        <button onClick={closeModal}> X </button>
      </div>
    </div>
  )
}

export default DeleteRoute;