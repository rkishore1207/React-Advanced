import { BankAccount, Customer } from "./Model/Models";
import { combineReducers, createStore } from "redux";


const initialBankState : BankAccount = {
    loan:0,
    balance:0,
    loanPurpose:''
}

const initialCustomerState : Customer  = {
    fullName:'',
    nationalID:'',
    createdAt:''
}

const accountReducer = (state:BankAccount = initialBankState,action:any) : BankAccount =>{
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

const customerReducer = (state:Customer = initialCustomerState,action:any) : Customer =>{
    switch(action.type){
        case 'customer/createCustomer':
            return {...state,fullName:action.payload.fullName,nationalID:action.payload.nationalID,createdAt:action.payload.createdAt};
        case 'customer/updateName':
            return {...state,fullName:action.payload};
        default:
            return state;
    }
}

const reducer = combineReducers({
    account:accountReducer,
    customer:customerReducer
});
const store = createStore(reducer);

// store.dispatch({type:'account/deposit',payload:500});
// console.log(store.getState());

// store.dispatch({type:'account/withdraw',payload:200});
// console.log(store.getState());

// store.dispatch({type:'account/loanRequest',payload:{
//     loan:1000,
//     loanPurpose:'Buy a Bike'
// }});
// console.log(store.getState());

// store.dispatch({type:'account/payLoan'});
// console.log(store.getState());

const deposit = (amount:number) => {
    return {type:'account/deposit',payload:amount}
}
store.dispatch(deposit(500));
console.log(store.getState());

const withdraw = (amount:number) => {
    return {type:'account/withdraw',payload:amount}
}

store.dispatch(withdraw(200));
console.log(store.getState());

const RequestLoan = (amount:number,purpose:string) => {
    return {
             type:'account/loanRequest',payload:{
             loan:amount,
             loanPurpose:purpose
            }}
}

store.dispatch(RequestLoan(1000,'Buy a Bike'));
console.log(store.getState());

const PayLoan = () => {
    return {type:'account/payLoan'}
}

store.dispatch(PayLoan());
console.log(store.getState());

const createCustomer = (fullName:string,nationalID:string) => {
    return {type:'customer/createCustomer',payload:{
        fullName,
        nationalID,
        createdAt:new Date().toISOString(),
    }}
}

store.dispatch(createCustomer('kishore','12345'));
console.log(store.getState().customer);