import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-69f6d.cloudfunctions.net/api'
    // baseURL: 'http://localhost:5001/clone-69f6d/us-central1/api'
});

export default instance;