/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. 
First argument is an array of numbers and the second is the divisor.

Example:
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6] 
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let divisor = 5;

function divisibleBy(numbers, divisor) {
    return numbers.filter(function (number) {
        return number % divisor === 0;
    });
}