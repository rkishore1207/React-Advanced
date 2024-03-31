import { useState } from "react";

export const useUrlPosition = () => {
    const [mapPosition,setMapPosition] = useState([0,0]);
    const searchParams = new URLSearchParams(location.search);
    const latitute = Number(searchParams.get('lat')) ? Number(searchParams.get('lat')) : mapPosition[0];
    const longitude = Number(searchParams.get('lng')) ? Number(searchParams.get('lng')) : mapPosition[1];
    return {latitute,longitude,mapPosition,setMapPosition};
}