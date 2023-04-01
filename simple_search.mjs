const tableau = new Array(100000).fill().map((x,i) => i + 1);
const numberToGuess = Math.floor(Math.random()*100)

let numberOfTries = 0;

console.log('numberToGuess : ', numberToGuess);

function simpleSearch(tableau, numberToGuess) {
    for(let i = 0; i < tableau.length; i ++) {
        numberOfTries ++;
        if(tableau[i] === numberToGuess) {
           return i
        } 
    }
}

const start = performance.now();
const result = simpleSearch(tableau, numberToGuess);
const end = performance.now();
console.log("simple searche time: " , end - start );
console.log('result : ', result);
console.log('result : ', tableau[result]);
console.log("numberOfTries", numberOfTries);