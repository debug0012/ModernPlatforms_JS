// Global Scope
let globalVariable = "I am a global variable";

function showGlobalVariable() {
  console.log(globalVariable); // Print Out "I am a global variable"
}

showGlobalVariable();

// Function Scope
function functionScopeExample() {
  let functionVariable = "I am a function variable";
  console.log(functionVariable); // Print Out "I am a function variable"
}

functionScopeExample();

// try to printout functionVariable out of functionScope 
//console.log(functionVariable); // error: ReferenceError: functionVariable is not defined

// Block Scope
function blockScopeExample() {
  if (true) {
    let blockVariable = "I am a block variable";
    console.log(blockVariable); // виведе "I am a block variable"
  }
  
  // try to printout functionVariable out of blockScope 
  // console.log(blockVariable); //  error:  ReferenceError: blockVariable is not defined
}

blockScopeExample();