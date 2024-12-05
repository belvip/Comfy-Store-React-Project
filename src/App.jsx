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

import { ErrorElement } from './components';

// loaders
import { loader as landingLoader } from './pages/Landing';
import { loader as singleLoader } from './pages/SingleProduct'
import { loader as productLoader } from './pages/Products'
// actions

// Setup react router
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children:[
      {
        index:true,
        element: <Landing/>,
        errorElement: <ErrorElement />,
        loader:landingLoader,
      },
      {
        path: '/products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productLoader,
      },
      {
        path: '/products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader:singleLoader,
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