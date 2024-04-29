/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatCurrency } from "../../utils/helpers";

interface OrderItemProps{
  item:any,
  ingredients:string[]
}

function OrderItem({ item, ingredients }:OrderItemProps) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <div className="uppercase italic text-stone-500 font-semibold text-sm">
        { !ingredients ? 'Loading...' :
          ingredients.join(', ')
        }
      </div>
    </li>
  );
}

export default OrderItem;
