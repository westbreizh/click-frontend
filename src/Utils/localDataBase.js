const datasForSelectstring = [ 
  {   
   options: ["Babolat","Technifibre", "Yonex"],
   title : "Marque",
   fieldNameBdd: "Mark"
  },

  {
    options: ["Multifilament", "Monofilament"],
    title : "Composition",
    fieldNameBdd: "Composition",
  },
  {
    options: ["Contrôle", "Puissance", "Prise d'effet", "Confort"],
    title : "Gamme",
    fieldNameBdd: "first_characteristic"
  },
  {
    options: ["Garniture 12m", "Bobine 200m"],
    title : "Conditionnement",
    fieldNameBdd: "Packaging"
  }
];

export { datasForSelectstring };


const datasForSelectsBall = [ 
  {   
   options: ["Dunlop"],
   title : "Marque",
   fieldNameBdd: "mark"
  },

];

export { datasForSelectsBall };


const datasForSelectsAccessories = [ 
  {   
   options: ["Babolat", "Tourna"],
   title : "Marque",
   fieldNameBdd: "mark"
  },
  {
    options: ["surgrip"],
    title : "Produits",
    fieldNameBdd: "product"
    },

];

export { datasForSelectsAccessories };


const datasForSelectHub = [ 
  { value: 'Rollang Garros', adress: "porte d'auteuil" },
  { value: 'TC Penmach', adress: "rue de la rue Penmach"},
  { value: 'Leclerc Pendref', adress: "rue pratique Pendref Plomeur"},
];

export { datasForSelectHub };


const datasForSelectRopeString = [];

for (let i = 17; i <= 30; i++) {
  datasForSelectRopeString.push({ value: i });
}


export { datasForSelectRopeString };