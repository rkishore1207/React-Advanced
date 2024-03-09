import { useEffect, useReducer } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import QuizState from "./Models/QuizState";

const initialState : QuizState = {
  questions:[],
  status:''
}

const reducer = (state:QuizState,action:any) : QuizState => {
  switch(action.type){
    case 'dataReceived':
      return{
        ...state,
        questions:action.payload,
        status:'Active'
      }
    case 'error':
      return{
        ...state,
        status:action.payload,
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

  return (
    <div className="App">
      <Header/>
      <Main>
        <p>Question</p>
      </Main>
    </div>
  );
}

export default App;
