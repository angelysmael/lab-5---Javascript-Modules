function favoriteFruits(fruits) {
    // Loop through each fruit in the array
    for (let i = 0; i < fruits.length; i++) {
        let fruit = fruits[i];

        switch (fruit) {
            case "apple":
                console.log("Apples keep the doctors away!");
                break;
            case "banana":
                console.log("Bananas keep the cramps away!");
                break;
            case "grape":
                console.log("Grapes are nature's candy!");
                break;
            case "mango":
                console.log("Mangoes rule the fruit kingdom with sweetness!");
                break;
            default:
                console.log("I like all other fruits!");
                break;
        }

        // mango is the king of fruits
    }
}

// Example test
favoriteFruits(["apple", "banana", "grape", "mango", "orange"]);