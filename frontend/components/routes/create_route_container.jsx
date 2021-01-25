import { connect } from "react-redux";
import {createRoute } from '../../actions/route_actions'
import Search from "./create_route";

// const msp = (state, ownProps) => {
    // return ({
    // })
// };

const mdp = (dispatch) => {
  return ({
    createRoute: (route) => dispatch(createRoute(route))

  })
}

export default connect(null, mdp)(Search);
