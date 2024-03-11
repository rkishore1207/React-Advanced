import { useReducer } from 'react';
import BankState from './Models/BankState';

const reducer = (state:BankState,action:any) : BankState => {
  switch(action.type){
    case 'deposit':
      return{
        ...state,
        balance:state.balance + action.payload
      }
    case 'withdraw':
      if(state.balance < action.payload){
        alert("Low Balance");
        return state;
      }

      return{
        ...state,
        balance:state.balance - action.payload
      }
    case 'openAccount':
      return{
        ...state,
        isActive:true
      }
    case 'requestLoan':

      if(state.loan !== 0)
        return state;

      return{
        ...state,
        loan:action.payload,
        balance:state.balance + action.payload
      }
    case 'payLoan': 
      if(state.loan === 0)
        return state;
      return{
        ...state,
        loan:state.loan - action.payload,
        balance:state.balance - action.payload
      }
    case 'closeAccount':
      if(state.balance !== 0){
        alert("You cannot close the account while you have balance");
        return state;
      }
      return{
        ...state,
        isActive:false
      }
    default:
      return state;
  }
}

const initialState : BankState = {
    balance:0,
    loan:0,
    isActive:false
}

function App() {

  const [state,dispatch] = useReducer(reducer,initialState);
  const {balance,loan,isActive} = state;

  return (
    <div className="App">
      <button>Balance {balance}</button>
      <button>Loan {loan}</button>
      <button onClick={()=>dispatch({type:'openAccount'})} disabled={isActive}>Open Account</button>
      <button onClick={()=>dispatch({type:'deposit',payload:100})} disabled={!isActive}>Deposit 100</button>
      <button onClick={()=>dispatch({type:'withdraw',payload:50})} disabled={!isActive}>Withdraw 50</button>
      <button onClick={()=>dispatch({type:'requestLoan',payload:1000})} disabled={loan !== 0 ||!isActive} >Request Loan 1000</button>
      <button onClick={()=>dispatch({type:'payLoan',payload:1000})} disabled={loan === 0 || !isActive} >Pay Loan 1000</button>
      <button onClick={()=>dispatch({type:'closeAccount'})} disabled={ balance !== 0 || !isActive}>Close Account</button>
    </div>
  );
}

export default App;
