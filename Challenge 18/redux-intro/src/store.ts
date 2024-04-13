import { thunk } from "redux-thunk";
import { accountReducer } from "./Features/Accounts/AccountSlice";
import { customerReducer } from "./Features/Customers/CustomerSlice";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";


const reducer = combineReducers({
    account:accountReducer,
    customer:customerReducer
});
export const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

export type ReduxState = ReturnType< typeof reducer>;
