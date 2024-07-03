import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../Utils/cartSlice";
import RestroCard from "./RestroCard";
import RestroAccordionInfo from "./RestroAccordionInfo";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  (items);
  const clearCarts = () => {
    dispatch(clearCart());
  };
  const deleteItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="text-center mt-10">
      <div className="font-bold text-2xl">Cart</div>
      
      <div className="flex gap-2 justify-center">
      <button
        onClick={deleteItem}
        className="border border-black px-2 bg-blue-200 rounded-lg mt-2"
      >
        Delete item
      </button>
      <button
        onClick={clearCarts}
        className="border border-black px-2 bg-blue-200 rounded-lg mt-2"
      >
        Clear Cart
      </button>
      </div>

      <div className="flex justify-center mt-10 ">
        <RestroAccordionInfo items={items} />
      </div>
    </div>
  );
};

export default Cart;
