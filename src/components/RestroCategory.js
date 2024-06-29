import { useState } from "react";
import RestroAccordionInfo from "./RestroAccordionInfo";

const RestroCategory = ({ card, showIndex, setShowIndex }) => {
  console.log(card);

  const handleOnClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div
        onClick={handleOnClick}
        className="w-7/12 p-3 m-auto my-5 shadow-lg cursor-pointer"
      >
        <div className="flex justify-between">
          <span className="text-xl font-bold">
            {card?.title} ({card?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showIndex && <RestroAccordionInfo items={card?.itemCards} />}
      </div>
    </div>
  );
};

export default RestroCategory;
