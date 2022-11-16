import axios from 'axios'

const url = 'http://localhost:8000/service-info/';

export const fetchServices = () => axios.get(url);