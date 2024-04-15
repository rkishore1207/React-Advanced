import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Menu, { menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./components/AppLayout";

function App() {

  const router = createBrowserRouter([
    {
      element:<AppLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/menu',
          element:<Menu/>,
          loader:menuLoader
        },
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path:'/order/new',
          element:<CreateOrder/>
        },
        {
          path:'/order/:orderID',
          element:<Order/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;