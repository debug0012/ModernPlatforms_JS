function isEvenArray(initialArray) {
    // Checking for all elements if they are even
    const allEven = initialArray.every(num => num % 2 === 0);
    
    if (allEven) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
  // Use cases
  isEvenArray([1, 2, 3, 9]); // Виведе "NO"
  isEvenArray([2, 4, 6]);    // Виведе "YES"


  // window.setTimeout(isEvenArrayUserInput, 40000); ---> tried to add delay before second part
  
  function isEvenArrayUserInput() {
    // Get data from user input
  const input = prompt("Enter numbers separated by commas (for second part of task):");

  // Getting array from user input (numbers), deletin unnecessary characters and spaces
  const initialArray = input.split(',').map(item => item.trim());

    // Checking for all elements if they are even
    const allEven = initialArray.every(num => num % 2 === 0);
    
    if (allEven) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }

// Calling function for user input in a popup window
isEvenArrayUserInput();