const accReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CREATEACCOUNT':
            let newUserObj = {};
            newUserObj[action.payload.userId] = action.payload;
            state = Object.assign({}, state, newUserObj);
            return state;
        default:
            return state;
    }
}

export default accReducer;