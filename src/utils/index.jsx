import axios from 'axios';

const productionUrl = 'https://strapi-store-server.onrender.com/api';
const countries = 'https://restcountries.com/v3.1';

export const customFetch = axios.create({
    baseURL: productionUrl,
});

export const customFetchCountries = axios.create({
    baseURL: countries,
});

export const formatPrice = (price, conversionRate = 620) => {
    // Convert the price from dollars to FCFA
        const fcfaPrice = price * conversionRate;
    
        // Format the FCFA price
        const fcfaAmount = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF', // ISO code for Franc CFA
        }).format((fcfaPrice / 100).toFixed(2));
    
        return fcfaAmount;
};

export const generateAmountOptions = (number) => {
    return Array.from({ length: number }, (_, index) => {
      const amount = index + 1;
  
      return (
        <option key={amount} value={amount}>
          {amount}
        </option>
      );
    });
  };
  

