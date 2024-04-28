/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import CartItemModel from "../../models/CartItem";

const initialState: any = {
    cart:[],
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addCart(state,action){
            state.cart.push(action.payload);
        },
        deleteCart(state,action){
            state.cart = state.cart.filter((item:CartItemModel)=>item.pizzaId !== action.payload);
        },
        increaseItemQuantity(state,action){
            const item : CartItemModel = state.cart.find((cart:CartItemModel)=>cart.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity(state,action){
            const item : CartItemModel = state.cart.find((cart:CartItemModel)=>cart.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        clearCart(state){
            state.cart = [];
        }
    }
});

export const {addCart,deleteCart,increaseItemQuantity,decreaseItemQuantity,clearCart} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;