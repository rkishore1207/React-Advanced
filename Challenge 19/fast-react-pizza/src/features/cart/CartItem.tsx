/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import CartItemModel from "../../models/CartItem";
import DeleteItem from "../../components/DeleteItem";
import UpdateCartItem from "../../components/updateCartItem";

interface CartItemProps{
  item:any
}

function CartItem({ item }:CartItemProps) {
  const { name, quantity, totalPrice, pizzaId} = item;

  const {cart} = useSelector((state:any)=>state.cart);

  const currentPizza : CartItemModel = cart.find((cart:CartItemModel)=>cart.pizzaId === pizzaId);

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateCartItem pizzaId={pizzaId} quantity={currentPizza.quantity}/>
        <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
