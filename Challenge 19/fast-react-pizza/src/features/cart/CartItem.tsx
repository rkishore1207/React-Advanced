/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatCurrency } from "../../utils/helpers";

interface CartItemProps{
  item:any
}

function CartItem({ item }:CartItemProps) {
  const { name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;