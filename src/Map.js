import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet'

const icon = L.icon({
    iconUrl: "./images/logo.gif",
    iconSize: (50,50),
});

const position = [51.505, -0.09]

const Map = () => {
    return (
        <MapContainer center={position} 
        zoom={13} 
        scrollWheelZoom={true} style={{ height: '100%',borderRadius: '15px', width: '100%', margin: '0.5rem 0.5rem 0.5rem 0.5rem'}}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=XmHBbvksCF8v4vwMs38M"
            />
            <Marker position={position} icon={icon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;