import { accountReducer } from "./Features/Accounts/AccountSlice";
import { customerReducer } from "./Features/Customers/CustomerSlice";
import { combineReducers, createStore } from "redux";


const reducer = combineReducers({
    account:accountReducer,
    customer:customerReducer
});
export const store = createStore(reducer);
