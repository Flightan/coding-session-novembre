import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

const LeafletMap = props => {
  const position = [props.coordinates[1], props.coordinates[0]];
  return (
    <Map center={position} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
};

export default LeafletMap;
