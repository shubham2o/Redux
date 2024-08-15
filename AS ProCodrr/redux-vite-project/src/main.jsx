import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/index.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Cart from './pages/Cart.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home />, },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);