import { Customer } from "../../Model/Models";

const initialCustomerState : Customer  = {
    fullName:'',
    nationalID:'',
    createdAt:''
}

export const customerReducer = (state:Customer = initialCustomerState,action:any) : Customer =>{
    switch(action.type){
        case 'customer/createCustomer':
            return {...state,fullName:action.payload.fullName,nationalID:action.payload.nationalID,createdAt:action.payload.createdAt};
        case 'customer/updateName':
            return {...state,fullName:action.payload};
        default:
            return state;
    }
}

export const createCustomer = (fullName:string,nationalID:string) => {
    return {type:'customer/createCustomer',payload:{
        fullName,
        nationalID,
        createdAt:new Date().toISOString(),
    }}
}