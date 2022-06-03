/*
    CIT 281 Project 2
    Name: Qiqi Ma
*/

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alph = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";
let lengthOfOutputString = getRandomInteger(5, 26);
for (let i = 0; i < lengthOfOutputString; i++) {
    result += alph[getRandomInteger(0,alph.length)];
};
console.log(result);

//function getRandomLetter() that will return a single, random, lowercase letter.
function getRandomLetter(){
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    let randomLetter = (alph.charAt(Math.floor(Math.random() * (alph.length))));
    return randomLetter;
};
for (let i = 0; i < 1; i++) {
    console.log(getRandomLetter());
};

//function getRandomString(minLength, maxLength) that will return the random length string.
function getRandomString(minLength, maxLength) {
  let randomString = getRandomInteger(minLength, maxLength);
  let result = "";
  for (let i = 0; i < randomString; i++) {
      result += getRandomLetter();
  }
  return result;
};
console.log(getRandomString(10,20));

//function getSortedString(string) that will return a string in ascending order (i.e., xpacd would return acdpx)
function getSortedString(){
  return getRandomString(10,20).split("").sort().join("");
}
console.log(getSortedString());