/* eslint-disable react-hooks/exhaustive-deps */
import Item from "../../Models/Item";
import './Item.css';
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../Redux/Reducer";
import { updatePackageList } from "../../Redux/Action";

interface ItemProps{
    item:Item
}

const ItemComp = ({item}:ItemProps) => {

    const packageList = useSelector((state:ReduxState) => state.packageList);

    const dispatch = useDispatch();

    const handleUpdate = (uid:string) => {
        console.log(uid);
        
        const updatedPackageList = packageList.map((listItem:Item)=>{
            return(listItem.uid === uid ? {...listItem,status:(!listItem.status)} : listItem);
        });
        dispatch(updatePackageList(updatedPackageList));
        
    }

    const handleDelete = (uid:string) => {
        
        const deletedPackageList = packageList.filter((listItem:Item) =>(listItem.uid !== uid));
        dispatch(updatePackageList(deletedPackageList));
    }

    return (
        <div className="item-container">
            <input checked={item.status === true} onChange={()=>handleUpdate(item.uid)} 
                   className="item-checkbox" 
                   type="checkbox"/>
            <span className={`${item.status === true ? 'item-checked':''} item-name`}>{item.quantity}</span>
            <span className={`${item.status === true ? 'item-checked':''} item-name`}>{item.name}</span>
            <span onClick={()=>handleDelete(item.uid)} className="item-cancel">&times;</span>
        </div>
    );
}

export default ItemComp;