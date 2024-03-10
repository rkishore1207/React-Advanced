/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

interface FinishScreenProps{
    obtainedPoints:number,
    totalPoints:number,
    dispatch:(action:any)=>void
}

const FinishScreen = ({obtainedPoints,totalPoints,dispatch}:FinishScreenProps) => {

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
        <div>
            <p>{emoji} You have scored {obtainedPoints} out of {totalPoints} ({completedPercentage}%)</p>
            <button onClick={()=>dispatch({type:'start'})}>Restart a Quizz!</button>
        </div>
    );
}

export default FinishScreen;