import { createSlice } from "@reduxjs/toolkit";
import { BankAccount } from "../../Model/Models";

const initialBankState : BankAccount = {
    loan:0,
    balance:0,
    loanPurpose:'',
    isLoading:false
}

const accountSlice = createSlice({
    name:'account',
    initialState:initialBankState,
    reducers:{
        deposit(state,action){
            state.balance += action.payload;
            state.isLoading = false;
        },
        withdraw(state,action){
            state.balance -= action.payload;
        },
        requestLoan : {
            prepare(loanAmount,loanPurpose):any{
                return {
                    payload:{loanAmount,loanPurpose}
                }
            },
            reducer(state,action){
                state.balance += action.payload.loanAmount;
                state.loanPurpose = action.payload.loanPurpose;
            }
        },
        payLoan(state){
            state.balance -= state.loan;
            state.loan = 0;
            state.loanPurpose = '';
        },
        convertingCurrency(state){
            state.isLoading = true;
        }
    }
});

export const accountReducer =  accountSlice.reducer;
export const {withdraw,requestLoan,payLoan} = accountSlice.actions;

export const deposit = (amount:number,currency:string) :any => {
    if(currency === 'USD')
        return {type:'account/deposit',payload:amount};
    else{
        return async function (dispatch:any,getState:any){
            dispatch({type:'account/convertingCurrency'});
            const result = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`);
            const data = await result.json();
            const converted = data.rates.USD;
            dispatch({type:'account/deposit',payload:converted});
        } 
    }
}

/*
export const accountReducer = (state:BankAccount = initialBankState,action:any) : BankAccount =>{
    switch(action.type){
        case 'account/deposit':
            return{...state,balance:state.balance + action.payload,isLoading:false};
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
        case 'account/convertingCurrency':
            return{...state,isLoading:true};
        default:
            return state;
    }
}

export const deposit = (amount:number,currency:string) :any => {
    if(currency === 'USD')
        return {type:'account/deposit',payload:amount};
    else{
        return async function (dispatch:any,getState:any){
            dispatch({type:'account/convertingCurrency'});
            const result = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`);
            const data = await result.json();
            const converted = data.rates.USD;
            dispatch({type:'account/deposit',payload:converted});
        } 
    }
}

export const withdraw = (amount:number) => {
    return {type:'account/withdraw',payload:amount}
}

export const RequestLoan = (amount:number,purpose:string) => {
    return {
             type:'account/loanRequest',payload:{
             loan:amount,
             loanPurpose:purpose
            }}
}

export const PayLoan = () => {
    return {type:'account/payLoan'}
}
*/