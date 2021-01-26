export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const fetchUserUtil = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/user/${id}`
    })
);

export const fetchUser = (id) => (dispatch) => (
    fetchUserUtil(id).then(user => dispatch(receiveUser(user)))
);