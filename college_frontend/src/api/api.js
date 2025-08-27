import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Update as needed for your backend
});

export default api;
