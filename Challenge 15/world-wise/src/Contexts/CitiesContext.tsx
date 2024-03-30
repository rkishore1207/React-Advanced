/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { useContext, useEffect, useState } from "react";

const CitiesContext = React.createContext({});

interface CitiesProviderProps{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children:any
}

export const CitiesProvider = ({children}:CitiesProviderProps) => {

    const BASE_URL = 'http://localhost:8000';
    const [cities,setCities] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [currentCity,setCurrentCity] = useState({});
    
    useEffect(()=>{
        async function fetchCities(){
        try{
            setIsLoading(true);
            const result = await fetch(`${BASE_URL}/cities`);
            const data = await result.json();
            console.log(data);
            setCities(data); 
        }catch(err){
            alert("Error");
            console.log(err);
        }finally{
            setIsLoading(false);
        }
        }
        fetchCities();
    },[]);

    const fetchCity = async (id:number) => {
        try{
            const result = await fetch(`http://localhost:8000/cities/${id}`);
            const city = await result.json();
            console.log(city);
            setCurrentCity(city);
        }
        catch(err:any){
            console.log(err.message);
        }
    }

    return (
        <CitiesContext.Provider value={{
            cities:cities,
            isLoading:isLoading,
            currentCity:currentCity,
            getCity:fetchCity
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
