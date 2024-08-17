import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-zinc-500">
      <Header />
      <Outlet />
    </div>
  )
}

export default App;