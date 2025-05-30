// MarkerSidebar.tsx
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ここにMarkerSidebarコンポーネントを定義（簡単に実装例）
const MarkerSidebar: React.FC<{
  taxa_name: string;
  hosts: string;
  distribution: string;
  onClose: () => void;
}> = ({ taxa_name, hosts, distribution, onClose }) => {
  return (
    <div
      style={{
        width: "30%",
        height: "100%",
        overflowY: "auto",
        backgroundColor: "#f0f0f0",
        padding: 20,
      }}
    >
      <button onClick={onClose} style={{ marginBottom: 10 }}>
        Close
      </button>
      <h2>{taxa_name}</h2>
      <p>
        <strong>Hosts:</strong> {hosts}
      </p>
      <p>
        <strong>Distribution:</strong> {distribution}
      </p>
    </div>
  );
};

export type MarkerData = {
  name: string;
  coords: [number, number];
  region: string;
  taxa: string;
};

const data = [
  {
    taxa_name: "Hypomyces aurantius",
    hosts: [
      {
        hosts:
          "Agaricus bisporus, Polyporales (Cymatoderma sp., Laetiporus sulphureus, Panellus sp., Polyporus picipes), Stereum sp.",
        distribution:
          "China (Anhui, Fujian, Guangxi, Hainan, Hebei, Hunan, Jiangsu, Jiangxi, Shanghai, Sichuan, Zhejiang), New Zealand, USA",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces aureonitens",
    hosts: [
      {
        hosts: "Phlebia tremellosa, Polyporus sp.",
        distribution: "China (Fujian, Guangxi), Europe",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces chlorinigenus",
    hosts: [
      {
        hosts: "Agaricaceae, Boletaceae",
        distribution:
          "Belgium, China (Taiwan), Guyana, Indonesia, New Zealand, USA",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces chrysospermus",
    hosts: [
      {
        hosts:
          "Boletus sp., Hemileccinum impolitum, Suillus americanus, Russula sp.",
        distribution: "China (Fujian, Jilin, Jiangsu), Russia",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces completiopsis",
    hosts: [
      {
        hosts: "Boletus sp.",
        distribution: "China (Yunnan)",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces fistulina",
    hosts: [
      {
        hosts: "Fistulina sp.",
        distribution: "China (Guangxi)",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces hubeiensis",
    hosts: [
      {
        hosts: "Agaricus sp.",
        distribution: "China (Hubei)",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces hyalinus",
    hosts: [
      {
        hosts: "Agaricales (Amanita sp.), Polyporales",
        distribution: "Canada, China (Jiangsu), Japan, USA",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces lateritius",
    hosts: [
      {
        hosts:
          "Lactarius camphoratus, L. chelidonium, L. controversus, L. deliciosus, L. sanguifluus, L. thejogalus, L. trivialis, Lactarius sp.",
        distribution:
          "Canada, China (Tibet), Europe, Japan, Mexico, New Zealand, USA",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces luteovirens",
    hosts: [
      {
        hosts: "Russula atropurpurea, R. rosea, R. sanguinaria, Russula sp.",
        distribution:
          "Canada, China (Inner Mongolia), Europe, Japan, Russia, USA",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces macrosporus",
    hosts: [
      {
        hosts: "Russulaceae",
        distribution: "China (Hubei), Mexico, USA",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces microspermus",
    hosts: [
      {
        hosts:
          "Boletaceae, Boletus sp., Imleria badia, Xanthoconium affine, Xerocomellus chrysenteron, Xerocomus sp.",
        distribution:
          "Canada, China (Fujian, Guizhou, Hainan, Hubei, Jilin, Taiwan, Yunnan), Indonesia, New Zealand, USA",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces mycophilus",
    hosts: [
      {
        hosts:
          "Auricularia sp., Bulgari sp., Marasmius sp., Polyporus sp., Trametes versicolor",
        distribution: "China (Guangdong), USA",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces ochraceus",
    hosts: [
      {
        hosts: "Decaying leaves, wood and fungi (e.g., Russula sp.)",
        distribution: "China (Guangxi, Yunnan), Europe, USA",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces orthosporus",
    hosts: [
      {
        hosts: "Polyporales",
        distribution: "China (Tibet), Estonia, Finland, The Netherlands",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces papulasporae",
    hosts: [
      {
        hosts:
          "Geoglossum difforme, G. fallax, G. glabrum, G. nigritum, G. simile, Glutinoglossum glutinosum, Trichoglossum hirsutum, T. walteri",
        distribution: "China, USA, New Zealand",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces polyporinus",
    hosts: [
      {
        hosts:
          "Auricularia auricula-judae, Polyporales, Trametes versicolor, T. pubescens, Polyporus sp.",
        distribution: "Canada, China (Guangxi), USA",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces pseudolactifluorum sp. nov.",
    hosts: [
      {
        hosts: "Russula sp.",
        distribution: "China (Yunnan)",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces rosellus",
    hosts: [
      {
        hosts:
          "Agaricus bisporus, Armillaria sp., Hydnellum sp., Hyphoderma sp., Mycena sp., Polyporus sp., Russula sp., Trichaptum sp.",
        distribution: "China (Gansu), Europe, Iran, Japan, Korea, USA",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces semicircularis",
    hosts: [
      {
        hosts: "Ganoderma sichuanense, Microporus xanthopus",
        distribution: "Cuba, China",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces sibirinae",
    hosts: [
      {
        hosts: "Aphyllophorales, Boletus sp., Polyporales",
        distribution: "China (Hunan), Indonesia, USA",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces sinicus",
    hosts: [
      {
        hosts: "Schizophyllum sp.",
        distribution: "China (Anhui)",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces stephanomatis",
    hosts: [
      {
        hosts: "Humaria hemisphaerica, Humaria sp.",
        distribution: "Canada, China (Hubei), Germany, USA",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces subiculosus",
    hosts: [
      {
        hosts: "Polyporaceae (Microporus affinis, Trametes versicolor)",
        distribution: "China (Anhui, Beijing, Guangxi, Zhejiang), Cuba, Japan",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces succineus",
    hosts: [
      {
        hosts: "Pholiota sp.",
        distribution: "China (Taiwan), USA",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces tegillum",
    hosts: [
      {
        hosts: "Aphyllophorales, Polyporales",
        distribution: "Brazil, China (Guangxi, Yunnan), Panama, USA",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces triseptatus",
    hosts: [
      {
        hosts: "Bark or associated with an ascomycete; Pyrenomycete",
        distribution: "China (Hunan, Guangdong), Gabon",
        source: "",
        notes: "",
      },
    ],
  },
  {
    taxa_name: "Hypomyces yunnanensis",
    hosts: [
      {
        hosts: "Boletus sp.",
        distribution: "China (Yunnan)",
        source: "",
        notes: "",
      },
    ],
  },
];

// 地域名と座標の対応（必要に応じて追加）
export const regionToCoords: { [key: string]: [number, number] } = {
  // 中国の省
  Anhui: [31.8612, 117.2857],
  Fujian: [26.0745, 119.2965],
  Guangxi: [23.8298, 108.7881],
  Hainan: [19.5664, 109.9497],
  Hebei: [38.0428, 114.5149],
  Hunan: [27.6104, 111.7088],
  Jiangsu: [32.9711, 119.455],
  Jiangxi: [27.614, 115.7221],
  Shanghai: [31.2304, 121.4737],
  Sichuan: [30.6517, 104.0759],
  Zhejiang: [29.1832, 120.0934],
  Taiwan: [23.6978, 120.9605],
  Tibet: [31.6927, 88.0924],
  "Inner Mongolia": [40.8175, 111.7652],
  Guizhou: [26.5982, 106.7074],
  Jilin: [43.6661, 126.1923],
  Guangdong: [23.379, 113.7633],
  Gansu: [36.0611, 103.8343],
  Hubei: [30.5454, 114.3423],
  Beijing: [39.9042, 116.4074],
  Yunnan: [24.4798, 102.8329],

  // 他の国・地域
  Japan: [35.6764, 139.65],
  SouthKorea: [37.5665, 126.978],
  NorthKorea: [39.0392, 125.7625],
  USA: [38.8951, -77.0364],
  Canada: [45.4215, -75.6972],
  Russia: [55.7558, 37.6173],
  India: [28.6139, 77.209],
  Vietnam: [21.0285, 105.8542],
  Thailand: [13.7563, 100.5018],
  Philippines: [14.5995, 120.9842],
  Indonesia: [-6.2088, 106.8456],
  Australia: [-33.8688, 151.2093],
  UK: [51.5074, -0.1278],
  France: [48.8566, 2.3522],
  Germany: [52.52, 13.405],
  Brazil: [-15.7939, -47.8828],
  SouthAfrica: [-25.7461, 28.1881],
};

const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapWithSidebar = () => {
  const [selectedTaxa, setSelectedTaxa] = useState<{
    taxa_name: string;
    hosts: string;
    distribution: string;
  } | null>(null);

  const handleMarkerClick = (
    taxa_name: string,
    hosts: string,
    distribution: string
  ) => {
    setSelectedTaxa({ taxa_name, hosts, distribution });
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* 地図部分 */}
      <MapContainer
        center={[30, 110]}
        zoom={3}
        style={{ width: "70%", height: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 各データに対して分布ごとにマーカーを配置 */}
        {data.map((entry, idx) => {
          const dist = entry.hosts[0].distribution;
          const hosts = entry.hosts[0].hosts;

          // 分布内にある地域名とregionToCoordsをマッチング
          const matchedRegions = Object.keys(regionToCoords).filter((region) =>
            dist.includes(region)
          );

          return matchedRegions.map((region, rIdx) => (
            <Marker
              key={`${idx}-${rIdx}`}
              position={regionToCoords[region]}
              icon={defaultIcon}
              eventHandlers={{
                click: () => handleMarkerClick(entry.taxa_name, hosts, dist),
              }}
            />
          ));
        })}
      </MapContainer>

      {/* サイドパネル部分 */}
      <div
        style={{
          width: "30%",
          padding: "1rem",
          background: "#f4f4f4",
          borderLeft: "1px solid #ccc",
          overflowY: "auto",
        }}
      >
        {selectedTaxa ? (
          <>
            <h2>{selectedTaxa.taxa_name}</h2>
            <p>
              <strong>Hosts:</strong> {selectedTaxa.hosts}
            </p>
            <p>
              <strong>Distribution:</strong> {selectedTaxa.distribution}
            </p>
          </>
        ) : (
          <p>マーカーをクリックしてください。</p>
        )}
      </div>
    </div>
  );
};

export default MarkerSidebar;
