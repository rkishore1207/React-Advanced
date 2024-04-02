/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { useContext, useEffect, useReducer } from "react";

const CitiesContext = React.createContext({});

interface ContextState{
    cities:any,
    isLoading:boolean,
    currentCity:any
}

interface CitiesProviderProps{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children:any
}

const initialState:ContextState = {
    cities:[],
    isLoading:false,
    currentCity:{}
}

const reducer = (state:ContextState,action:any) : ContextState => {
    switch(action.type){
        case 'setLoading':
            return{...state,isLoading:true,currentCity:{}}
        case 'unSetLoading':
            return{...state,isLoading:false}
        case 'cities/loaded':
            return{...state,cities:action.payload}
        case 'city/get':
            return{...state,currentCity:action.payload}
        case 'city/create':
            return{...state,cities:[...state.cities,action.payload],currentCity:action.payload}
        case 'city/delete':
            return{...state,cities:state.cities.filter((city:any)=>city.id !== action.payload),currentCity:{}}
        default:
            return state;
    }
}

export const CitiesProvider = ({children}:CitiesProviderProps) => {

    const BASE_URL = 'http://localhost:8000';
    const [state,dispatch] = useReducer(reducer,initialState);
    const {cities,isLoading,currentCity} = state;
    
    useEffect(()=>{
        async function fetchCities(){
        try{
            dispatch({type:'setLoading'});
            const result = await fetch(`${BASE_URL}/cities`);
            const data = await result.json();
            dispatch({type:'cities/loaded',payload:data});
        }catch(err){
            alert("Error");
            console.log(err);
        }finally{
            dispatch({type:'unSetLoading'});
        }
        }
        fetchCities();
    },[]);

    const fetchCity = async (id:number) => {
        try{
            const result = await fetch(`http://localhost:8000/cities/${id}`);
            const city = await result.json();
            dispatch({type:'city/get',payload:city});
        }
        catch(err:any){
            console.log(err.message);
        }
    }

    const createCity = async (newCity:any) => {
        try{
            dispatch({type:'setLoading'});
            const result = await fetch(`${BASE_URL}/cities`,{
                method:'POST',
                body:JSON.stringify(newCity),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            const city = await result.json();
            dispatch({type:'city/create',payload:city});
        }
        catch(err:any){
            console.log(err.message);
        }
        finally{
            dispatch({type:'unSetLoading'});
        }
    }

    const deleteCity = async (id:number) => {
        try{
            dispatch({type:'setLoading'});
            await fetch(`${BASE_URL}/cities/${id}`,{
                method:'DELETE'
            });
            dispatch({type:'city/delete',payload:id});
        }
        catch(err:any){
            console.log(err.message);
        }
        finally{
            dispatch({type:'unSetLoading'});
        }
    }

    return (
        <CitiesContext.Provider value={{
            cities:cities,
            isLoading:isLoading,
            currentCity:currentCity,
            getCity:fetchCity,
            addCity:createCity,
            deleteCity:deleteCity
        }}>
            {children}
        </CitiesContext.Provider>
    )
}

export const useCities = () : any => {
    const content = useContext(CitiesContext);
    if(content === undefined) throw new Error("Should not use Cities Context outside of its respected components");
    return content;
}
