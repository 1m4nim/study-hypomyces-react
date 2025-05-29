// // ExampleMap.tsx
// import React, { useState } from "react";
// import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// // 仮のcolors配列
// const colors = ["red", "blue", "green", "orange", "purple"];

// // 仮のextractLocations関数（distribution配列の最初のcoordsを返す例）
// const extractLocations = (distribution: { coords: [number, number] }[]) => {
//   return distribution;
// };

// // 仮のdata（あなたのデータ構造に合わせてください）
// const data = [
//   {
//     taxa_name: "Taxa A",
//     hosts: [
//       {
//         hosts: "Host 1",
//         distribution: [{ coords: [35, 135] }, { coords: [36, 136] }],
//       },
//     ],
//   },
//   {
//     taxa_name: "Taxa B",
//     hosts: [
//       {
//         hosts: "Host 2",
//         distribution: [{ coords: [34, 134] }],
//       },
//     ],
//   },
// ];

// const ExampleMap = () => {
//   const [selectedData, setSelectedData] = useState<{
//     position: [number, number];
//     taxa: string;
//     hosts: string;
//   } | null>(null);

//   return (
//     <MapContainer
//       center={[35, 135]}
//       zoom={5}
//       style={{ height: "600px", width: "100%" }}
//     >
//       <TileLayer
//         attribution="&copy; OpenStreetMap contributors"
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />

//       {data.map((item, idx) => {
//         if (!item.hosts || item.hosts.length === 0) return null;
//         const firstHost = item.hosts[0];

//         const locations = extractLocations(firstHost.distribution);
//         if (!locations || locations.length === 0) return null;
//         const loc = locations[0].coords;
//         if (!loc) return null;

//         return (
//           <Circle
//             key={idx}
//             center={loc}
//             radius={30000}
//             pathOptions={{ color: colors[idx % colors.length] }}
//             eventHandlers={{
//               click: () => {
//                 setSelectedData({
//                   position: loc,
//                   taxa: item.taxa_name,
//                   hosts: firstHost.hosts,
//                 });
//               },
//             }}
//           />
//         );
//       })}

//       {selectedData && (
//         <Popup
//           position={selectedData.position}
//           eventHandlers={{
//             popupclose: () => {
//               setSelectedData(null);
//             },
//           }}
//         >
//           <div>
//             <strong>Taxa:</strong> {selectedData.taxa} <br />
//             <strong>Hosts:</strong> {selectedData.hosts}
//           </div>
//         </Popup>
//       )}
//     </MapContainer>
//   );
// };

// export default ExampleMap;
