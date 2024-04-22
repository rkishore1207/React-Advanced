/* eslint-disable @typescript-eslint/no-explicit-any */

// // https://uibakery.io/regex-library/phone-number
// // const isValidPhone = (str) =>
// //   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
// //     str
// //   );

import { useState } from "react";
import { Form } from "react-router-dom";

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

interface OrderModel{
  fullName:string,
  phoneNumber:string,
  address:string,
  priority:boolean,
  cart:any
}

function CreateOrder() {
  const cart = fakeCart;
  const [order,setOrder] = useState<OrderModel>({
    fullName:"",
    phoneNumber:"",
    address:"",
    priority:false,
    cart:JSON.stringify(cart)
  })

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required onChange={(event)=>setOrder({...order,fullName:event?.target.value})}/>
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required onChange={(event)=>setOrder({...order,phoneNumber:event?.target.value})}/>
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required onChange={(event)=>setOrder({...order,address:event?.target.value})}/>
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            onChange={(event)=>setOrder({...order,priority:event?.target.checked})}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        {/* <input type="button" name="button" value={"Button"}  onClick={()=>setOrder({...order,cart:cart})}/> */}

        <div>
          <button>Order now</button>
        </div>
      </Form>
    </div>
  );
}

export const action = async ({request}:any) => {
  const result = await request.formData();
  const data = Object.fromEntries(result);
  console.log(JSON.parse(data.cart));
  return null;
}

export default CreateOrder;
