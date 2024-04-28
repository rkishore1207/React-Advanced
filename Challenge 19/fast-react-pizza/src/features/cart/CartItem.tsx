/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { formatCurrency } from "../../utils/helpers";
import { decreaseItemQuantity, deleteCart, increaseItemQuantity } from "./cartSlice";

interface CartItemProps{
  item:any
}

function CartItem({ item }:CartItemProps) {
  const { name, quantity, totalPrice, pizzaId} = item;

  const dispatch = useDispatch();

  const handleDeleteCart = () => {
    dispatch(deleteCart(pizzaId));
  }

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small" onClick={handleDeleteCart}>Delete</Button>
      </div>
      <span onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</span>
      <span onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</span>
    </li>
  );
}

export default CartItem;
