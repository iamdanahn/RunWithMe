export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (user) => {
    debugger
    return {
        type: RECEIVE_USER,
        user,
    }
}

export const fetchUserUtil = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${id}`
    })
};

export const fetchUser = (id) => (dispatch) => {
    debugger
    return fetchUserUtil(id).then(user => dispatch(receiveUser(user)))
};