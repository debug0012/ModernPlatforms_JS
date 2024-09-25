const arr = ["CarHauler", "WebAndDesign", "and", "MobilE", "PlaTfoRmsDisk", "Customs"];

// Compose function, will be using as the template for other functions
let compose = (...funcs) => (data) => funcs.reduceRight((value, func) => func(value), data);

// Kary Function
let modifyArray = (modifyCondition) => (data) => data.map(modifyCondition);

let toLowerCase = (str) => str.toLowerCase();

let capitalizeFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

// Function for console log output
let outputResult = (result) => {
  const resultString = result.join(' - ');
  console.log(`Result: ${resultString} length: ${resultString.length}`);
  return resultString;
};

// using compose for allToLower
let allToLower = compose(
  outputResult,
  modifyArray(toLowerCase)
);

// using compose for capitalizeAllFirst
let capitalizeAllFirst = compose(
  (data) => {
    const resultString = data.join('-');
    console.log(`Result: ${resultString} length: ${resultString.length}`);
    return resultString;
  },
  modifyArray(capitalizeFirst)
);

// Calling function
allToLower(arr); 
capitalizeAllFirst(arr);