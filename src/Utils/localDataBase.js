const datasForSelectstring = [ 
  {   
   options: ["Babolat","Dunlop", "Head", "Tecnifibre", "Yonex", "Luxillon"],
   title : "Marque",
   fieldNameBdd: "Mark"
  },

  {
    options: ["Contrôle", "Puissance", "Prise d'effet", "Confort"],
    title : "Gamme",
    fieldNameBdd: "first_characteristic"
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