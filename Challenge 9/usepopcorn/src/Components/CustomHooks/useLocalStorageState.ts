import { useEffect, useState } from "react";
import { WatchedMovie } from "../../Models/Movie";

export const useLocalStorageState : any = (initialValue:any,key:string) => {

    const [value,setValue] = useState<WatchedMovie[]>(()=>{
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[value,key]);

    return [value,setValue];
}