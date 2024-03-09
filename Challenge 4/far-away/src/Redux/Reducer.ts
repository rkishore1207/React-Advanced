import FarAway from "../Models/StateModel"
import Constants from "../Utilities/Constants"
import { ADDING_ITEM, ADDING_LIST } from "./ActionTypes"

const initialState : FarAway = {
    packageList:[],
    item:{
        uid:Constants.EMPTY_UID,
        quantity:0,
        name:'',
        status:false
    }
}

export const farAwayReducer = (state = initialState,action:any) => {
    switch(action.type){
        case ADDING_LIST:
            return{
                ...state,
                packageList:action.payload
            }
        case ADDING_ITEM:
            return{
                ...state,
                item:action.payload
            }
        default:
            return state;
    }
}

export type ReduxState = ReturnType<typeof farAwayReducer>