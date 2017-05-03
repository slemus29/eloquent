function deepEqual(ob1, ob2){
  if (typeof ob1 =="object" && ob1 !== null &&
      typeof ob2=="object" && ob2 !== null){
    var kObj = Object.keys(ob1);
    var kObj1= Object.keys(ob2);
    if(equalKeys(kObj, kObj1)){
      var verif = true;
      for(i=0; i < kObj.length; i++){
        if(!deepEqual(ob1[kObj[i]],ob2[kObj[i]])){
          verif = false;
          break;
        }
      }
      return verif;
    }
    else{
      return false;
    }
  }
  else{
    return ob1 === ob2;
  }
}

function equalKeys(k1, k2){
  if(k1.length !== k2.length){
    return false;
  }

  for (var i = 0; i < k1.length ; i++) {
    if (k2.indexOf(k1[i]) == -1){
      return false;
    }
  }
  return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true