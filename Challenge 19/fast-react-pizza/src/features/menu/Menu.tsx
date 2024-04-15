/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { Pizza } from "../../models/Pizza";

function Menu() {

  const menu : any = useLoaderData();
  console.log(menu);

  return (
    <div>
      {
        menu.map((item:Pizza,index:number)=>{
          return (
            <MenuItem key={index} pizza={item}/>
          )
        })
      }
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const menuLoader = async () => {
  const result = await getMenu();
  return result;
}

export default Menu;
