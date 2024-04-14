import { accountReducer } from "./Features/Accounts/AccountSlice";
import { customerReducer } from "./Features/Customers/CustomerSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{
        account:accountReducer,
        customer:customerReducer,
    }
});

export default store;


// export type ReduxState = ReturnType< typeof >;
