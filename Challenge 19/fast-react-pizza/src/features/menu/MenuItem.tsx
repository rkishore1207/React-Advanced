/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import CartItemModel from '../../models/CartItem';
import {formatCurrency} from '../../utils/helpers';
import { addCart } from '../cart/cartSlice';
import DeleteItem from '../../components/DeleteItem';
import UpdateCartItem from '../../components/updateCartItem';

interface MenuItemProps{
  pizza:any
}

function MenuItem({ pizza }:MenuItemProps) {
  const { name, unitPrice, ingredients, soldOut, imageUrl,id } = pizza;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const pizza : CartItemModel = {
      pizzaId:id,
      name,
      quantity:1,
      unitPrice,
      totalPrice:unitPrice
    }
    dispatch(addCart(pizza));
    console.log("add to cart");
  }

  const {cart} = useSelector((state:any)=>state.cart);

  const isPresentCart = cart.some((item:CartItemModel)=>item.pizzaId === id);
  const currentPizza : CartItemModel = cart.find((cart:CartItemModel)=>cart.pizzaId === id);

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {
            isPresentCart ? <>
              <UpdateCartItem pizzaId={id} quantity={currentPizza.quantity}/>
              <DeleteItem pizzaId={id}/>
            </>
             : !soldOut ? 
            <Button type="small" onClick={handleAddToCart}>Add to cart</Button> :
            ''
          }
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
