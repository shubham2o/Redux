import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Home.jsx";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <p>Contact Us</p> }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);