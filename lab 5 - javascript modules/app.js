import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, findMin, reverseArray } from './arrayModule.js';

console.log('Add: ', add(6, 25));
console.log('Subtract: ', subtract(67, 24));
console.log('Multiply: ', multiply(7, 13));

console.log('Uppercase: ', toUpperCase('basketball'));
console.log('Lowercase: ', toLowerCase('basketball'));

console.log('Max: ', findMax([1, 2, 3, 4, 5]));
console.log('Reversed:', reverseArray([1, 2, 3, 4, 5]));

addAndLogUpper(10,20);

const numbers = [20, 5, 18, -1, 2];
const maxValue = findMax(numbers);
const minValue = findMin(numbers);
const product = multiply(maxValue, minValue);
const finalOutput = toUpperCase(product.toString());

console.log('Numbers in the array: ', numbers);
console.log('Max number: ', findMax(numbers));
console.log('Min number: ', findMin(numbers));
console.log('Final Challenge Output: ', finalOutput);
