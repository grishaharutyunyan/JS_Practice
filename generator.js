// function* foo(){
//     let a = yield 1 ;
//     let b = yield a ;
//     let c = yield b ;
//     return c ;
// }


// let obj = foo()
// console.log(obj.next(2))
// console.log(obj.next(3))
// console.log(obj.next(4))
// console.log(obj.next(5))


// function* foo(){
//     let a = yield 1 ;
//     let b = yield* [22,44,55];
//     let c = yield 33;
//     return c ;
// }


// let obj = foo()
// console.log(obj.next(2))
// console.log(obj.next(3))
// console.log(obj.next(4))
// console.log(obj.next(5))
// console.log(obj.next(3))
// console.log(obj.next())


// function* foo(){
//     let a = yield 1 ;
//     let b = yield* [22,44,55];
//     let c = yield* foo();
//     return c ;
// }


// let obj = foo()
// console.log(obj.next(2))
// console.log(obj.next(3))
// console.log(obj.next(4))
// console.log(obj.next(5))
// console.log(obj.next(3))
// console.log(obj.next())

//.......................................................


// function*  renge(n){
//     if(n < 0){
//         return ;
//     }

//     yield *renge(n-1)
//     yield n;
// }

// let obj = renge(5);
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())

// for(let i of obj) {
//     console.log(i)
// }




// let obj = {
//     from: 0,
//     to: 10,
//     [Symbol.iterator]() {
//         return {
//             next: () => {
//                 if (this.from > this.to) {
//                     return { value: undefined, done: true };
//                 } else {
//                     return { value: this.from++, done: false };
//                 }
//             }
//         };
//     }
// };

// for (let i of obj) {
//     console.log(i);
// }

// let obj = {
//     from: 0,
//     to: 10,
//     *[Symbol.iterator]() {   
//         while (this.from <= this.to) {
//             yield this.from++;
//         }
//     }
// };

// for (let i of obj) {
//     console.log(i);
// }

