function removeObj(arrayOfObj, keyName, value) {
    return arrayOfObj.filter(obj => obj[keyName] !== value);
}

// Use case
const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
console.log(removeObj(arr, "age", 2)); // Print out: [ { age: 1 }, { year: 2 } ]
console.log(removeObj(arr, "year", 2)); // Print out: [ { age: 1 }, { age: 2 }, { age: 2 } ]