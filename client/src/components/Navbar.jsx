
import { Link , useLocation} from "react-router-dom";
import "../style/Navbar.css";


import ReorderIcon from "@material-ui/icons/Reorder";
import { useEffect, useState } from "react";

const Navbar = () => {
const location = useLocation();

useEffect(() => {
  setExpandNavbar(false);

},[location])
const [expandNavbar,setExpandNavbar] = useState(false);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close" }>
      <div className="toggleButton">
        <button onClick={()=> {setExpandNavbar((prev)=> !prev)}}>
      <ReorderIcon/>
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/project"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;