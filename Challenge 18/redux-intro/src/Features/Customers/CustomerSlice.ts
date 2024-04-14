import { createSlice } from "@reduxjs/toolkit";
import { Customer } from "../../Model/Models";

const initialCustomerState : Customer  = {
    fullName:'',
    nationalID:'',
    createdAt:''
}

const customerSlice = createSlice({
    name:'customer',
    initialState:initialCustomerState,
    reducers:{
        createCustomer:{
            prepare(fullName,nationalID):any{
                return{
                    payload:{fullName,nationalID}
                }
            },
            
            reducer(state,action){
                state.fullName = action.payload.fullName;
                state.nationalID = action.payload.nationalID;
                state.createdAt = new Date().toISOString();
            }
        },
        updateCustomer(state,action){
            state.fullName = action.payload;
        }
    }
});

export const customerReducer = customerSlice.reducer;

export const {createCustomer,updateCustomer} = customerSlice.actions;

/*
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
*/