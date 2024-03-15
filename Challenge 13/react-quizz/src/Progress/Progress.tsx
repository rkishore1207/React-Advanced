
import './Progress.css';

interface ProgressProps{
    index:number,
    totalQuestions:number,
    currentPoints:number,
    totalPoints:number,
    answer:number
}

const Progress = ({index,totalPoints,totalQuestions,currentPoints,answer}:ProgressProps) => {
    return (
        <div className='progress-container'>
            <progress max={totalQuestions} value={index + Number(answer !== -1)}></progress>
            <div className='questions-points'>
                <p>Questions {index + 1}/{totalQuestions}</p>
                <p>Points {currentPoints}/{totalPoints}</p>
            </div>
        </div>
    );
}

export default Progress;