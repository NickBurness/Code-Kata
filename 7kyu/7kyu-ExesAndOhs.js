/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

const XO = str => {
    matchingChar = str.toLowerCase()
    let x = 0;
    let o = 0;
    for (let i = 0; i < matchingChar.length; i++) {
        if (matchingChar[i] === 'x') {
            x++;
        } else if (matchingChar[i] === 'o') {
            o++;
        }
    }
    return x === o
};