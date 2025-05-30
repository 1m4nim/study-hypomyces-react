import React from "react";
import MapComponent from "./MapComponent";

const App = () => {
  const taxaData = [
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
          distribution:
            "China (Anhui, Beijing, Guangxi, Zhejiang), Cuba, Japan",
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

  return <MapComponent taxaData={taxaData} />;
};

export default App;
