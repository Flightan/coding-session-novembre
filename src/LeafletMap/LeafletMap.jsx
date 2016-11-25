import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './LeafletMap.css';

const LeafletMap = ({ lat, long, zoom }) =>
  <Map center={[lat, long]} zoom={zoom} className="map-container">
    <TileLayer
      url="http://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoibmlja2kiLCJhIjoiczVvbFlXQSJ9.1Gegt3V_MTupW6wfjxq2QA"
      attribution='&copy; <a href="https://www.mapbox.com/about/maps/" target="_blank">Mapbox</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    />
  </Map>;

LeafletMap.propTypes = {
  lat: React.PropTypes.number,
  long: React.PropTypes.number,
  zoom: React.PropTypes.number,
};

export default LeafletMap;
