var ancestry = require("./ancestry");
ancestry = JSON.parse(ancestry);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }
function mother(p){return p.mother !== null}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


var edad = ancestry.filter(mother);

console.log(edad);




/*var mother = [];
ancestry.forEach(function(person) {
	var edad = person.born;
	var mothers = person.mother;
	mother.push(mothers);
})*/



var ph = byName["Philibert Haverbeke"];
// console.log (byName);



// var ph = byName["Philibert Haverbeke"];
// //console.log (ph);

// var p1 = byName[ph.father];
// console.log(p1);

// var p2 = byName[p1.father];
// console.log(p2);

// var m1 = byName[p2.mother];
// console.log(m1);

// var m2 = byName[m1.mother];
// console.log(m2);

// var p3 = byName[m2.father];
// console.log(p3);

// var m3 = byName[p3.mother];
// console.log(m3);
// // → {name: "Philibert Haverbeke", …}