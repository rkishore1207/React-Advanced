import { useEffect, useReducer } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import QuizState from "./Models/QuizState";
import StartScreen from "./StartScreen/StartScreen";

const initialState : QuizState = {
  questions:[],
  status:'loading'
}

const reducer = (state:QuizState,action:any) : QuizState => {
  switch(action.type){
    case 'dataReceived':
      return{
        ...state,
        questions:action.payload,
        status:'ready'
      }
    case 'error':
      return{
        ...state,
        status:'error',
        questions:[]
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
    .catch((err:any)=>dispatch({type:'error',payload:err.message}));
  },[]);

  const[state,dispatch] = useReducer(reducer,initialState);
  const{questions,status} = state;

  return (
    <div className="App">
      <Header/>
      <Main>
        {status === 'loading' && <Loader/>}
        {status === 'error' && <CustomError message={'Failed to fetch'}/>}
        {status === 'ready' && <StartScreen numQuestions={questions.length}/>}
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
