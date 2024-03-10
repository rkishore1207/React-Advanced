import { useState } from "react";
import Question from "../Models/Question";
import './Options.css';

interface OptionsProps{
    questions:Question,
    dispatch:(action:any)=>void
}

const Options = ({questions,dispatch}:OptionsProps) => {

    const [selectedOption,setSelectedOption] = useState<number>(-1);

    return (
        <div >
            {
                questions.options.map((option:string,index:number)=>{
                    return(<button 
                        className={selectedOption !== -1 ? selectedOption === questions.correctOption && selectedOption === index ? "correct": (selectedOption !== questions.correctOption && selectedOption === index ? "wrong" : (index === questions.correctOption ? "correct":"")) : ''}
                        key={index}
                        disabled={selectedOption !== -1}
                        onClick={()=>{
                            setSelectedOption(index);
                            dispatch({type:'selectOption',payload:index});
                        }}>
                            {option}
                        </button>)
                })
            }
        </div>
    );
}

export default Options;