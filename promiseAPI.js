// The new promise resolves when all listed promises are resolved, 
// and the array of their results becomes its result.
// If any of the promises is rejected, 
// the promise returned by Promise.all immediately rejects with that error.

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
])
.then((val) => console.log(val)); //  [1, 2, 3]




// Promise.allSettled just waits for all promises to settle,
// regardless of the result. The resulting array has:
// {status:"fulfilled", value:result} for successful responses,
// {status:"rejected", reason:error} for errors.

Promise.allSettled([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 2000))
]).then((res)=> console.log(res)); // [{…}, {…}, {…}] status, value/reason
    



// Promise.race is similar to Promise.all,
// but waits only for the first settled promise and gets its result (or error).

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 2000))
]).then((res)=> console.log(res)); // Whoops! (After the first settled promise “wins the race”, all further results/errors are ignored)




// Promise.any is similar to Promise.race,
// but waits only for the first fulfilled promise and gets its result. 
// If all of the given promises are rejected, 
// then the returned promise is rejected with AggregateError 

Promise.any([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 2000))
]).then((res)=> console.log(res)); // 3

