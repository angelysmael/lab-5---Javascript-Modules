// Question 5 - Working with Functions

// a) Regular function version
function rectangleProperties(width, height) {
    let area = width * height;
    let perimeter = 2 * (width + height);
    let isSquare = (width === height);

    // Return an object with all properties including unused "metadata"
    return {
        area: area,
        perimeter: perimeter,
        isSquare: isSquare,
        metadata: "" // Unused property
    };
}

// b) Arrow function version
const rectanglePropertiesArrow = (width, height) => {
    let area = width * height;
    let perimeter = 2 * (width + height);
    let isSquare = (width === height);

    // Return the same type of object
    return {
        area: area,
        perimeter: perimeter,
        isSquare: isSquare,
        metadata: "" // Unused property
    };
};

// Demonstration of both functions
console.log("Using regular function:", rectangleProperties(5, 10));
console.log("Using arrow function:", rectanglePropertiesArrow(6, 6));