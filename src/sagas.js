import { call, put, takeEvery } from 'redux-saga/effects';
import {
    GET_VENDORD_FETCH, GET_VENDORD_SUCCESS,
    GET_NOTABLE_FETCH, GET_NOTABLE_SUCCESS,
} from './actions';


// Vendors
function vendorsFetch() {
    return fetch('http://localhost:3000/vendors')
    .then(response => response.json());
}

function* workGetVendorsFetch() {
    const vendors = yield call(vendorsFetch);
    yield put({ type: GET_VENDORD_SUCCESS, vendors })
}

// Notable
function notableFetch() {
    return fetch('http://localhost:3000/newandnotable')
    .then(response => response.json());
}

function* workGetNotableFetch() {
    const notables = yield call(notableFetch);
    yield put({ type: GET_NOTABLE_SUCCESS, notables })
}

// My Saga
function* mySaga() {
    yield takeEvery(GET_VENDORD_FETCH, workGetVendorsFetch)
    yield takeEvery(GET_NOTABLE_FETCH, workGetNotableFetch)
}

export default mySaga;