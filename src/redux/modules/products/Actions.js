import axios from 'axios';

import {
    FETCH_PRODUCTS,
    PRODUCTS_API
} from './ActionTypes';

const fetchProducts = (category, sort, perPage, currentPage, callback) => dispatch => {
    return axios
        .get(PRODUCTS_API + '?category=' + category + '&sort=' + sort + '&per_page=' + perPage + '&page=' + currentPage)
        .then(response => {
            if (!!callback) {
                callback();
            }

            return dispatch({
                type: FETCH_PRODUCTS,
                payload: response
            });
        })
        .catch(error => {
            throw(error);
        });
};

export {
    fetchProducts
}