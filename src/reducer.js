import { GET_VENDORD_SUCCESS, GET_NOTABLE_SUCCESS } from './actions';

const vendorsReducer = (state = { vendors: [] }, action) => {
    switch (action.type) {
        case GET_VENDORD_SUCCESS:
            return { ...state, vendors: action.vendors}
        default:
            return state;
    }
}

const notableReducer = (state = { notables: [] }, action) => {
    switch (action.type) {
        case GET_NOTABLE_SUCCESS:
            return { ...state, notables: action.notables}
        default:
            return state;
    }
}

export default {
    vendorsReducer,
    notableReducer
}