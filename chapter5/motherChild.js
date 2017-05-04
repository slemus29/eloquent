var ancestry = require("./ancestry");
ancestry = JSON.parse(ancestry);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
function resta(p){
	return p.born - byName[p.mother].born;
}
function mother(p){return p.mother !== null && byName[p.mother] !== undefined}
function namemother(p){return p.mother}
function age(p) { return p.died - p.born;}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var edad = ancestry.filter(mother).map(resta);

console.log(average(edad));

