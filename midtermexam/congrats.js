// Higher Order Function - Sorting Students

// Given array of student objects
const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "David", grade: 88 }
];

// Function to sort students by grade in descending order
function sortStudents(studentArray) {
    // Sort the array using a higher-order function
    studentArray.sort(function(a, b) {
        return b.grade - a.grade;
    });

    // Check if the highest grade exceeds 90
    if (studentArray[0].grade > 90) {
        console.log("Congratulations, Top Student!");
    }

    // Print the sorted list
    for (let student of studentArray) {
        console.log(student.name + ": " + student.grade);
    }
}

// Call the function
sortStudents(students);
