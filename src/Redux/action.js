import { AUTH, LOADING,FETCH_DATA,  DELETE_DATA, PERTICULAR_DATA  } from './actionTypes';


export const setAuth = (payload) => ({type: AUTH, payload })
export const setLoading = (payload) => ({ type: LOADING, payload})
export const setData = (payload) => ({ type: FETCH_DATA, payload})
export const setPrticularData = (payload) => ({ type: PERTICULAR_DATA, payload})

export const fetchData = (url) => async (dispatch) => {

    const token = JSON.parse(localStorage.getItem('token'))
    dispatch(setLoading(true))
    const a = await fetch(url, {
        method : "GET",
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    const res = await a.json()
    const data = res;
    dispatch(setLoading(false))
    dispatch(setData(data))

}

export const deleteData = (url) => async (dispatch) => {

    const token = JSON.parse(localStorage.getItem('token'))
    dispatch(setLoading(true))
    const a = await fetch(url, {
        method : "DELETE",
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    const b = await fetch("https://galaxyenterprises.herokuapp.com/contacts", {
        method : "GET",
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    const res = await b.json()
    const data = res;
    dispatch(setLoading(false))
    dispatch(setData(data))

}

export const perticularData = (url) => async (dispatch) => {

    const token = JSON.parse(localStorage.getItem('token'))
    dispatch(setLoading(true))
    const a = await fetch(url, {
        method : "GET",
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    const res = await a.json()
    const data = res;
    dispatch(setLoading(false))
    dispatch(setPrticularData(data))

}