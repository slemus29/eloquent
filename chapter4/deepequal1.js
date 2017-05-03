function deepEqual (obj, obj1) {
    var actual = JSON.stringify(obj);
    var actual1 = JSON.stringify(obj1);
    return actual == actual1;

}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));