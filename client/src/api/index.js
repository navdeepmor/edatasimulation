import axios from 'axios';

const url = 'http://localhost:8000/services';

export const fetchServices = () => axios.get(url);
export const createService = (newService) => axios.post(url, newService);
