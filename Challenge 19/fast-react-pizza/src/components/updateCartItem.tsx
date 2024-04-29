import { useDispatch } from "react-redux";
import Button from "./Button";
import { decreaseItemQuantity, increaseItemQuantity } from "../features/cart/cartSlice";

interface UpdateCartItemProps{
    pizzaId:number,
    quantity:number
}

function UpdateCartItem({pizzaId,quantity}:UpdateCartItemProps) {

    const dispatch = useDispatch();

    return (
        <div className="flex gap-1 md:gap-3 items-center">
            <Button type="round" onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <span>{quantity}</span>
            <Button type="round" onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    );
}

export default UpdateCartItem;