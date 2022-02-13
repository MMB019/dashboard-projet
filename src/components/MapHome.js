
import React, {useState} from 'react';
import Map from 'react-map-gl';

const MapHome = () => {
let [viewport,setViewport]= useState({
    latitude: 37.7577,
    longitude:-122.4376,
    zoom:5,
    width: 800,
    height: 600
});



    return (
        <Map
          
            {...viewport}
            mapStyle="mapbox://styles/mapbox/light-v10"
            mapboxAccessToken={"pk.eyJ1IjoibW1iMDE5MSIsImEiOiJja3prNzFtczkyMzlzMm5vY3R3bTUybXViIn0.Mex0PcPRQy62dwr_nS5AYA"}
            onViewportChange={(newView)=> setViewport(newView)}>
        </Map>
    );
};

export default MapHome;