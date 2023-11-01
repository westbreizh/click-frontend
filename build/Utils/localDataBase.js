"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.datasForSelectstring = exports.datasForSelectsBall = exports.datasForSelectsAccessories = exports.datasForSelectRopeString = void 0;
var datasForSelectstring = exports.datasForSelectstring = [{
  options: ["Tecnifibre", "Yonex"],
  title: "Marque",
  fieldNameBdd: "Mark"
}, {
  options: ["Contrôle", "Puissance", "Prise d'effet", "Confort"],
  title: "Gamme",
  fieldNameBdd: "first_characteristic"
}];
var datasForSelectsBall = exports.datasForSelectsBall = [{
  options: ["Tecnifibre", "Dunlop"],
  title: "Marque",
  fieldNameBdd: "mark"
}];
var datasForSelectsAccessories = exports.datasForSelectsAccessories = [{
  options: ["Wilson"],
  title: "Marque",
  fieldNameBdd: "mark"
}, {
  options: ["surgrip"],
  title: "Produits",
  fieldNameBdd: "product"
}];
var datasForSelectRopeString = exports.datasForSelectRopeString = [];
for (var i = 17; i <= 30; i++) {
  datasForSelectRopeString.push({
    value: i
  });
}