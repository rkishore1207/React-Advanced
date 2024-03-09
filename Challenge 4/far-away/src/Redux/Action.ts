import Item from "../Models/Item"
import { ADDING_ITEM, ADDING_LIST } from "./ActionTypes"

export const updatePackageList = (packageList:Item[]) => {
    return{
        type:ADDING_LIST,
        payload:packageList
    }
}

export const updateItem = (item:Item) => {
    return{
        type:ADDING_ITEM,
        payload:item
    }
}