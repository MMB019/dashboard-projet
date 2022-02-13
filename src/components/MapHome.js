
import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

const MapHome = () => {
let [viewport,setViewport]= useState({
    latitude: 14.497401,
    longitude:-14.452362,
    zoom:8,
    width: 600,
    height: 400
});



    return (
        <ReactMapGL
          
            {...viewport}
            mapboxApiAccessToken={"pk.eyJ1IjoibW1iMDE5MSIsImEiOiJja3prNzFtczkyMzlzMm5vY3R3bTUybXViIn0.Mex0PcPRQy62dwr_nS5AYA"}
            onViewportChange={(newView)=> setViewport(newView)}>
        </ReactMapGL>
    );
};

export default MapHome;