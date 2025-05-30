import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// --- 中国の省ごとの座標例（必要に応じて増やしてください） ---
const chinaRegionsCoords: { [key: string]: [number, number] } = {
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
  Yunnan: [25.0453, 102.7091],
  Jilin: [43.6663, 126.1923],
  Hubei: [30.5454, 114.3423],
  Guangdong: [23.379, 113.7633],
  Beijing: [39.9042, 116.4074],
  Gansu: [36.0594, 103.8262],
};

// --- 国単位の座標例 ---
const countryCoords: { [key: string]: [number, number] } = {
  USA: [37.0902, -95.7129],
  Canada: [56.1304, -106.3468],
  NewZealand: [-40.9006, 174.886],
  Belgium: [50.8503, 4.3517],
  Europe: [54.526, 15.2551], // 大雑把にヨーロッパ中央
  Russia: [61.524, 105.3188],
  Japan: [36.2048, 138.2529],
  Brazil: [-14.235, -51.9253],
  Panama: [8.538, -80.7821],
  Estonia: [58.5953, 25.0136],
  Finland: [61.9241, 25.7482],
  "The Netherlands": [52.1326, 5.2913],
  Mexico: [23.6345, -102.5528],
  Germany: [51.1657, 10.4515],
  Iran: [32.4279, 53.688],
  Korea: [35.9078, 127.7669],
  Cuba: [21.5218, -77.7812],
  Gabon: [-0.8037, 11.6094],
  Indonesia: [-0.7893, 113.9213],
};

// --- 色付きアイコンを作る関数例（例として青色固定） ---
const createColoredIcon = (color = "blue") => {
  return L.divIcon({
    className: "custom-marker-icon",
    html: `<div style="background-color:${color};width:16px;height:16px;border-radius:50%;border:2px solid white;"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
};

// --- distribution文字列から座標とラベルの配列を返す ---
const extractLocations = (distribution: string) => {
  const coordsList: { coords: [number, number]; label: string }[] = [];

  // 中国の省名部分を抽出（例: "China (Beijing, Hebei)"）
  const chinaMatch = distribution.match(/China\s*\(([^)]+)\)/);
  if (chinaMatch) {
    const regions = chinaMatch[1].split(",").map((r) => r.trim());
    regions.forEach((region) => {
      if (chinaRegionsCoords[region]) {
        coordsList.push({
          coords: chinaRegionsCoords[region],
          label: `China - ${region}`,
        });
      }
    });
  } else if (distribution.includes("China")) {
    // 省名なしで単にChinaのみの場合
    coordsList.push({ coords: countryCoords["China"], label: "China" });
  }

  // 中国の省名部分を取り除いて、残りの国名を抽出
  const distNoChinaRegions = distribution.replace(/China\s*\([^)]+\)/g, "");
  // コンマ区切りで国名を分割してトリム
  const countries = distNoChinaRegions.split(",").map((c) => c.trim());

  countries.forEach((country) => {
    if (country && country !== "China" && countryCoords[country]) {
      coordsList.push({ coords: countryCoords[country], label: country });
    }
  });

  return coordsList;
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
// --- メインコンポーネント ---
export const MapWithMarkers = () => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      {data.map(({ taxa_name, hosts }) =>
        hosts
          .flatMap((host) => extractLocations(host.distribution))
          .map(({ coords, label }) => (
            <Marker
              key={`${taxa_name}-${label}`}
              position={coords}
              icon={createColoredIcon("blue")}
            >
              <Popup>
                <div>
                  <b>{taxa_name}</b>
                  <br />
                  {label}
                </div>
              </Popup>
            </Marker>
          ))
      )}
    </MapContainer>
  );
};
