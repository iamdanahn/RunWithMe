export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (user) => {
	return {
		type: RECEIVE_USER,
		user,
	};
}

export const fetchUserUtil = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${id}`
    })
};

export const fetchUser = (id) => (dispatch) => {
	return fetchUserUtil(id).then((user) => dispatch(receiveUser(user)));
};