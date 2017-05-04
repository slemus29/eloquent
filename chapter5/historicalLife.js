var ancestry = require("./ancestry");
ancestry = JSON.parse(ancestry);

function average(array) {
	function plus(a,b) {return a+b;}
	return array.reduce(plus)/array.length;
}

var min = 0;
var max = 0;

ancestry.forEach(function(person) {
	if (person.died > min){
		person.died = min;
	}
	else{
		person.died = max;
	}
});

