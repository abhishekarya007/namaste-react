import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestroCard from "./components/RestroCard";
import { retroInfoApiUrl } from "./Utils/Constants";
import { useState, useEffect } from "react";
import ShimmerUi from "./components/ShimmerUi";

const AppLayout = () => {
  const [restroList, setRetroList] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const data = await fetch(retroInfoApiUrl)
    const json = await data.json()
    setRetroList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const filterCards = () => {
    let filteredRestro = restroList.filter((restaurant) => {
      return restaurant.info.avgRating > 4.5;
    });

    setRetroList(filteredRestro);
  };

  return (
    <>
      <Header />
      <button className="btn" onClick={filterCards}>Get Top Restaurants</button>
      {restroList.length === 0 ? (
        <ShimmerUi/>
      ) : (
        <div className="restro-container">
          {restroList.map((restaurant) => (
            <RestroCard key={restaurant.info.id} restroInfo={restaurant} />
          ))}
        </div>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
