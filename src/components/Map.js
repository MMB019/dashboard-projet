import React from 'react';

const Map = () => {

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoibW1iMDE5MSIsImEiOiJja3poNm9ocTcwMWRpMm9wM2R0dW1lemxjIn0.HrUSdmJ6gKFXaZdU1nf2rQ';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position
zoom: 9 // starting zoom
});
 
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());


    return (
        <div className="map">
            <div id='map'></div>
        </div>
    );
};

export default Map;