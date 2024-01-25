// const button = document.getElementById('myButton');
// const counter = document.getElementById('counter');
//
// button.addEventListener('click', function () {
//  alert('Click button event');
// });


// let i = 0;
// let start = Date.now();
// // 1.400 ms
// function count() {
//  do {
//     i++;
//  } while (i % 1e9 !== 0);
//  alert("Done in " + (Date.now() - start) + 'ms');
// }
//
// count();




// let i = 0;
// let start = Date.now();
// // 11213ms
// function count() {
//  if (i < 1e9 - 1e6) {
//     setTimeout(count);
//  }
//
//  do {
//     i++;
//  } while (i % 1e6 !== 0);
//
//  if (i === 1e9) {
//     alert("Done in " + (Date.now() - start) + 'ms');
//  }
// }
// count();





// let i = 0;
// function count() {
//  do {
//     i++;
//     counter.innerHTML = i;
//  } while (i % 1e6 !== 0);
// }
//
// count();




// let i = 0;
// function count() {
//  do {
//     i++;
//  } while (i % 1000 !== 0);
//  counter.innerHTML = i;
//
//  if (i < 1e6) {
//     setTimeout(count);
//  }
// }
//
// count();


// setTimeout()
// setInterval()  -> makcrotask queue
//
// promise      -> mikcrotask queue



// let i = 0;
//
// function count() {
//  do {
//     i += 10;
//  } while (i % 1e3 !== 0);
//  counter.innerHTML = i;
//
//  if (i < 1e6) {
//     queueMicrotask(count);
//  }
// }
//
// count()












// let obj = {
//  from: 5,
//  to: 15,
//  [Symbol.iterator]() {
//     return {
//        current: this.from,
//        last: this.to,
//        next() {
//           if (this.current <= this.last) {
//              return { done: false, value: this.current++ };
//           } else {
//              return { done: true };
//           }
//        }
//     };
//  }
// };
//
// // 1 obj -> Symbol.iterator() -> { next(){...} }
// // 2 -> ~  every iteration -> next() -> { done: boolean, value?: any } -> for-of-value
//
// for (let value of obj) {
//  console.log('value', value);
// }
//
// let obj = {
//  str: 'Hello World',
//  [Symbol.iterator]() {
//     return {
//        index: -1,
//        str: this.str,
//        next() {
//           if (this.index !== this.str.length - 1) {
//              this.index++;
//              return { done: false, value: this.str[this.index] };
//           } else {
//              return { done: true };
//           }
//        }
//     };
//  }
// };

// 1 obj -> Symbol.iterator() -> { next(){...} }
// 2 -> ~  every iteration -> next() -> { done: boolean, value?: any } -> for-of-value

// for (let value of obj) {
//  console.log('value', value);
// }
//
// console.log('iterator for array', [...obj]);
// console.log('shallow copy by spread operator', {...obj});


// Generator Function
// function* gen() {
//  yield 1;
//  yield 2;
//  // yield 3;
//  return 3;
//  // return undefined;
// }

// let generator = gen(); // Generator Object, generator.toString() -> "[object Generator]"
// alert(generator);
// console.log(generator);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return());
// console.log(generator.next());
// console.log(generator.throw(new Error('my error')));
// console.log(generator.next());


// function* gen() {
//  yield 1;
//  yield 2;
//  yield 3;
//  // return 3;
// }
//
// let generator = gen();

// for(let value of generator) {
//  console.log('iteration', value);
// }

// let arr = [0, ...generator, 4, 5, 6];
// console.log(arr);


// function* gen(arr) {
//  for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//        yield arr[i] * arr[i];
//     }
//  }
// }
// const generator = gen([1,2,3,4,5,6,7]);
// let arr = [...generator]
// console.log(arr);

// function* gen(start, end) {
//  for (let i = start; i <= end; i++){
//     yield i;
//  }
// }
// const generator = gen(1, 100);
// let arr = [...generator]
// console.log(arr);

