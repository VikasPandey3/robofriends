import {SEARCH_ROBOTS_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED} from './const'

export const setSearchField=(text)=>({
    type:SEARCH_ROBOTS_FIELD,
    payload:text
})

export const requestRobot=()=>(dispatch)=>{
    dispatch({type:REQUEST_ROBOTS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:data}))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}