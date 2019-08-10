let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 6, 3, 4, 5, 7]

console.log('original array ' + array)

function sumArray(accumulator, currentValue) {
  return accumulator += currentValue
}

console.log("summed array " + array.reduce(sumArray))

console.log("concat array " + array.join(''))

var concatArray = array.reduce(function (prevVal, currVal, idx) {
  return idx == 0 ? currVal : prevVal + '' + currVal;
}, '')

console.log('reduce concat array ' + concatArray);

function odds(index) {
  return (index % 2 !== 0);
}

var oddArray = array.filter(odds)

console.log('odd number filtered array ' + oddArray)

function evens(index) {
  return (index % 2 === 0);
}

var evenArray = array.filter(evens)

console.log('even number filtered array ' + evenArray)

function multiplyByTwo(num) {
  return num * 2
}

var multipliedArray = array.map(multiplyByTwo)

console.log('array multiplied by two ' + multipliedArray)

function divideByTwo(num) {
  return num / 2
}

var dividedArray = array.map(divideByTwo)

console.log('array divided by two ' + dividedArray)