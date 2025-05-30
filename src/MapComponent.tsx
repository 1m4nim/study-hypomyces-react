import React from "react";
import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Region = {
  name: string;
  coords: [number, number][];
  color: string;
  taxaName: string;
};

const hosts = [
  "Agaricus bisporus",
  "Cymatoderma sp.",
  "Laetiporus sulphureus",
  "Panellus sp.",
  "Polyporus picipes",
  "Stereum sp.",
];

const chinaProvincesRaw = [
  {
    name: "Anhui",
    coords: [
      [31.5, 116.0],
      [32.5, 116.0],
      [32.5, 117.0],
      [31.5, 117.0],
    ],
  },
  {
    name: "Fujian",
    coords: [
      [25.0, 117.5],
      [26.0, 117.5],
      [26.0, 119.0],
      [25.0, 119.0],
    ],
  },
  {
    name: "Guangxi",
    coords: [
      [23.0, 108.0],
      [24.0, 108.0],
      [24.0, 110.0],
      [23.0, 110.0],
    ],
  },
  {
    name: "Hainan",
    coords: [
      [19.0, 109.5],
      [19.5, 109.5],
      [19.5, 110.5],
      [19.0, 110.5],
    ],
  },
  {
    name: "Hebei",
    coords: [
      [38.0, 114.0],
      [39.0, 114.0],
      [39.0, 115.0],
      [38.0, 115.0],
    ],
  },
  {
    name: "Hunan",
    coords: [
      [27.0, 111.0],
      [28.0, 111.0],
      [28.0, 112.5],
      [27.0, 112.5],
    ],
  },
  {
    name: "Jiangsu",
    coords: [
      [32.0, 119.0],
      [33.0, 119.0],
      [33.0, 120.5],
      [32.0, 120.5],
    ],
  },
  {
    name: "Jiangxi",
    coords: [
      [27.5, 115.0],
      [28.5, 115.0],
      [28.5, 116.5],
      [27.5, 116.5],
    ],
  },
  {
    name: "Shanghai",
    coords: [
      [31.1, 121.3],
      [31.35, 121.3],
      [31.35, 121.6],
      [31.1, 121.6],
    ],
  },
  {
    name: "Sichuan",
    coords: [
      [30.0, 103.0],
      [31.0, 103.0],
      [31.0, 104.5],
      [30.0, 104.5],
    ],
  },
  {
    name: "Zhejiang",
    coords: [
      [29.0, 120.0],
      [30.0, 120.0],
      [30.0, 121.5],
      [29.0, 121.5],
    ],
  },
];

const chinaProvinces: Region[] = chinaProvincesRaw.map((region) => ({
  name: region.name,
  coords: region.coords as [number, number][],
  color: "orange",
  taxaName: "Hypomyces aurantius",
}));

const globalRegions: Region[] = [
  {
    name: "USA",
    coords: [
      [37.0, -122.0],
      [38.5, -122.0],
      [38.5, -120.0],
      [37.0, -120.0],
    ],
    color: "orange",
    taxaName: "Hypomyces aurantius",
  },
  {
    name: "New Zealand",
    coords: [
      [-41.5, 173.5],
      [-40.0, 173.5],
      [-40.0, 175.0],
      [-41.5, 175.0],
    ],
    color: "orange",
    taxaName: "Hypomyces aurantius",
  },
];

const allRegions = [...chinaProvinces, ...globalRegions];

const MapView: React.FC = () => {
  return (
    <MapContainer
      center={[20, 0]} // 世界地図用中心座標
      zoom={1} // 世界全体が見えるズームレベル
      style={{ height: "600px", width: "100%" }}
      worldCopyJump={false}
      maxBounds={[
        [-90, -180],
        [90, 180],
      ]}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {allRegions.map((region, idx) => (
        <Polygon
          key={idx}
          pathOptions={{ color: region.color }}
          positions={region.coords}
        >
          <Popup>
            <strong>{region.name}</strong>
            <br />
            Taxa: {region.taxaName}
            <br />
            Hosts:
            <ul style={{ margin: 0, paddingLeft: "1em" }}>
              {hosts.map((hostName, i) => (
                <li key={i}>{hostName}</li>
              ))}
            </ul>
          </Popup>
        </Polygon>
      ))}
    </MapContainer>
  );
};

export default MapView;
