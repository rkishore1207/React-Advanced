import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Menu, { menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder,{action as orderAction} from "./features/order/CreateOrder";
import Order,{Loader as orderLoader} from "./features/order/Order";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";

function App() {

  const router = createBrowserRouter([
    {
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/menu',
          element:<Menu/>,
          loader:menuLoader,
          errorElement:<Error/>
        },
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path:'/order/new',
          element:<CreateOrder/>,
          action:orderAction,
        },
        {
          path:'/order/:orderID',
          element:<Order/>,
          loader: orderLoader,
          errorElement:<Error/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;