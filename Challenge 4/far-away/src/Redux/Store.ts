import { farAwayReducer } from "./Reducer";
import { legacy_createStore as createStore } from "redux";


export const store = createStore(farAwayReducer);