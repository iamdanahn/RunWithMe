import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom'
import { fetchRoutes, createRoute, updateRoute } from '../../actions/route_actions';
import { openModal, closeModal } from '../../actions/modal_actions'
import RouteIndex from './route_index';

const msp = (state, ownProps) => {
  return ({
    routes: Object.values(state.entities.routes)
  })
}

const mdp = dispatch => {
  return {
		fetchRoutes: () => dispatch(fetchRoutes()),
		createRoute: (route) => dispatch(createRoute(route)),
		updateRoute: (route) => dispatch(updateRoute(route)),
	};
}

export default connect(msp, mdp)(RouteIndex)