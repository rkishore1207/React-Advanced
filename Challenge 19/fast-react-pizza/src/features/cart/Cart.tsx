/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import CartItem from './CartItem';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';


function Cart() {
  const {cart} = useSelector((state:any)=>state.cart);
  const {userName} = useSelector((state:any)=>state.user);
  const dispatch = useDispatch();

  console.log(cart);

  if(cart.length <= 0) return <EmptyCart/>;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item:any,index:number) => (
          <CartItem item={item} key={index} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={()=>dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
