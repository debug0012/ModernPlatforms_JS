function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
    let sum = 0;
    
    for (let item of initialArray) {
      if (typeof item === 'number') {
        sum += item;
      }
    }
  
    console.log(sum);
    alert("sum of all valid number elements (also shown in console): " + sum);
  }

  // Call the function to calculate the sum of the array elements
  calculateSumOfArray();

  //Sum will be not defined because it's declored through LET in Function scope
  console.log(sum);