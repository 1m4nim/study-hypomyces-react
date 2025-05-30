import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";

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

// 中国の地域を含む場所の緯度経度情報
const locations = {
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
  Japan: [35.6764, 139.65],
  USA: [38.8951, -77.0364],
  Canada: [45.4215, -75.6972],
  Russia: [55.7558, 37.6173],
  Brazil: [-15.7939, -47.8828],
  Europe: [54.526, 15.2551], // 代表として中央ヨーロッパ付近の座標
  Mexico: [23.6345, -102.5528],
  Cuba: [21.5218, -77.7812],
  Estonia: [58.5953, 25.0136],
  Finland: [61.9241, 25.7482],
  "The Netherlands": [52.1326, 5.2913],
  Gabon: [-0.8037, 11.6094],
  Iran: [32.4279, 53.688],
  Korea: [36.5, 127.5],
  Indonesia: [-0.7893, 113.9213],
  NewZealand: [-40.9006, 174.886],
};

// taxa_name ごとに色を割り当てるための色配列
const colors = [
  "red",
  "green",
  "blue",
  "orange",
  "purple",
  "darkred",
  "cadetblue",
  "darkgreen",
  "darkblue",
  "darkpurple",
  "pink",
  "lightblue",
];

function createIcon(color: any) {
  return L.divIcon({
    className: "custom-marker",
    html: `<svg xmlns="http://www.w3.org/2000/svg" fill="${color}" viewBox="0 0 24 24" stroke="black" stroke-width="1" width="24" height="24">
      <path d="M12 2C8 8 5 13 5 16a7 7 0 0 0 14 0c0-3-3-8-7-14z" />
      <circle cx="12" cy="10" r="2" fill="white" />
    </svg>`,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
}

export default function MapWithSidebar() {
  const [selectedInfo, setSelectedInfo] = useState(null);

  // taxa_name と色を対応させるマップを作成
  const taxaColorMap: Record<string, string> = {};
  data.forEach((item, index) => {
    taxaColorMap[item.taxa_name] = colors[index % colors.length];
  });

  // 分布情報の文字列から中国の地域名を抽出して座標を取得
  // 例: "China (Anhui, Fujian, Guangxi, Hainan, Hebei, ...)"
  // をパースして複数地域の座標を返す関数
  const extractLocations = (distribution: string) => {
    const locs: [number, number][] = [];
    if (!distribution) return locs;

    // Chinaの括弧内の地域名を抽出
    const chinaMatch = distribution.match(/China\s*\(([^)]+)\)/);
    if (chinaMatch) {
      const regions = chinaMatch[1].split(",").map((r) => r.trim());
      regions.forEach((region) => {
        if (locations[region]) locs.push(locations[region]);
      });
    }

    // China以外の地名はカンマ区切りで入っていることを想定し、中国の括弧部分を除去して抽出
    const otherRegionsStr = distribution.replace(/China\s*\([^)]+\)/, "");
    const others = otherRegionsStr
      .split(",")
      .map((r) => r.trim())
      .filter((r) => r.length > 0 && locations[r]);

    others.forEach((region) => {
      if (locations[region]) locs.push(locations[region]);
    });

    return locs;
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "70vw", height: "90vh" }}>
        <MapContainer
          center={[35, 105]}
          zoom={4}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {data.map((item, i) =>
            item.hosts.flatMap((hostInfo) => {
              const locs = extractLocations(hostInfo.distribution);
              return locs.map((latlng, idx) => (
                <Marker
                  key={`${item.taxa_name}-${i}-${idx}`}
                  position={latlng}
                  icon={createIcon(taxaColorMap[item.taxa_name])}
                  eventHandlers={{
                    click: () =>
                      setSelectedInfo({
                        taxa_name: item.taxa_name,
                        hosts: hostInfo.hosts,
                        distribution: hostInfo.distribution,
                      }),
                  }}
                />
              ));
            })
          )}
        </MapContainer>
      </div>

      <div
        style={{
          width: "30vw",
          height: "90vh",
          overflowY: "auto",
          padding: "1rem",
          borderLeft: "1px solid #ccc",
        }}
      >
        <h2>詳細情報</h2>
        {selectedInfo ? (
          <>
            <h3>{selectedInfo.taxa_name}</h3>
            <p>
              <strong>Hosts:</strong> {selectedInfo.hosts}
            </p>
            <p>
              <strong>Distribution:</strong> {selectedInfo.distribution}
            </p>
          </>
        ) : (
          <p>マーカーをクリックして詳細情報を表示してください。</p>
        )}
      </div>
    </div>
  );
}
