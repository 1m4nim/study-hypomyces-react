import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from "leaflet";
import styles from "./MapComponent.module.css";

const center: LatLngTuple = [20, 0];
const zoom = 2;

const anhuiPolygon: LatLngTuple[] = [
  [34.0, 114.5],
  [34.0, 118.0],
  [32.0, 119.0],
  [29.5, 118.5],
  [29.5, 115.5],
  [31.0, 114.5],
  [34.0, 114.5],
];

const MapComponent = () => {
  return (
    <MapContainer center={center} zoom={zoom} className={styles.mapContainer}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Polygon
        positions={anhuiPolygon}
        pathOptions={{ color: "orange", fillOpacity: 0.5 }}
      />
    </MapContainer>
  );
};

export default MapComponent;
