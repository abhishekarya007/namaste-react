import { useParams } from "react-router-dom";
import useGetRestroMenu from "../Utils/useGetRestroMenu";
import RestroCategory from "./RestroCategory";
import { useState } from "react";

const RestroMenu = () => {
  const { resId } = useParams();
  const restroMenu = useGetRestroMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const restroInfo = restroMenu?.cards[2]?.card?.card?.info;
  const categories =
    restroMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (element) =>
        element.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <>
      <div className="text-center my-10">
        <div className="text-xl font-bold">{restroInfo?.name}</div>
        <div className="text-sm font-bold mt-2">
          {restroInfo?.cuisines.join(",")} - {restroInfo?.costForTwoMessage}
        </div>
        <div> ⭐️ {restroInfo?.avgRating}</div>
      </div>
      {categories?.map((category, index) => (
        <RestroCategory
          key={index}
          card={category?.card?.card}
          showIndex={index === showIndex}
          setShowIndex={() => {
            showIndex === index ? setShowIndex(null) : setShowIndex(index)
          }}
        />
      ))}
    </>
  );
};

export default RestroMenu;
