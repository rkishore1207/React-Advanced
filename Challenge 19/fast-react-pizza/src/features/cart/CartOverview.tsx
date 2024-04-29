/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemModel from "../../models/CartItem";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {

  const {cart} = useSelector((state:any)=>state.cart);

  const pizzaCount = cart.reduce((acc:number,item:CartItemModel)=>{
    const updatedValue = item.quantity + acc;
    return updatedValue;
  },0);

  const totalAmount = cart.reduce((acc:number,item:CartItemModel)=>{
    const updatedValue = item.totalPrice + acc;
    return updatedValue;
  },0);

  if(!pizzaCount) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{pizzaCount} pizzas</span>
        <span>{formatCurrency(totalAmount) }</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
