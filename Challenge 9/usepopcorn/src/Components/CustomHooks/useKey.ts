/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export const useKey = (key:string,func:any) => {
    useEffect(()=>{
        function callBack(e:any){
            if(e.key.toLocaleLowerCase() === key.toLocaleLowerCase()){
                func();
            }
        }
        document.addEventListener('keydown',callBack);
    },[func]);
}