/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

const findShort = str => {
    let words = str.split(' ');
    let shortest = words.reduce((shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest.length;
};