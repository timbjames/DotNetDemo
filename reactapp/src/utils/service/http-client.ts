import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:55000',
  headers: {
    'Content-type': "application/json",
    //'x-api-key': process.env.REACT_APP_API_KEY
  }
});