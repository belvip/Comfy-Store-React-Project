import axios from 'axios';

const productionUrl = 'https://strapi-store-server.onrender.com/api';
const countries = 'https://restcountries.com/v3.1';

export const customFetch = axios.create({
    baseURL: productionUrl,
});

export const customFetchCountries = axios.create({
    baseURL: countries,
});
