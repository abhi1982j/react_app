import * as types from '../types';
const userList = (state = false, action) => {
    switch (action.type) {
        case types.REQUEST_SUCCESS:
            return Object.assign({}, state);
        default:
            return state;
    }
};

export default userList;