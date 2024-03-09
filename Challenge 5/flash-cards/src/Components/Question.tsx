import Card from "../Models/Card";
import "./CardsList.css";

interface QuestionProps{
    card:Card,
    onQuestionClick:(id:any)=>void
}

const Question = ({card,onQuestionClick}:QuestionProps) => {
    return (
        <div className="question-container" onClick={()=>onQuestionClick(card.id)}>
            <p>{card.question}</p>
        </div>
    );
}

export default Question;