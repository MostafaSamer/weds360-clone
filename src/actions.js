export const GET_IMAGES_FETCH = 'GET_IMAGES_FETCH';
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';

export const GET_CATEGORIES_FETCH = 'GET_CATEGORIES_FETCH';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';

export const GET_VENDORD_FETCH = 'GET_VENDORD_FETCH';
export const GET_VENDORD_SUCCESS = 'GET_VENDORD_SUCCESS';

export const GET_NOTABLE_FETCH = 'GET_NOTABLE_FETCH';
export const GET_NOTABLE_SUCCESS = 'GET_NOTABLE_SUCCESS';

export const getImagesFetch = () => ({
    type: GET_IMAGES_FETCH
})
export const getCategoriesFetch = () => ({
    type: GET_CATEGORIES_FETCH
})

export const getVendorsFetch = () => ({
    type: GET_VENDORD_FETCH
})

export const getNotableFetch = () => ({
    type: GET_NOTABLE_FETCH
})