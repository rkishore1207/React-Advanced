import Card from "../Models/Card";
import "./CardsList.css";

interface AnswerProps{
    card:Card,
    onAnswerClick:() => void
}

const Answer = ({card,onAnswerClick}:AnswerProps) => {
    return (
        <div className="answer-container" onClick={onAnswerClick}>
            <p>{card.answer}</p>
        </div>
    );
}

export default Answer;