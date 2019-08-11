// set an array
const array = [1, 2, 3, 4, 5]

// find index of 4 in array
console.log('index of #4 is ' + array.findIndex(x => x == 4))

// map an array
const map = array.map(i => i + 1);
console.log('mapped ' + map)

// filters on an array
const odds = array.filter(i => { return i % 2 !== 0 })
console.log('odds ' + odds)

const evens = array.filter(i => i % 2 == 0)
console.log('evens ' + evens)

// reduce array
const reducedSum = array.reduce((total, amount) => total + amount)
console.log('reduced sum ' + reducedSum)

// set variables
const a = 8;
const b = 2;

// add up a and b
const sum = (a, b) => { return a + b };
console.log('added ' + sum(a, b));

// divide a by by
const div = (a, b) => { return a + b };
console.log('divided ' + div(a, b));

// concat a and b
const concat = (a, b) => { return '' + a + b };
console.log('concat ' + concat(a, b));

// set a string
const string = "the quick brown fox jumped over the lazy dog"

// split a string
const splitString = (string) => string.split(' ')
console.log('split string ' + splitString(string))

// split and filter string
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);