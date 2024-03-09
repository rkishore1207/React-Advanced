
interface StartScreenProps{
    numQuestions:number,
    dispatch:(action:any) => void
}

const StartScreen = ({numQuestions,dispatch}:StartScreenProps) => {
    return (
        <div>
            <h1>Welcome to the React Quizz!</h1>
            <h2>{numQuestions} questions to test your react mastery</h2>
            <button onClick={()=>dispatch({type:'start'})}>Let's start</button>
        </div>
    );
}

export default StartScreen;