import { useContext } from "react";
import { appLogoUrl } from "../Utils/Constants";
import {Link} from "react-router-dom"
import User from "../Utils/UserContext";


const Header = () => {

  const {name} = useContext(User)

  return (
    <div className="flex justify-between bg-blue-200">
      <img className="w-24" src={appLogoUrl}></img>
      <ul className="flex mr-4 mt-5 gap-4 text-xl">
        <Link className="link" to="home"><li>Home</li></Link>
        <Link className="link" to="about"><li>About Us</li></Link>
        <Link className="link" to="contact"><li>Contact Us</li></Link>
        <Link className="link" to="cart"><li>Cart</li></Link>
        <Link className="link" to="cart"><li>{name}</li></Link>
      </ul>
    </div>
  );
};

export default Header;
