import * as api from '../api'

// action creators
const getAllServiceInfo = () => async (dispatch) => {
    try {
        const {data} = await api.fetchAllServiceInfo();
    } catch(error) {

    }

    const action = { type: 'FETCH_ALL',  payload: [] }
    dispatch(action); 
}