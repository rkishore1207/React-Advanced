/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useCities } from "../../Contexts/CitiesContext";
import { useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";
// import Button from "../Button/Button";

const City = () => {
  const { currentCity,getCity,isLoading } = useCities();
    const navigate = useNavigate();
  const { id } = useParams();

  const formatDate = (date: any) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

    useEffect(()=>{
        getCity(id);
    },[id]);

    if(isLoading) return <Spinner/>

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

        <Button type={'back'} onClick={()=>{
            navigate(-1);
        }}>&larr; Back</Button>
    </div>
  );
};

export default City;
