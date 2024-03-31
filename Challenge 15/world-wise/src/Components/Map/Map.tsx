/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useNavigate } from 'react-router-dom';
import styles from './Map.module.css';
import {MapContainer,TileLayer,Popup,Marker, useMap, useMapEvents} from 'react-leaflet';
import { useCities } from '../../Contexts/CitiesContext';
import { useNavigate } from 'react-router-dom';
import { useGeoLocation } from '../../Hooks/useGeoLocation';
import Button from '../Button/Button';
import { useEffect } from 'react';
import { useUrlPosition } from '../../Hooks/useUrlPosition';

const Map = () => {
    const {cities} = useCities();
    const {mapPosition,setMapPosition,latitute,longitude} = useUrlPosition();
    const {isLoading:geoLoading,position:geoPosition,getPosition} = useGeoLocation();
    
    // const location = useLocation();
    // const navigate = useNavigate();
    // const changePosition = () => {
    //     searchParams.set("lat",'20');
    //     searchParams.set("lng",'30');
    //     navigate({search:searchParams.toString()});
    // }
    useEffect(()=>{
      setMapPosition([latitute,longitude]);
    },[latitute,longitude]);

    useEffect(()=>{
      setMapPosition([geoPosition.lat,geoPosition.lng]);
    },[geoPosition]);

    return (
      <div className={styles.mapContainer}>
        {
          geoPosition.lat == 0 && <Button type='position' onClick={getPosition}>
            {!geoLoading ? 'Use Your Position' : 'Loading...'}
          </Button>
        }
        <MapContainer
          center={mapPosition}
          zoom={10}
          scrollWheelZoom={true}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          { cities.map((city:any,index:number)=>{ return(
                <Marker position={[city.position.lat,city.position.lng]} key={index}>
                    <Popup>
                        <span>{city.emoji}</span><span>{city.cityName}</span>
                    </Popup>
              </Marker>
          )})}
          <ChangePosition position={mapPosition}/>
          <DetectClick/>
        </MapContainer>
      </div>
    );
};

interface ChangePositionProps{
    position:any
}

const ChangePosition = ({position}:ChangePositionProps) => {
    const map = useMap();
    map.setView(position);
    return null;
}

const DetectClick = () => {
    const navigate = useNavigate();
    useMapEvents({
        click:(event:any) => navigate(`form?lat=${event.latlng.lat}&lng=${event.latlng.lng}`)
    });
    return null;
}

export default Map;