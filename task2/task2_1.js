function unicFn(initialArray) {
  return [...new Set(initialArray)];
}

// Use case:
console.log(unicFn([2, 3, 1, 3, 3, 7])); // Print out: [2, 3, 1, 7]


function unicFnUserInput() {
  // Get data from user input
  const input = prompt("Enter items separated by commas (for first part of task):");

  // Getting array from user input (string), deletin unnecessary characters and spaces
  const initialArray = input.split(',').map(item => item.trim());

  // Deleting duplicates with the help of Set
  const uniqueArray = [...new Set(initialArray)];

  // Print out in consile
  console.log(uniqueArray);
}

// Calling function for user input in a popup window
unicFnUserInput();