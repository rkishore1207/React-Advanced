/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatCurrency } from "../../utils/helpers";

interface OrderItemProps{
  item:any
}

function OrderItem({ item }:OrderItemProps) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
