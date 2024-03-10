import { useEffect, useReducer } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import QuizState from "./Models/QuizState";
import StartScreen from "./StartScreen/StartScreen";
import Question from "./Question/Question";
import Progress from "./Progress/Progress";
import QuestionModel from "./Models/Question";
import FinishScreen from "./FinishScreen/FinishScreen";

const initialState : QuizState = {
  questions:[],
  status:'loading',
  index:0,
  points:0,
  answer:-1
}

const reducer = (state:QuizState,action:any) : QuizState => {
  switch(action.type){
    case 'dataReceived':
      return{
        ...state,
        questions:action.payload,
        status:'ready'
      }
    case 'dataFailed':
      return{
        ...state,
        status:'error',
        questions:[]
      }
    case 'start':
      return{
        ...state,
        status:'active',
        index:0,
        points:0
      }
    case 'selectOption':
      const question = state.questions.at(state.index) ?? {
        question: '',
        options: [],
        correctOption: 0,
        points: 0
      };
      return{
        ...state,
        answer:action.payload,
        points: (action.payload === question.correctOption ? state.points + question.points : state.points) 
      }
    case 'nextQuestion':
      return{
        ...state,
        index:state.index + 1,
        answer:action.payload
      }
    case 'finishQuestion':
      return{
        ...state,
        status:"finished"
      }
    default:
      return state;
  }
}

function App() {

  useEffect(()=>{
    fetch("http://localhost:8000/questions")
    .then((res:any)=>res.json())
    .then((data:any)=>dispatch({type:'dataReceived',payload:data}))
    .catch((err:any)=>dispatch({type:'dataFailed',payload:err.message}));
  },[]);

  const[state,dispatch] = useReducer(reducer,initialState);
  const{questions,status,index,answer,points} = state;
  const totalPoints = questions.reduce((acc:number,value:QuestionModel)=>{
    const updatedValue = acc + value.points;
    return updatedValue;
  },0);

  return (
    <div className="App">
      <Header/>
      <Main>
        {status === 'loading' && <Loader/>}
        {status === 'error' && <CustomError message={'Failed to fetch'}/>}
        {status === 'ready' && <StartScreen numQuestions={questions.length} dispatch={dispatch}/>}
        {status === 'active' && 
          <>
            <Progress index={index} totalQuestions={questions.length} currentPoints={points} totalPoints={totalPoints} answer={answer}/>
            <Question question={questions.at(index)} dispatch={dispatch}/>
            <Next dispatch={dispatch} answer={answer} index={index} totalQuestions={questions.length - 1}/>
          </>
        }
        {status === 'finished' && <FinishScreen obtainedPoints={points} totalPoints={totalPoints} dispatch={dispatch}/>}
      </Main>
    </div>
  );
}

export default App;

function Loader(){
  return(<p className='custom-error'>Loading...</p>)
}

interface CustomErrorProps{
  message:string
}

function CustomError({message}:CustomErrorProps){
  return (<div>
    <p className='custom-error'>❌ {message}</p>
  </div>)
}

interface NextProps{
  dispatch:(action:any)=>void,
  answer:number,
  index:number,
  totalQuestions:number
}

function Next({dispatch,answer,index,totalQuestions}:NextProps){
  if(answer === -1)
    return <></>;
  if(index === totalQuestions){
    return(
      <div>
        <button onClick={()=>dispatch({type:'finishQuestion'})}>Finish</button>
      </div>
    )
  }
  return(
    <div>
      <button onClick={()=>dispatch({type:'nextQuestion',payload:-1})}>Next</button>
    </div>
  )
}