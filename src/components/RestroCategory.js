import { useState } from "react";
import RestroAccordionInfo from "./RestroAccordionInfo";

const RestroCategory = ({ card,index }) => {
  console.log(card);

  const [isAccordionOpen,setIsAccordionOpen] = useState(index === 0 ? true : false)

  return (
    <div>
      <div onClick={()=>setIsAccordionOpen(!isAccordionOpen)} className="w-7/12 p-3 m-auto my-5 shadow-lg cursor-pointer">
        <div className="flex justify-between">
          <span className="text-xl font-bold">{card?.title} ({card?.itemCards.length})</span>
          <span>⬇️</span>
        </div>
        {
            isAccordionOpen ? <RestroAccordionInfo items={card?.itemCards}/> : <></>
        }
      </div>
      
    </div>
  );
};

export default RestroCategory;
