import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import NoMatch from "./components/NoMatch";
import MoreInfo from "./components/MoreInfo";
import { NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="navigation">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/search"}>Search</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:symbol" element={<MoreInfo />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
