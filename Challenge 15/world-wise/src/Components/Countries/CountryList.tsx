/* eslint-disable @typescript-eslint/no-explicit-any */
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import styles from './CountryList.module.css';
import CountryItem from "./CountryItem.tsx/CountryItem";
import { useCities } from "../../Contexts/CitiesContext";

const CountryList = () => {

    const {isLoading,cities} = useCities();

    if(isLoading) return <Spinner/> ;

    const countries:any = cities.reduce((arr:any,city:any)=>{
        if(!arr.map((country:any)=>country.countryName).includes(city.country)){
            return [...arr,{countryName:city.country,emoji:city.emoji}];
        }
        else return arr;
    },[]);


    if(countries.length <= 0)
        return <Message message={'No Countries Found'}/> 

    return (
        <div className={styles.countryList}>
            {countries.map((item:any,index:number)=>{
                return (<CountryItem country={item} key={index}/>)
            })}
        </div>
    );
};

export default CountryList;