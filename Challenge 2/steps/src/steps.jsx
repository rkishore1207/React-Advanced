import { useState } from "react";
import './steps.css';

const Steps = () => {

    const messages = [
        "Learn React ⚛️",
        "Apply for jobs 💼",
        "Invest your new income 🤑",
    ];

    const [count,setCount] = useState(1);
    const [isShow,setIsShow] = useState(true);
    console.log(count);

    return (
        <>
            <div onClick={()=>{setIsShow(!isShow)}} className="close-button">
                { isShow ? 
                    <span> &times; </span> : <span>😊</span>
                }
            </div>
            { isShow &&
                <div className="steps-body">

                    <div className="progress-container">
                        <div className={count >= 1 ? 'active' : '' }>1</div>
                        <div className={count >= 2 ? 'active' : '' }>2</div>
                        <div className={count >= 3 ? 'active' : '' }>3</div>
                    </div>

                    <StepMessage count={count}>
                        <span>{messages[count-1]}</span>
                    </StepMessage>

                    <div className="buttons-container">
                        <Button style={count > 1} onClick={()=>setCount(c=>c-1)}>
                            <span>👈</span>&nbsp;
                            <span>Previous</span>
                        </Button>
                        <Button style={count < messages.length} onClick={()=>setCount(c=>c+1)}>
                            <span>Next</span>&nbsp;
                            <span>👉</span>
                        </Button>
                    </div>
                    
                </div>
            }
        </>
    )
}

export default Steps;

const Button = ({onClick,children,style}) => {
    return(
        <button disabled={!style} 
                className={style ? 'active' : 'button-inactive'} 
                onClick={onClick}>
            {children}
        </button>
    )
}

const StepMessage = ({count,children}) => {
    return(
        <div className="messages">
            <span>{`Step ${count} : `}</span>{children}
        </div>
    )
}
