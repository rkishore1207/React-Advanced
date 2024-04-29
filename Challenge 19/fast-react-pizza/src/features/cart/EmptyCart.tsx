import LinkButton from '../../components/LinkButton';

function EmptyCart() {
  return (
    <div className='p-4'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className='mt-2 font-semibold'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
