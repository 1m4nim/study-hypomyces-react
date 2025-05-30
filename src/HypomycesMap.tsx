import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

// 地域の緯度経度データ
const chinaRegionsCoords: { [key: string]: [number, number] } = {
  Anhui: [31.8612, 117.2857],
  Fujian: [26.0745, 119.2965],
  Zhejiang: [29.1832, 120.0934],
  Guangxi: [23.8298, 108.7881],
  Hubei: [30.5454, 114.3423],
  Jiangsu: [32.9711, 119.455],
  Yunnan: [25.0453, 102.7097],
};

const countryCoords: { [key: string]: [number, number] } = {
  Japan: [36.2048, 138.2529],
  USA: [37.0902, -95.7129],
  Korea: [35.9078, 127.7669],
  Canada: [56.1304, -106.3468],
  Russia: [61.524, 105.3188],
  Brazil: [-14.235, -51.9253],
  NewZealand: [-40.9006, 174.886],
  Europe: [54.526, 15.2551],
  Mexico: [23.6345, -102.5528],
  Indonesia: [-0.7893, 113.9213],
  Gabon: [-0.8037, 11.6094],
  Iran: [32.4279, 53.688],
};

const taxaColors = [
  "red",
  "blue",
  "green",
  "orange",
  "yellow",
  "violet",
  "grey",
  "black",
];

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

// taxa から色を決める関数
const getColorByTaxa = (taxa: string) => {
  const taxaNames = [...new Set(data.map((d) => d.taxa_name))];
  const index = taxaNames.indexOf(taxa);
  return taxaColors[index % taxaColors.length];
};

// Leafletのカラーマーカーアイコンを作る関数
const createColoredIcon = (color: string) =>
  new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

// distributionの文字列から場所情報を抽出する関数
function extractLocations(
  distribution: string
): { label: string; coords: [number, number] }[] {
  const results: { label: string; coords: [number, number] }[] = [];

  // 中国の省リストを抽出
  const chinaMatch = distribution.match(/China\s*\(([^)]+)\)/);
  if (chinaMatch) {
    const provinces = chinaMatch[1].split(",").map((p) => p.trim());
    provinces.forEach((province) => {
      if (chinaRegionsCoords[province]) {
        results.push({
          label: `China - ${province}`,
          coords: chinaRegionsCoords[province],
        });
      }
    });
    distribution = distribution.replace(chinaMatch[0], "");
  }

  // その他の国をカンマ区切りで分割し座標を抽出
  const countries = distribution
    .split(",")
    .map((c) => c.trim())
    .filter((c) => c.length > 0);
  countries.forEach((country) => {
    if (countryCoords[country]) {
      results.push({ label: country, coords: countryCoords[country] });
    }
  });

  return results;
}

// マーカーのデータ型（型定義）
type MarkerType = {
  coords: [number, number];
  taxaData: {
    taxa: string;
    hosts: string[];
    distribution: string;
  }[];
};

const HypomycesMap: React.FC = () => {
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);

  // マーカー位置ごとにデータをまとめる
  const markerMap = new Map<string, MarkerType>();

  data.forEach((item) => {
    item.hosts.forEach((host) => {
      const locations = extractLocations(host.distribution);
      locations.forEach((loc) => {
        const key = `${loc.coords[0]},${loc.coords[1]}`;
        if (!markerMap.has(key)) {
          markerMap.set(key, {
            coords: loc.coords,
            taxaData: [],
          });
        }

        const entry = markerMap.get(key)!;
        const existing = entry.taxaData.find(
          (td) => td.taxa === item.taxa_name
        );
        if (existing) {
          existing.hosts.push(host.hosts);
        } else {
          entry.taxaData.push({
            taxa: item.taxa_name,
            hosts: [host.hosts],
            distribution: host.distribution,
          });
        }
      });
    });
  });

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* 地図部分 */}
      <div style={{ flex: 1 }}>
        <MapContainer
          center={[20, 0]}
          zoom={2}
          minZoom={2}
          maxZoom={2}
          scrollWheelZoom={false}
          zoomControl={false}
          dragging={false}
          doubleClickZoom={false}
          style={{ height: "100%", width: "100%" }}
          maxBounds={[
            [-85, -180],
            [85, 180],
          ]}
          maxBoundsViscosity={1.0}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {[...markerMap.values()].map((marker, idx) => {
            const mainTaxa = marker.taxaData[0]?.taxa || "default";
            return (
              <Marker
                key={idx}
                position={marker.coords}
                icon={createColoredIcon(getColorByTaxa(mainTaxa))}
                eventHandlers={{
                  click: () => setSelectedMarker(marker),
                }}
              />
            );
          })}
        </MapContainer>
      </div>

      {/* パネル部分 */}
      <div
        style={{
          width: 400,
          overflowY: "auto",
          borderLeft: "1px solid #ccc",
          padding: "1em",
          backgroundColor: "#f9f9f9",
        }}
      >
        {
          selectedMarker ? (
            <div>
              <h3>📌 Memo</h3>
              <ul>
                {selectedMarker.taxaData.map((td, tIdx) => (
                  <li key={tIdx} style={{ marginBottom: "1em" }}>
                    <strong>• Taxa:</strong> {td.taxa}
                    <br />
                    <strong>Distribution:</strong> {td.distribution}
                    <ul>
                      {td.hosts.map((host, hIdx) => (
                        <li key={hIdx}>
                          - <strong>Host:</strong> {host}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <button onClick={() => setSelectedMarker(null)}>閉じる</button>
            </div>
          ) : null /* 何も表示しない */
        }
      </div>
    </div>
  );
};

export default HypomycesMap;
