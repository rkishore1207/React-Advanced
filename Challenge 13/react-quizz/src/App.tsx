import { useEffect, useReducer } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import QuizState from "./Models/QuizState";
import StartScreen from "./StartScreen/StartScreen";
import Question from "./Question/Question";

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
        status:'active'
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
  const{questions,status,index,answer} = state;

  return (
    <div className="App">
      <Header/>
      <Main>
        {status === 'loading' && <Loader/>}
        {status === 'error' && <CustomError message={'Failed to fetch'}/>}
        {status === 'ready' && <StartScreen numQuestions={questions.length} dispatch={dispatch}/>}
        {status === 'active' && <Question question={questions.at(index)} dispatch={dispatch}/>}
        {<Next dispatch={dispatch} answer={answer}/>}
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
  answer:number
}

function Next({dispatch,answer}:NextProps){
  if(answer === -1)
    return <></>;
  return(
    <div>
      <button onClick={()=>dispatch({type:'nextQuestion',payload:-1})}>Next</button>
    </div>
  )
}