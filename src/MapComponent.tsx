import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from "leaflet";

const center: LatLngTuple = [31.8, 117.3]; // 安徽省の中心付近

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
    <MapContainer
      center={center}
      zoom={7}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // ↓ 型エラーを防ぐために attributionControl を使う
        attribution="&copy; OpenStreetMap contributors"
      />
      <Polygon
        positions={anhuiPolygon}
        pathOptions={{ color: "orange", fillOpacity: 0.4 }}
      />
    </MapContainer>
  );
};

export default MapComponent;
