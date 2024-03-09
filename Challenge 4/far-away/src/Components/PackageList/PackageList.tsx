/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Item from "../../Models/Item";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../Redux/Reducer";
import { updatePackageList } from "../../Redux/Action";
import ItemComp from "../Item/Item";
import Constants from "../../Utilities/Constants";
import { FilterOption } from "../../Utilities/Enums";
import ClearModal from "../ClearModal/ClearModal";
import './PackageList.css';

const PackageList = () => {

    const packageList = useSelector((state:ReduxState) => state.packageList);
    const reduxItem = useSelector((state:ReduxState) => state.item);
    const dispatch = useDispatch(); 
    const [showingList,setShowingList] = useState<Item[]>([]);
    const [isEnable,setIsEnable] = useState<boolean>(true);
    const [defaultSelection,setDefaultSelection] = useState<number>(0);
    const [showModal,setShowModal] = useState<boolean>(false);

    useEffect(()=>{

        if(reduxItem.uid !== Constants.EMPTY_UID){
            const newList = [...packageList];
            newList.push(reduxItem);
            dispatch(updatePackageList(newList));
        }

    },[reduxItem]);

    useEffect(()=>{

        if(packageList.length > 0){
            setIsEnable(false);
            // setDefaultSelection(0);
        }
        else 
            setIsEnable(true);

        setShowingList([...packageList]);
    },[packageList]);

    const handleFilter = (option:number) => {

        setDefaultSelection(option);

        if(option === FilterOption.INPUT_ORDER){
            setShowingList([...packageList]);
        }

        else if(option === FilterOption.ALPHABETICAL){
            const sortedArray = showingList.slice().sort((a, b) => a.name.localeCompare(b.name));            
            setShowingList([...sortedArray]);
        }
        
        else{
            let left = 0;
            let right = showingList.length - 1;
            const tempArray = [...showingList];
            while (left < right) {
                if(tempArray[left].status === false)
                    left++;
                else{
                    const temp = tempArray[left];
                    tempArray[left] = tempArray[right];
                    tempArray[right] = temp;
                    right--;
                }
            }
            setShowingList([...tempArray]);
        }
    }

    const handleClear = (value:boolean) => {
        if(value){
            dispatch(updatePackageList([]));
            setDefaultSelection(0);
        }
        setShowModal(false);
    }

    return (
        <div className="packagelist-body">
            { showingList.length > 0 ?
                <div className="list-container">
                    { 
                        showingList.map((item:Item,index:number)=>{
                            return(
                                <ItemComp item = {item} key={index}/>
                                )
                            })
                    }
                </div>:<p>You Packed Everything</p>
            }
            <div className="filter-container">
                <select value={defaultSelection} onChange={(event)=>handleFilter(Number(event.target.value))}>
                    <option selected value={0}>Select...</option>
                    <option value={FilterOption.INPUT_ORDER}>By Input Order</option>
                    <option value={FilterOption.ALPHABETICAL}>By Alphabetical</option>
                    <option value={FilterOption.PACKAGE_ORDER}>Not Packed</option>
                </select>
                <button disabled={isEnable} className={`${isEnable ? 'disable' : 'enable'}`} onClick={()=>setShowModal(true)}>Clear</button>
                
                { showModal &&
                    <ClearModal onClear = {handleClear}/>
                }
            </div>
        </div>
    );
}

export default PackageList;