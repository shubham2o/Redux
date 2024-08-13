import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Products from "./components/Products";

const App = () => {
  const isActiveStyle = (event) => event.isActive ? { color: "#a3e635" } : null;

  return (
    <div className="max-w-screen-xl h-full mx-auto p-3 bg-zinc-700">
      <nav className="w-96 mx-auto mb-2 py-2.5 text-xl font-semibold flex justify-around items-center">
        <NavLink to="/" style={isActiveStyle}>Home</NavLink>
        <NavLink to="/users" style={isActiveStyle}>Users</NavLink>
        <NavLink to="/products" style={isActiveStyle}>Products</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App;