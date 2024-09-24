const car = {
    name: "Tesla",
    model: "X",
  };
  
  function showCarInfo() {
    console.log(this.name, this.model);
  }

const nameInput = prompt("Enter car name:");
const modelInput = prompt("Enter model:");
    
    function showCarInfoInput(nameInput, modelInput) {
    return console.log("This is " + nameInput, " model " + modelInput);
  }
  
  // Calling func showCarInfo, linking car object context (Tesla X) by binding
  const boundShowCarInfo = showCarInfo.bind(car);
  boundShowCarInfo();
  showCarInfoInput();