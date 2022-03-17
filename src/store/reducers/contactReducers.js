import * as Actions from '../actions/actionTypes';

const initialState = {
    flash: ''
};

export function contactReducers(state = initialState, action) {
    switch (action.type) {
        case Actions.GET_MESSAGE:
            return {
                ...state,
                flash: action.payload.message
            }
        case Actions.POST_MESSAGE:
            return {
                ...state,
                flash: action.payload.message
            }
        default:
            return state;
    }
}