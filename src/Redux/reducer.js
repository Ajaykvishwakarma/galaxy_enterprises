import { AUTH, LOADING, FETCH_DATA,  DELETE_DATA, PERTICULAR_DATA } from './actionTypes';

const initialState = {
    loading : true,
    auth : false,
    dataObj : [],
    PertiData : [],
   
}

export const reducer = ( state = initialState, { type, payload}) => {
    switch(type) {
        case FETCH_DATA:
            return { ...state, dataObj : payload}
        case PERTICULAR_DATA:
            return { ...state, PertiData : payload}
        case AUTH:
            return{ ...state, auth : payload}
        case LOADING:
            return { ...state, loading : payload}
        default:
            return state
    }
}