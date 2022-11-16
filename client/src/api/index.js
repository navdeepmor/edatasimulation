import axios from 'axios'

const url = 'http://localhost:8000/service-info/';

export const fetchAllServiceInfo = () => axios.get(url);