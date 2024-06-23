import RestroCard from "../components/RestroCard";
import { useState, useEffect } from "react";
import ShimmerUi from "../components/ShimmerUi";
import { retroInfoApiUrl } from "../Utils/Constants";

const Body = () => {
  const [restroList, setRetroList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(retroInfoApiUrl);
    const json = await data.json();
    setRetroList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterCards = () => {
    let filteredRestro = restroList.filter((restaurant) => {
      return restaurant.info.avgRating > 4.5;
    });

    setRetroList(filteredRestro);
  };
  return (
    <>
      <button className="btn" onClick={filterCards}>
        Get Top Restaurants
      </button>
      {restroList.length === 0 ? (
        <ShimmerUi />
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

export default Body;
