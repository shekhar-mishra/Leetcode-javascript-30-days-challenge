// 2667. Create Hello World Function

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".

// Note:==> This problem is based on Closures.

//  When a function is created, it has access to a reference to all the variables declared around it,
//  also known as it's lexical environment. The combination of the function and its enviroment is called a closure. This is a powerful and often used feature of the language.

const createHelloWorld = function () {
    return function () {
        return "Hello World!"
    }
}

const f1 = createHelloWorld();
console.log("calling createHelloworld function that will return ------",f1());
