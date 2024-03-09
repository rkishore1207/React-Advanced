/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useReducer, useState } from "react";
import './DateCounter.css';

interface ReducerState{
    counter:number,
    steps:number
}

const initialState : ReducerState  = {
    counter:0,
    steps:1
}

const reducer = (state:ReducerState,action:any) :ReducerState => {
    switch(action.type){
        case 'Inc':
            return {...state,counter : state.counter + state.steps};
        case 'Dec':
            return {...state,counter : state.counter - state.steps};
        case 'setCount':
            return {...state,counter : action.payload };
        case 'setSteps':
            return {...state,steps : action.payload };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const DateCounter = () => {

    const [state,dispatch] = useReducer(reducer,initialState);
    const [expectedDate,setExpectedDate] = useState(new Date());

    const {counter,steps} = state;

    useEffect(()=>{
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + counter);
        setExpectedDate(newDate);
    },[counter]);


    return (
        <div className="counter-container">
            <div className="counter-buttons-container">
                <div className="counter-buttons">
                    <input type="range" 
                           min={0} 
                           max={5} 
                           value={steps} 
                           onChange={(event)=>dispatch({type:'setSteps',payload:Number(event.target.value)})}/>
                    <span><strong>{steps}</strong></span>
                </div>
                <div className="counter-buttons">
                    <button onClick={()=>dispatch({type:'Dec'})}>-</button>
                    <input className="counter-input" 
                           type="number" 
                           value={counter === 0 ? '' : counter} 
                           onChange={(event)=>dispatch({type:'setCount',payload:Number(event.target.value)})}/>
                    <button onClick={()=>dispatch({type:'Inc'})}>+</button>
                </div>
            </div>
            <div className="counter-date">
                <p>
                    { (counter !== 0) &&
                        <span>
                            {Math.abs(counter)} days {counter > 0? 'ahead':'ago'} from 
                        </span>
                    }
                        <span>&nbsp;
                            Today is <strong>{expectedDate.toString()}</strong>
                        </span>
                </p>
            </div>
            <div>
                { counter !== 0 &&
                    <button className="reset-button" onClick={()=>{
                        dispatch({type:'reset'});
                    }}>Reset</button>
                }
            </div>
        </div>
    )
}

export default DateCounter;
