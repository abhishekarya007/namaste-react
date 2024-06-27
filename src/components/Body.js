import RestroCard from "../components/RestroCard";
import { useState, useEffect } from "react";
import ShimmerUi from "../components/ShimmerUi";
import { retroInfoApiUrl } from "../Utils/Constants";
import {Link} from "react-router-dom"

const Body = () => {
  const [restroList, setRetroList] = useState([]);
  const [renderRestroList, setRenderRestroList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(retroInfoApiUrl);
    const json = await data.json();
    setRetroList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRenderRestroList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterCards = () => {
    let filteredRestro = restroList.filter((restaurant) => {
      return restaurant.info.avgRating > 4.5;
    });

    setRenderRestroList(filteredRestro);
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(ev) => {
            setSearchText(ev.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            setSearchText(searchText.toLowerCase());
            let filteredRestro = restroList.filter((restaurant) =>
              restaurant.info.name.toLowerCase().includes(searchText)
            );
            setRenderRestroList(filteredRestro);
          }}
          className="btn"
        >
          Search
        </button>
        <button className="btn" onClick={filterCards}>
          Get Top Restaurants
        </button>
      </div>
      {renderRestroList.length === 0 ? (
        <ShimmerUi />
      ) : (
        <div className="restro-container">
          {renderRestroList.map((restaurant) => (
            <Link className="link" to={"restro/"+restaurant.info.id}><RestroCard key={restaurant.info.id} restroInfo={restaurant} /></Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
