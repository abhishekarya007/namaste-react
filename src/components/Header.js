import { appLogoUrl } from "../Utils/Constants";

const Header = () => {
  return (
    <div className="header-container">
      <img className="img-container" src={appLogoUrl}></img>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
