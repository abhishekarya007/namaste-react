import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestroCard from "./components/RestroCard";
import { retroInfoApiUrl } from "./Utils/Constants";
import { useState, useEffect } from "react";

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
    console.log(restroList)
    let filteredRestro = restroList.filter(restaurant => {
      return restaurant.info.avgRating > 4.5
    })

    setRetroList(filteredRestro)
  }

  return (
    <>
      <Header />
      <div onClick={filterCards} className="search">Search</div>
      <div className="restro-container">
        {restroList.map((restaurant) => (
          <RestroCard key={restaurant.info.id} restroInfo={restaurant} />
        ))}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
