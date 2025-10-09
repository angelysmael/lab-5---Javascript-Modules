const input = prompt('Enter a number (1-7) for the day of the week:');
const number = parseInt(input, 10);

let message;

if (Number.isNaN(number)) {
    message = 'Please enter a valid number.';
} else {
    switch (number) {
        case 1:
            message = 'Day 1 is Sunday.';
            break;
        case 2:
            message = 'Day 2 is Monday.';
            break;
        case 3:
            message = 'Day 3 is Tuesday.';
            break;
        case 4:
            message = 'Day 4 is Wednesday.';
            break;
        case 5:
            message = 'Day 5 is Thursday.';
            break;
        case 6:
            message = 'Day 6 is Friday.';
            break;
        case 7:
            message = 'Day 7 is Saturday.';
            break;
        default:
            message = 'Number must be between 1 and 7.';
    }
}

console.log(message);
alert(message);
document.body.insertAdjacentHTML('beforeend', `<p>${message}</p>`);

// Loop practice: print numbers 1 to 5 using for, while, and do...while
document.body.insertAdjacentHTML('beforeend', '<h2>Loop examples (1 to 5)</h2>');

// For loop
document.body.insertAdjacentHTML('beforeend', '<p>For loop:</p>');
for (let i = 1; i <= 5; i++) {
    console.log('for:', i);
    document.body.insertAdjacentHTML('beforeend', `<span>${i} </span>`);
}
document.body.insertAdjacentHTML('beforeend', '<br>');

// While loop
document.body.insertAdjacentHTML('beforeend', '<p>While loop:</p>');
let j = 1;
while (j <= 5) {
    console.log('while:', j);
    document.body.insertAdjacentHTML('beforeend', `<span>${j} </span>`);
    j++;
}
document.body.insertAdjacentHTML('beforeend', '<br>');

// Do...while loop
document.body.insertAdjacentHTML('beforeend', '<p>Do...while loop:</p>');
let k = 1;
do {
    console.log('do-while:', k);
    document.body.insertAdjacentHTML('beforeend', `<span>${k} </span>`);
    k++;
} while (k <= 5);

