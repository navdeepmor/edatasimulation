import * as api from '../api';

// action creators
export const getAllService = () => async (dispatch) => {
    try {
        const { data } = await api.fetchServices();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch(err) {
        console.log(err.message);
    }
} 

export const createService = (service) => async (dispatch) => {
    try {
        const { data } = await api.createService(service);
        dispatch({ type: 'CREATE', payload: data });
    } catch(err) {
        console.log(err);
    }
}