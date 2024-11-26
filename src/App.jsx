import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { 
  About, 
  Cart, 
  Checkout, 
  Error, 
  Landing, 
  Login, 
  Orders, 
  Products, 
  Register,
  HomeLayout, 
  SingleProduct 
} from './pages';

// Setup react router
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children:[
      {
        index:true,
        element: <Landing/>
      },
      {
        path: '/product',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <SingleProduct />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
  
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;