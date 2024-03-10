
interface ProgressProps{
    index:number,
    totalQuestions:number,
    currentPoints:number,
    totalPoints:number,
    answer:number
}

const Progress = ({index,totalPoints,totalQuestions,currentPoints,answer}:ProgressProps) => {
    return (
        <div>
            <progress max={totalQuestions} value={index + Number(answer !== -1)}></progress>
            <p>Questions {index + 1}/{totalQuestions}</p>
            <p>Points {currentPoints}/{totalPoints}</p>
        </div>
    );
}

export default Progress;