import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./apiSlice.js";
import App from "./App.jsx";
import Home from "./Home.jsx";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ApiProvider api={api}><App /></ApiProvider>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <p>Contact Us</p> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);