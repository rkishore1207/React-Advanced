/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import './FinishScreen.css';

interface FinishScreenProps{
    obtainedPoints:number,
    totalPoints:number,
    highestScore:number,
    dispatch:(action:any)=>void,
}

const FinishScreen = ({obtainedPoints,totalPoints,highestScore,dispatch}:FinishScreenProps) => {

    const completedPercentage = Number((( obtainedPoints / totalPoints ) * 100).toFixed(2));
    const [emoji,setEmoji] = useState<string>('');

    useEffect(()=>{
        if(completedPercentage >= 90)
            setEmoji('🎖️');
        else if(completedPercentage >= 70 && completedPercentage < 90)
            setEmoji('🤩');
        else if(completedPercentage >= 40 && completedPercentage < 70 )
            setEmoji('😉');
        else
            setEmoji('🤡');
    },[]);

    return (
        <div className="finish-screen">
            <p>{emoji} You have scored <strong>{obtainedPoints}</strong> out of <strong>{totalPoints}</strong> ({completedPercentage}%)</p>
            <div className="next-btn">
                <button onClick={()=>dispatch({type:'start'})}>Restart a Quizz!</button>
            </div>
            <p>Your HighestScore is <strong>{highestScore}</strong></p>
        </div>
    );
}

export default FinishScreen;