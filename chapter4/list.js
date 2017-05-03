function nth(lst, pos){
  var x = lst;
  var newvalue = 0;
  for (var i = 0; i <= pos; i++) {
    newvalue= x.value;
    x = x.rest;
    if (x==null) {
      newvalue = undefined;
      break
    }

  }
  return newvalue;
}

function listToArray(lst){
  var newlst = [];
  var actual = lst;
  while(actual != null){
    newlst.push(actual.value);
    actual = actual.rest;
  }
  return newlst;
}

function arrayToList(ar){
  var newlst = null;
  for (var i = ar.length-1; i >=0 ; i--) {
    newlst = prepend(ar[i],newlst);
  }
  return newlst;

}

function prepend(x, lst) {
  return {value:x, rest: lst};
}

//console.log(arrayToList([3, 4, 9]));
console.log(listToArray({value: 10, rest: {value: 20, rest:{value:30, rest:null}}}));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(nth(arrayToList([10, 20, 30]), 100));

