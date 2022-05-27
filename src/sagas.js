import { call, put, takeEvery } from 'redux-saga/effects';
import {
    GET_IMAGES_FETCH, GET_IMAGES_SUCCESS,
    GET_CATEGORIES_FETCH, GET_CATEGORIES_SUCCESS,
    GET_VENDORD_FETCH, GET_VENDORD_SUCCESS,
    GET_NOTABLE_FETCH, GET_NOTABLE_SUCCESS,
} from './actions';


// Images
function imagesFetch() {
    return fetch('http://localhost:3000/images')
    .then(response => response.json());
}

function* workGetImagesFetch() {
    const images = yield call(imagesFetch);
    yield put({ type: GET_IMAGES_SUCCESS, images })
}

// Categories
function categoriesFetch() {
    return fetch('http://localhost:3000/categories')
    .then(response => response.json());
}

function* workGetCategoriesFetch() {
    const categories = yield call(categoriesFetch);
    yield put({ type: GET_CATEGORIES_SUCCESS, categories })
}

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
    yield takeEvery(GET_IMAGES_FETCH, workGetImagesFetch)
    yield takeEvery(GET_CATEGORIES_FETCH, workGetCategoriesFetch)
    yield takeEvery(GET_VENDORD_FETCH, workGetVendorsFetch)
    yield takeEvery(GET_NOTABLE_FETCH, workGetNotableFetch)
}

export default mySaga;