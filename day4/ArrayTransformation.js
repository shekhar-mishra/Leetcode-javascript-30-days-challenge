// 2635. Apply Transform Over Each Element in Array

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 

// Example -2

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

let arr = [4,5,6];
 let fn = function plusone(n) { return n + 1; }

var map = function(arr, fn) {
    let resultArrayToBeReturn = []
    for(let i=0;i<arr.length;i++){
        resultArrayToBeReturn.push(fn(arr[i],i))
    }
    return resultArrayToBeReturn;
};

console.log("-----Map===",map(arr, fn))