/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './Form.css';
import Item from '../../Models/Item';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../Redux/Reducer';
import { updateItem } from '../../Redux/Action';


const Form = () => {

    const [reduxItem,setReduxItem] = useState<Item>(useSelector((state:ReduxState) => state.item));
    const dispatch = useDispatch();
    const [isEnable,setIsEnable] = useState<boolean>(true);
    const [item,setItem] = useState<Item>({
        uid:crypto.randomUUID(),
        name:'',
        quantity:0,
        status:false
    });

    useEffect(()=>{
        dispatch(updateItem(reduxItem));
    },[reduxItem]);

    const handleAdd = (event:any) =>{
        // setItem({...item,uid:crypto.randomUUID()});
        event.preventDefault();
        item.uid = crypto.randomUUID();
        setReduxItem(item);
        setItem({...item,name:'',quantity:0});
    }

    useEffect(()=>{
        if(item.quantity !== 0 && item.name !== '')
            setIsEnable(false);
        else
            setIsEnable(true);
    },[item]);

    return (
        <form onSubmit={(event)=>handleAdd(event)} className="form-container">
            <p><strong>What do you need for your 🤩 trip</strong></p>
            <select className='quantities' value={item.quantity} 
                    onChange={(event)=>setItem({...item,quantity:Number(event.target.value)})}>
                <option selected value={0}>Select...</option>
                {
                    Array.from({length:20}, (_,i) => i +1).map((index:number)=>{
                        return(
                            <option value={index}>{index}</option>
                        )
                    })
                }
            </select>
            <input type="type" 
                   placeholder='item...'
                   value={item.name}
                   onChange={(event)=>setItem({...item,name:event.target.value})}/>
            <button disabled={isEnable} className={`${isEnable?'disable':'enable'}`}>&#43;</button>
        </form>
    );
}

export default Form;