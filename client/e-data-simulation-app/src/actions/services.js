import * as api from '../api'

// action creators
const getServices = () => async (dispatch) {
    const action = { type: 'FETCH_ALL',  payload: [] }
    return action; 
}