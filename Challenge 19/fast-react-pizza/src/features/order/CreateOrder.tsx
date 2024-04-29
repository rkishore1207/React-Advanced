/* eslint-disable @typescript-eslint/no-explicit-any */

// // https://uibakery.io/regex-library/phone-number
const isValidPhone = (str:string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CartItemModel from "../../models/CartItem";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../users/userSlice";


function CreateOrder() {

  const {cart} = useSelector((state:any)=>state.cart);
  const [withPriority,setWithPriority] = useState<boolean>(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const {userName,status:addressStatus,position,address} = useSelector((state:any)=>state.user);

  const isAddressStatus = addressStatus === "loading";
  const totalAmount = cart.reduce((acc:number,item:CartItemModel)=>{
    const updatedValue = item.totalPrice + acc;
    return updatedValue;
  },0);

  const priorityPrice = withPriority ? totalAmount * 0.2 : 0;
  const totalPrice = totalAmount + priorityPrice;

  const formErrors:any = useActionData();
  const dispatch = useDispatch();

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" required defaultValue={userName}/>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center relative">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
              disabled={isAddressStatus}
              defaultValue={address}
            />
          </div>
          { !position.latitude && !position.longitude &&
            <span className="absolute right-1">
              <Button type="small" onClick={(event:any)=>{
                event.preventDefault();
                dispatch(fetchAddress());
              }}>GetPosition</Button>
            </span>
          }
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={String(withPriority)}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to you give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting || isAddressStatus} type="primary">
            {isSubmitting ? 'Placing order....' : `Order now ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export const action = async ({request}:any) => {
  const result = await request.formData();
  const data = Object.fromEntries(result);
  const order:any = {
    ...data,
    cart : JSON.parse(data.cart),
    priority: data.priority === "true"
  }
  console.log(order);
  const errors:any = {};
  if(!isValidPhone(order.phone)) errors.phone = 'Please provide correct number';
  if(Object.keys(errors).length > 0) return errors;
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
