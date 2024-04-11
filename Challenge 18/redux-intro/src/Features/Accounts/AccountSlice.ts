import { BankAccount } from "../../Model/Models";

const initialBankState : BankAccount = {
    loan:0,
    balance:0,
    loanPurpose:''
}

export const accountReducer = (state:BankAccount = initialBankState,action:any) : BankAccount =>{
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

export const deposit = (amount:number) => {
    return {type:'account/deposit',payload:amount}
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