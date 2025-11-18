// Array Operations - Grades

// Step a: Create an array with at least six numerical values
let grades = [85, 42, 76, 90, 58, 67];

// Step b: Function to calculate the average grade
function calculateAverage(gradesArray) {
    let sum = 0;

    // Calculate the total sum using a for...of loop
    for (let grade of gradesArray) {
        sum += grade;
    }

    let average = sum / gradesArray.length;

    // Round to one decimal place only if the sum is an odd number
    if (sum % 2 !== 0) {
        average = average.toFixed(1);
    }

    return average;
}

// Step c: Create a new array with grades >= 50 using filter
let passingGrades = grades.filter(function(grade) {
    return grade >= 50;
});

// Print both arrays and the average
console.log("All Grades:", grades);
console.log("Passing Grades:", passingGrades);
console.log("Average Grade:", calculateAverage(grades));
