/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export function useGeoLocation() {
    const [isLoading, setIsLoading] = useState(false);
    const [position, setPosition] = useState({
      lat:0,
      lng:0
    });
    const [error, setError] = useState('');
  
    function getPosition() {
      if (!navigator.geolocation)
        return setError("Your browser does not support geolocation");
  
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          });
          setIsLoading(false);
        },
        (error) => {
          setError(error.message);
          setIsLoading(false);
        }
      );
    }
  
    return { isLoading, position, error, getPosition };
  }