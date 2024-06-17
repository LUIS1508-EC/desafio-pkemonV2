import { NavLink } from "react-router-dom"
import './Nevbar.css'

const Navbar = () => {
  return (
    <nav className="bg-light d-flex justify-content-between p-4">
        <span> PokeWeb </span>
        <div className="d-flex gap-3">
              <NavLink className={({ isActive }) => isActive ? "custom" : ""} to={"/"}>Home</NavLink>
              <NavLink className={({ isActive }) => isActive ? "custom" : ""} to={"/pokemones"}>Pokemones</NavLink>
        </div>
    </nav>
  );
}

export default Navbar
