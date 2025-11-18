function basicCalculator(num1, num2, operation) {
    // Check which operation the user wants to perform
    if (operation === "add") {
        return num1 + num2;
    } else if (operation === "subtract") {
        return num1 - num2;
    } else if (operation === "multiply") {
        return num1 * num2;
    } else if (operation === "divide") {
        // Handle division by zero
        if (num2 === 0) {
            return "DIVISION BY ZERO ERROR";
        } else {
            return num1 / num2;
        }
    } else {
        // If operation is not recognized
        return "Invalid operation";
    }
}


// Example test cases
console.log(basicCalculator(10, 5, "add"));       // 15
console.log(basicCalculator(10, 5, "subtract"));  // 5
console.log(basicCalculator(10, 5, "multiply"));  // 50
console.log(basicCalculator(10, 5, "divide"));    // 2
console.log(basicCalculator(10, 0, "divide"));    // DIVISION BY ZERO ERROR