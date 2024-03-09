/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import './dateCounter.css';

const DateCounter = () => {

    const [steps,setSteps] = useState(1);
    const [counter,setCounter] = useState(0);
    const [expectedDate,setExpectedDate] = useState(new Date());

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
                           onChange={(event)=>setSteps(Number(event.target.value))}/>
                    <span><strong>{steps}</strong></span>
                </div>
                <div className="counter-buttons">
                    <button onClick={()=>setCounter(c=>c-steps)}>-</button>
                    <input className="counter-input" 
                           type="number" 
                           value={counter === 0 ? '' : counter} 
                           onChange={(event)=>setCounter(Number(event.target.value))}/>
                    <button onClick={()=>setCounter(c=>c+steps)}>+</button>
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
                        setCounter(0);
                        setSteps(1);
                    }}>Reset</button>
                }
            </div>
        </div>
    )
}

export default DateCounter;
