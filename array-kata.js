let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 6, 3, 4, 5, 7]

// log original array
console.log('original array ' + array)

// access first item in array
var firstItem = array[0];
console.log('first item ' + firstItem)

// access last item in array
var lastItem = array[array.length - 1];
console.log('first item ' + lastItem)

// sum values of array
function sumArray(accumulator, currentValue) {
  return accumulator += currentValue
}

console.log("summed array " + array.reduce(sumArray))

// concat values of array
console.log("concat array " + array.join(''))

// concat values of array using reduce
var concatArray = array.reduce(function (prevVal, currVal, idx) {
  return idx == 0 ? currVal : prevVal + '' + currVal;
}, '')

console.log('reduce concat array ' + concatArray);

// return odd values from array
function odds(index) {
  return (index % 2 !== 0);
}

var oddArray = array.filter(odds)

console.log('odd number filtered array ' + oddArray)

// return even values from array
function evens(index) {
  return (index % 2 === 0);
}

var evenArray = array.filter(evens)

console.log('even number filtered array ' + evenArray)

// return array values multiplied by 2
function multiplyByTwo(num) {
  return num * 2
}

var multipliedArray = array.map(multiplyByTwo)

console.log('array multiplied by two ' + multipliedArray)

// return array values divided by 2
function divideByTwo(num) {
  return num / 2
}

var dividedArray = array.map(divideByTwo)

console.log('array divided by two ' + dividedArray)