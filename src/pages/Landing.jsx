import { FeaturedProducts, Hero } from '../components';

//const url = 'https://strapi-store-server.onrender.com/api/products?featured=true';

import { customFetch } from '../utils';
const url = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(url);
  // console.log(response);

  // to return objects product
  const products = response.data.data;
  return {products};

}


const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Landing