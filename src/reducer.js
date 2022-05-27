import { GET_CATEGORIES_SUCCESS, GET_VENDORD_SUCCESS, GET_NOTABLE_SUCCESS } from './actions';

const categoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case GET_CATEGORIES_SUCCESS:
            return { ...state, categories: action.categories}
        default:
            return state;
    }
}

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
    categoriesReducer,
    vendorsReducer,
    notableReducer
}