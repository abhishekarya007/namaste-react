import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestroCard from "./components/RestroCard";
import restroList from "./Utils/MockData";

const AppLayout = () => {
  
  return (
    <>
      <Header />
      <div className="search">Search</div>
      <div className="restro-container">
        {restroList.map((restaurant) => (
          <RestroCard key={restaurant.info.id} restroInfo = {restaurant}/>
        ))}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
