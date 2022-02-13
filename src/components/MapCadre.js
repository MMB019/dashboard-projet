
import React, {useState} from 'react';
import Map,{Marker} from 'react-map-gl';

const MapCadre = () => {
let [viewport,setViewport]= useState({
    latitude: 37.7577,
    longitude:-122.4376,
    zoom:5,
    width: 800,
    height: 400
});



    return (
        <Map
          
            {...viewport}
            onMove={(evt)=> setViewport(evt.viewState)}
            initialViewState={{
              latitude: 37.7577,
              longitude:-122.4376,
              zoom:5,
            }}
            mapStyle="mapbox://styles/mapbox/light-v10"
            mapboxAccessToken={"pk.eyJ1IjoibW1iMDE5MSIsImEiOiJja3prNzFtczkyMzlzMm5vY3R3bTUybXViIn0.Mex0PcPRQy62dwr_nS5AYA"}
            >
            
           <Marker latitude= {37.7577} longitude={-122.4376} color="blue"/> 
        </Map>
    );
};

export default MapCadre;