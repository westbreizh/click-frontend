const datasForSelectstring = [ 
  {   
   options: [ "Tecnifibre", "Yonex"],
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
   options: ["Tecnifibre"],
   title : "Marque",
   fieldNameBdd: "mark"
  },

];
export { datasForSelectsBall };


const datasForSelectsAccessories = [ 
  {   
   options: ["wilson"],
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


const datasForSelectRopeString = [];
for (let i = 17; i <= 30; i++) {
  datasForSelectRopeString.push({ value: i });
}
export { datasForSelectRopeString };