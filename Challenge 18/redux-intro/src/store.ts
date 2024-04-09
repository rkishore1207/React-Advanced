import { BankAccount } from "./Model/Models";
import { createStore } from "redux";


const initialState : BankAccount = {
    loan:0,
    balance:0,
    loanPurpose:''
}

const reducer = (state:BankAccount = initialState,action:any) : BankAccount =>{
    switch(action.type){
        case 'account/deposit':
            return{...state,balance:state.balance + action.payload};
        case 'account/withdraw':
            return{...state,balance:state.balance - action.payload};
        case 'account/loanRequest':
            if(state.loan > 0) return state;
            return{...state,
                    loan:action.payload.loan,
                    loanPurpose:action.payload.loanPurpose,
                    balance:state.balance + action.payload.loan
                  };
        case 'account/payLoan':
            return{...state,loan:0,balance:state.balance - state.loan,loanPurpose:''};
        default:
            return state;
    }
}

const store = createStore(reducer);

store.dispatch({type:'account/deposit',payload:500});
console.log(store.getState());

store.dispatch({type:'account/withdraw',payload:200});
console.log(store.getState());

store.dispatch({type:'account/loanRequest',payload:{
    loan:1000,
    loanPurpose:'Buy a Bike'
}});
console.log(store.getState());

store.dispatch({type:'account/payLoan'});
console.log(store.getState());