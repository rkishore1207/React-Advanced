
interface StartScreenProps{
    numQuestions:number
}

const StartScreen = ({numQuestions}:StartScreenProps) => {
    return (
        <div>
            <h1>Welcome to the React Quizz!</h1>
            <h2>{numQuestions} questions to test your react mastery</h2>
            <button>Let's start</button>
        </div>
    );
}

export default StartScreen;