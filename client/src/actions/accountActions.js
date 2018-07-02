import axios from 'axios';

export const homeRoute = () => {
    axios.get('/home').then(res => console.log(res));
};