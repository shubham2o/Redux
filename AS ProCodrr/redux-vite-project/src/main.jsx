import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from "./pages/Home.jsx";
import Cart from './pages/Cart.jsx';
import Wishlist from './pages/wishlist.jsx';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home />, },
      { path: '/cart', element: <Cart /> },
      { path: '/wishlist', element: <Wishlist /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);