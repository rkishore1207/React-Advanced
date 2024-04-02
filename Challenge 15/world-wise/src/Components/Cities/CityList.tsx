/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCities } from "../../Contexts/CitiesContext";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import CityItem from "./CityItem/CityItem";
import styles from './CityList.module.css';

const CityList = () => {
    const {isLoading,cities} = useCities();

    if(isLoading) return <Spinner/> ;

    if(cities.length <= 0)
        return <Message message={'No Cities Found'}/> 

    return (
        <div className={styles.cityList}>
            {cities.map((item:any,index:number)=>{
                return (<CityItem city={item} key={index}/>)
            })}
        </div>
    );
};

export default CityList;