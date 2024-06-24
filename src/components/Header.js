import { appLogoUrl } from "../Utils/Constants";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="header-container">
      <img className="img-container" src={appLogoUrl}></img>
      <ul>
        <Link className="link" to="home"><li>Home</li></Link>
        <Link className="link" to="about"><li>About Us</li></Link>
        <Link className="link" to="contact"><li>Contact Us</li></Link>
        <Link className="link" to="cart"><li>Cart</li></Link>
      </ul>
    </div>
  );
};

export default Header;
