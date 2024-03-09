/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import FriendModel from "../../Models/FriendModel";
import './SelectSplit.css';

interface SelectSplitProps{
    friend:FriendModel
    liftUpBalance:(id:string,balance:number) => void
}

export enum payingPerson{
    you = 1,
    friend = 2
}

const SelctSplit = ({friend,liftUpBalance}:SelectSplitProps) => {

    const [totalBill,setTotalBill] = useState<number>(0);
    const [yourExpense,setYourExpense] = useState<number>(0);
    // const friendExpense = totalBill - yourExpense || 0;
    const [friendExpense,setFriendExpense] = useState<number>(0);
    const [person,setPerson] = useState<number>(0);

    const handleSplit = () => {
        let updatedBalance = 0;
        if(person === payingPerson.you){
            updatedBalance = totalBill - yourExpense;
        }
        else{
            updatedBalance = friendExpense - totalBill;
        }
        liftUpBalance(friend.id,updatedBalance);
    }

    useEffect(()=>{
        if(yourExpense === 0)
            setFriendExpense(0);
        else
            setFriendExpense(totalBill - yourExpense);
    },[yourExpense])

    const handleYourExpense = (value:number) => {
        const updatedValue = value <= totalBill ? value : yourExpense;
        setYourExpense(updatedValue);
    }

    return (
        <div className="bill-split-container">
            <h2 className="bill-split-title">SPLIT A BILL WITH {friend.name}</h2>
            <div className="bill-split-item">
                <span className="left-bill-item"> 💸 Bill Value</span>
                <div className="right-bill-item">
                    <input type="number" 
                        value={totalBill === 0 ? '' : totalBill} 
                        placeholder="Enter a Bill"
                        onChange={(event)=>setTotalBill(Number(event.target.value))}
                        />
                </div>
            </div>
            <div className="bill-split-item">
                <span className="left-bill-item"> 🫰 Your Expense</span>
                <div className="right-bill-item">
                    <input type="number" 
                        value={yourExpense === 0 ? '' : yourExpense}
                        placeholder="Your Expense"
                        onChange={(event)=>handleYourExpense(Number(event.target.value))}
                        />
                </div>
            </div>
            <div className="bill-split-item">
                <span className="left-bill-item"> 🫂 {friend.name}'s Expense</span>
                <div className="right-bill-item">
                    <input type="number" 
                        value={friendExpense === 0 ? '' : friendExpense}
                        disabled
                        />
                </div>
            </div>
            <div className="bill-split-item">
                <span className="left-bill-item"> 🕵️‍♀️ Who is paying the bill? </span>
                <div className="right-bill-item">
                    <select value={person} onChange={(event) => setPerson(Number(event.target.value))}>
                        <option value={0}>Select...</option>
                        <option value={payingPerson.you}>You</option>
                        <option value={payingPerson.friend}>{friend.name}</option>
                    </select>
                </div>
            </div>
            <button className="split-button" onClick={handleSplit}>Split Bill</button>
        </div>
    );
}

export default SelctSplit;