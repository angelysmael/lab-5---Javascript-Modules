// Array Manipulation - Shopping List

// Step a: Create an array with at least five items
let shoppingList = ["milk", "bread", "eggs", "butter", "apples"];

// Step b: Function to manage the shopping list
function manageShoppingList() {
    // Add a new item to the end of the list
    shoppingList.push("cheese");

    // Remove the first item from the list
    shoppingList.shift();

    // Add an item called "extraItem" but do not include "extraItem" in the final list or print it.
    // shoppingList.push("extraItem");

    // Use a for...of loop to print each item in the list
    for (let item of shoppingList) {
        console.log(item);
    }
}

// Call the function to test it
manageShoppingList();
