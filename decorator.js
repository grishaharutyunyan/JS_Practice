// function fibNum(num){
//     if(num < 0 ) return -1;
//     if(num < 2 ) return num;
//     return fibNum(num-1) + fibNum(num-2);
// }

// function dec(foo){
//     let cache = new Map();
//     return function(arg){
//         if(cache.has(arg)) {
//             return cache.get(arg);
//         }else{
//         let res = foo(arg);
//         cache.set(arg, res);
//         return res;
//     }
       
//     }
    

// }

// let moo = dec(fibNum);
// console.log(moo(40));
// console.log(moo(40));

//=================================



function fib(n) {
    return n <= 1 ? n : fib(n-1) + fib(n-2);
}

function decorator(foo) {
    let cache = new Map();
    return function(arg) {
        if (cache.has(arg)) {
            return cache.get(arg);
        }
        let res = foo(arg);
        cache.set(arg, res);
        return res;
    };
}

const dfib = decorator(fib);
console.log(dfib(44));
console.log(dfib(44));