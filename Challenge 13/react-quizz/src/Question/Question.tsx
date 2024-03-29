import Options from "../Options/Options";
import './Question.css';

interface QuestionProps{
    question:any,
    dispatch:(action:any)=>void
}

const Question = ({question,dispatch}:QuestionProps) => {
    console.log(question);
    
    return (
        <div className="questions-option-container">
            <h2>{question.question}</h2>
            <Options key={question.question} questions={question} dispatch={dispatch}/>
        </div>
    );
}

export default Question;