// let obj = {
//  from: 1,
//  to: 5,
//  foo: function* () {
//     // ...
//  },
//  *moo() {
//     // ...
//  },
//  *[Symbol.iterator]() {
//     for(let value = this.from; value <= this.to; value++){
//        yield value
//     }
//  }
// };
// obj.foo() // -> Generator
// obj.moo() // -> Generator
// console.log( [...obj] );
//
//
//
// function* gen() {
//  try {
//     const result1 = yield 'How are you?';
//     const result2 = yield 'How old are you?';
//     console.log('result1', result1);
//     console.log('result2', result2);
//  } catch(e) {
//     console.log(e);
//  }
// }
// //
// let generator = gen();
// // // first next -> generator.next() => { done: false, value: 'How are you?' }
// console.log('first call generator.next().value', generator.next().value);
// console.log('second call generator.next().value', generator.next('I`m fine').value);
// // console.log('third call generator.next().value', generator.next('I`m 29').value);
// generator.throw(new Error("Something bad happened"));
// async await
// then
// catch
// finally

// async function foo () {
//  return 123;
// }

// const val = await foo();


// (async function() {
    // let files = [
    //     '/test.json',
    //     '/test2.json',
    //     '/test3.json',
    // ]
    // try {
    //     // const arr = await Promise.all(files.map((filePath) => fetch(filePath)));
    //     const val = await Promise.reject(8);
    //     console.log('value', arr);
    // } catch (err) {
    //     console.error('error', err);
    // } finally {
    //     console.log(123);
    // }
    //
    // async function f() {
    //     return Promise.all(files.map((filePath) => fetch(filePath)));
    // }

    // await f();
// })()
// Promise API

// let p = new Promise((res, rej) => {
//  res(7);
// });
// let p = Promise.resolve(7);
// let p = Promise.reject(new Error(''));


// Promise.all([
//  // new Error('afdsdfsdf'),
//  Promise.resolve(2),
//  Promise.resolve(3),
// ]).then((result) => {
//  console.log(result);
// }).catch((e) => {
//  console.log(e);
// });


// let files = [
//  '/test.json',
//  '/test2.json',
//  '/test3.json',
// ]
// [
//  fetch('/test.json'),
//  fetch('/test5.json'),
//  fetch('/test3.json'),
// ]

// let promises = Promise.all(files.map((filePath) => {
//  return fetch(filePath);
// }));
// let promises = Promise.all([
//  Promise.reject(new Error('Rejected')),
//  fetch('/test.json'),
//  fetch('/test2.json'),
// ]);
// promises.then((result) => {
//  console.log(result);
// }).catch((err) => {
//  console.log(err);
// })

// let promises = Promise.race([
//  fetch('/test.json'),
//  fetch('/test2.json'),
//  Promise.reject(new Error('Rejected')),
// ]);
// promises.then((result) => {
//  console.log(result);
// }).catch((err) => {
//  console.log(err);
// })


// let promises = Promise.allSettled([
//  fetch('/test.json'),
//  Promise.reject(new Error('Rejected')),
//  fetch('/test2.json'),
// ]);
// promises.then((result) => {
//  console.log(result);
// }).catch((err) => {
//  console.log(err);
// });
//
// Promise.resolve();
// Promise.reject();
// Promise.all();
// Promise.race();
// Promise.any();
// Promise.allSettled();

// PromiseSettledResponse
// [
    // {
    //     status: fulfilled, rejected,
    //     value:
    //     reason:
    // }
// ]

//
// const allSettled = Promise.all(files.map((filePath) => {
//  return fetch(filePath)
//     .then((res) => {
//        if (res.status === 404) {
//           throw new Error('chka')
//        }
//
//        return {
//           status: 'fulfilled',
//           value: res
//        }
//  }).catch((err) => {
//        return {
//           status: 'rejected',
//           reason: err
//        }
//  })
// }));
//
// allSettled.then((res) => {
//  console.log(res);
// })