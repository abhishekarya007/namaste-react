import React from "react";
import ReactDOM from "react-dom";

const RestroCard = () => {
  return (
    <div className="restro-card">
      <img
        className="restro-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/5/17/d631b9cf-86f2-44af-9346-f9d784da49fa_1f2dd979-e264-42c8-bb8b-c0f23c2e4dca.jpg"
      ></img>
      <div>Biryani By Bihari's</div>
      <div>North Indian</div>
      <div>Bihar</div>
      <div>30 min</div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header-container">
      <img
        className="img-container"
        src="https://imgs.search.brave.com/6CXLcDnPDQdpAXmbafinYC0bCZfO2akucSs440WfmfE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wZW5q/aS5jby93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wOC80LmRl/bGl2ZXJ5LWhlcm8t/bG9nby5qcGc"
      ></img>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="search">Search</div>
      <div className="restro-container">
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
