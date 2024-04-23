/* eslint-disable @typescript-eslint/no-explicit-any */

// // https://uibakery.io/regex-library/phone-number
const isValidPhone = (str:string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {

  const cart = fakeCart;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formError:any = useActionData();

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
            {formError?.phone && <p>{formError.phone}</p>}
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={order.priority}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" value={JSON.stringify(cart)} name="cart"/>
        </div>

        <div>
          <button disabled={isSubmitting}> { isSubmitting ? 'Placing Order' : 'Order now'} </button>
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
    priority: data.priority === "on"
  }
  console.log(order);
  const errors:any = {};
  if(!isValidPhone(order.phone)) errors.phone = 'Please provide correct number';
  if(Object.keys(errors).length > 0) return errors;
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
