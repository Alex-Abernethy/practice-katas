let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 6, 3, 4, 5, 7]

// log original array
console.log('original array ' + //code goes here)

// access first item in array
var firstItem = //code goes here
console.log('first item ' + firstItem)

// access last item in array
var lastItem = //code goes here;
console.log('first item ' + lastItem)

// sum values of array
function sumArray(accumulator, currentValue) {
  //code goes here
}

console.log("summed array " + array.reduce(sumArray))

// concat values of array
console.log("concat array " + //code goes here)

// concat values of array using reduce
var concatArray = array.reduce(function (prevVal, currVal, idx) {
  //code goes here
}, '')

console.log('reduce concat array ' + concatArray);

// return odd values from array
function odds(index) {
  //code goes here
}

var oddArray = array.filter(odds)

console.log('odd number filtered array ' + oddArray)

// return even values from array
function evens(index) {
  //code goes here
}

var evenArray = array.filter(evens)

console.log('even number filtered array ' + evenArray)

// return array values multiplied by 2
function multiplyByTwo(num) {
  //code goes here
}

var multipliedArray = array.map(multiplyByTwo)

console.log('array multiplied by two ' + multipliedArray)

// return array values divided by 2
function divideByTwo(num) {
  //code goes here
}

var dividedArray = array.map(divideByTwo)

console.log('array divided by two ' + dividedArray)

// loop over an array return index and item
console.log('index and item pairs')
array.forEach(function (item, index) {
  console.log(//code goes here);
})

// add value 100 to end of array
//code goes here
console.log('100 pushed to array ' + array)

// find index of 100 pushed above
console.log('index of 100 in array ' + //code goes here)

// copy array as new variable newArray
var newArray = //code goes here
console.log('newArray = ' + newArray)

// use array.some to test is array contains even numbers
console.log('returns true if array contains even numbers: ' + //code goes here)

// use array.from to make array from string
console.log(Array.from('string'))

// turn string into an array and double each index
var string = "1234"
console.log('string = ' + string)
console.log('string turn into array and each value doubled = ' + //code goes here)