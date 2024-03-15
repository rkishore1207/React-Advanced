
import './StartScreen.css';

interface StartScreenProps{
    numQuestions:number,
    dispatch:(action:any) => void
}

const StartScreen = ({numQuestions,dispatch}:StartScreenProps) => {
    return (
        <div className="start-screen">
            <h1>Welcome to the React Quizz!</h1>
            <h2>{numQuestions} questions to test your react mastery</h2>
            <div className="next-btn">
                <button onClick={()=>dispatch({type:'start'})}>Let's start</button>
            </div>
        </div>
    );
}

export default StartScreen;