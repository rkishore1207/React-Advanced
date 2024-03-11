import { useEffect } from "react";

interface TimerProps{
    secondsRemaining:number,
    dispatch:(action:any)=>void
}

const Timer = ({secondsRemaining,dispatch}:TimerProps) => {

    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60 ;

    useEffect(()=>{
        const id = setInterval(function(){
            dispatch({type:'tick'});
        },1000);
        return () => clearInterval(id);
    },[dispatch]);

    return (
        <div>
            {minutes < 10 && '0'}{minutes}: 
             {seconds < 10 && '0'}{seconds}
        </div>
    );
}

export default Timer;