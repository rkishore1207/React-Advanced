/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useUrlPosition } from '../../Hooks/useUrlPosition';
import Spinner from '../Spinner/Spinner';
import Message from '../Message/Message';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from '../../Contexts/CitiesContext';


const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export function convertToEmoji(countryCode:any) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char:any) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const Form = () => {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji,setEmoji] = useState('');
  const [error,setError] = useState('');
  const [isLoading,setIsLoading] = useState(false);

  const {latitute,longitude} = useUrlPosition();
  const {addCity,isLoading:createLoading} = useCities();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!latitute && !longitude)
        return;
    const fetchCityData = async () => {
      try{
        setIsLoading(true);
        setError('');
        const res = await fetch(`${BASE_URL}?latitude=${latitute}&longitude=${longitude}`);
        const data = await res.json();
        console.log(data);
        setCityName(data.locality || data.city || '');
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
        if(!data.countryCode) throw new Error('Seems there is no city is present, please click somewhere else 😊')
      }catch(err:any){
        setError(err.message);
      }finally{
        setIsLoading(false);
      }
    }
    fetchCityData();
  },[latitute,longitude]);

  const handleSubmit = (event:any) => {
    event.preventDefault();
    const newCity = {
      cityName,
      country,
      date,
      emoji,
      notes,
      position:{lat:latitute,lng:longitude}
    }
    addCity(newCity);
    navigate('/app');
  }

  if(isLoading) return <Spinner/>
  if(error) return <Message message={error}/>
  if(!longitude && !latitute) return <Message message='Click on the Map to start track'/>

  return (
    <form className={`${styles.form}${createLoading ? styles.loading : ''}`} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker selected={date} onChange={(date:any) => setDate(date)} dateFormat='dd/MM/yyyy'/>
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type={'primary'} onClick={handleSubmit}>Add</Button>
        <Button type={'back'} onClick={(event:any)=>{
            event.preventDefault();
            navigate(-1);
        }}>&larr; Back</Button>
      </div>
    </form>
  )
}

export default Form;