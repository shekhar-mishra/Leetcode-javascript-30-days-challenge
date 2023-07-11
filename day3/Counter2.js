// 2665. Counter II


// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// Example: 
//  Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4


const createCounter = function (initialvalue) {
    let counter=initialvalue
    if(!initialvalue){
        return "Operation not possible"
    }
    
    const increment = ()=>{
        return ++counter
    }
    
    const decrement = ()=>{
       return --counter
    }
    
    const reset = ()=>{
      counter=initialvalue;
      return counter  
    }
    
    return {
        increment:increment,
        decrement:decrement,
        reset:reset
    }
}
const counter = createCounter(5)
 console.log( counter.increment())
  console.log(counter.reset())
 console.log( counter.decrement())
 
 const counter2 = createCounter(1)
 console.log( counter2.increment())
  console.log(counter2.reset())
 console.log( counter2.decrement())


