import { useDispatch } from "react-redux";
import { deleteCart } from "../features/cart/cartSlice";
import Button from "./Button";

interface DeleteItemProps{
    pizzaId:number
}

function DeleteItem({pizzaId}:DeleteItemProps) {

    const dispatch = useDispatch();

    const handleDeleteCart = () => {
        dispatch(deleteCart(pizzaId));
    }

    return (
        <Button type="small" onClick={handleDeleteCart}>Delete</Button>
    );
}

export default DeleteItem;