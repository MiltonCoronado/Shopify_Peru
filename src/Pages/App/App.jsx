import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Home } from '../Home/Home.jsx';
import { MyAccount } from '../MyAccount/MyAccount.jsx';
import { MyOrder } from '../MyOrder/MyOrder.jsx';
import { MyOrders } from '../MyOrders/MyOrders.jsx';
import { NotFound } from '../NotFound/NotFound.jsx';
import { SignIn } from '../SignIn/SignIn.jsx';
import { NavBar } from '../../Components/NavBar/NavBar.jsx';
import { ShoppingCartProvider } from '../../Components/Context/Context.jsx';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu/CheckoutSideMenu.jsx';

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
    
  )
};

export { App }; 
