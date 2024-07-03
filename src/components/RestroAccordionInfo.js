import { useDispatch } from "react-redux";
import { addItems, clearCart } from "../Utils/cartSlice";

const RestroAccordionInfo = ({ items }) => {

  const dispatch = useDispatch()

  const addItemsToCard = (item) => {
      dispatch(addItems(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div className="py-5">
          <div className="flex justify-between">
            <div className="w-[550px]">
              <div className="font-bold">{item?.card?.info?.name}</div>
              <div> Rs {item?.card?.info?.price / 100}</div>
              <div className="text-sm mt-2">
                {item?.card?.info?.description}
              </div>
            </div>

            <div className="w-fit">
              <div className="absolute">
                <button onClick={()=>addItemsToCard(item)} className="ml-16 mt-32 bg-white font-bold border border-solid shadow-lg text-green-400 px-4 py-1 rounded-lg">
                  Add +
                </button>
              </div>
              <img
                className="rounded-lg w-[200px] h-[150px]"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                  item?.card?.info?.imageId
                }
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestroAccordionInfo;
