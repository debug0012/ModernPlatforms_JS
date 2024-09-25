// Creating constructor Calculator and adding methods sum and subtract

function Calculator() {
    // Can add attributes if needed
}

// Adding methods using prototype
Calculator.prototype.sum = function(a, b) {
    return a + b;
};

Calculator.prototype.subtract = function(a, b) {
    return a - b;
};

//Creating constructor AdvancedCalculator which inherits from Calculator 
// and adding methods multiply and divide

function AdvancedCalculator() {
    Calculator.call(this); // Викликаємо конструктор Calculator
}

// Inheriting Calculator
AdvancedCalculator.prototype = Object.create(Calculator.prototype);

// Recover constructor after inheriting
AdvancedCalculator.prototype.constructor = AdvancedCalculator;

// Додаємо нові методи до прототипу AdvancedCalculator
AdvancedCalculator.prototype.multiply = function(a, b) {
    return a * b;
};

AdvancedCalculator.prototype.divide = function(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
};

// Creating instance of AdvancedCalculator and using methods
const calc = new AdvancedCalculator();

console.log(calc.sum(3, 4));         // 7
console.log(calc.subtract(10, 5));   // 5
console.log(calc.multiply(6, 7));    // 42
console.log(calc.divide(8, 2));      // 4