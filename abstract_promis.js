// class AbstractClass {
//  constructor(name) {
//     if (this.constructor === AbstractClass) {
//        throw new Error('You cant use abstract class');
//     }
//
//     this.name = name;
//  }
//  sayName() {
//     throw new Error('This method is abstract');
//  }
// }
//
// class Dog extends AbstractClass {
//  constructor(...args) {
//     super(...args);
//  }
//  sayName () {
//     return this.name;
//  }
// }
//
// let obj = new Dog('Mailo');
// console.log(obj.sayName());
// console.log(obj);





// function moo(){
//  console.log(2);
// }
//
// setTimeout(function (cb) {
//  console.log(1);
//  cb();
// }, 0, moo);


// console.log(1);
//
// setTimeout(function () {
//  console.log(2);
// }, 0);
// setTimeout(function () {
//  let arr = [];
//  for (let i = 0; i < 1e7; i++) {
//     arr.push(i);
//  }
//  console.log(1);
// }, 0);
//
// console.log(4);




// const idI = setInterval(function () {
//  console.log('interval');
// }, 1000);
//
//
// const idT = setTimeout(function () {
//  clearInterval(idI)
// }, 5000);
// clearTimeout(idT);

// const idI = setInterval(function () {
//  console.log('interval');
// }, 1000);


// let idT = setTimeout(function foo () {
//  console.log(new Date().getTime());
//  idT = setTimeout(foo, 0)
// }, 0);
//
// setTimeout(() => {
//  clearTimeout(idT);
// }, 5000)

// const id = setInterval(() => {
//  console.log(new Date().getTime());
// }, 0);
//
// setTimeout(() => {
//  clearTimeout(id);
// }, 3000)


// class AbstractClass {
//  constructor(name) {
//     if (this.constructor === AbstractClass) {
//        throw new Error('You cant use abstract class');
//     }
//
//     this.name = name;
//  }
//  sayName() {
//     throw new Error('This method is abstract');
//  }
// }
//
// class Dog extends AbstractClass {
//  constructor(...args) {
//     super(...args);
//  }
//  sayName () {
//     return this.name;
//  }
// }
//
// let obj = new Dog('Mailo');
// console.log(obj.sayName());
// console.log(obj);





// function moo(){
//  console.log(2);
// }
//
// setTimeout(function (cb) {
//  console.log(1);
//  cb();
// }, 0, moo);


// console.log(1);
//
// setTimeout(function () {
//  console.log(2);
// }, 0);
// setTimeout(function () {
//  let arr = [];
//  for (let i = 0; i < 1e7; i++) {
//     arr.push(i);
//  }
//  console.log(1);
// }, 0);
//
// console.log(4);




// const idI = setInterval(function () {
//  console.log('interval');
// }, 1000);
//
//
// const idT = setTimeout(function () {
//  clearInterval(idI)
// }, 5000);
// clearTimeout(idT);

// const idI = setInterval(function () {
//  console.log('interval');
// }, 1000);


// let idT = setTimeout(function foo () {
//  console.log(new Date().getTime());
//  idT = setTimeout(foo, 0)
// }, 0);
//
// setTimeout(() => {
//  clearTimeout(idT);
// }, 5000)

// const id = setInterval(() => {
//  console.log(new Date().getTime());
// }, 0);
//
// setTimeout(() => {
//  clearTimeout(id);
// }, 3000)









// for (let i = 0; i < 5; i++) {
//  setTimeout(() => {
//     console.log(i);
//  }, 1000);
// }

// executor

// const p = new Promise(function(resolve, reject) {
//  // resolve();
//  // reject(new Error('Some error'));
//  // throw new Error('For Aram');
// });
//
// console.log(p);


// {
//  state: panding, fulfilled, rejected
//  result: undefined,
// }


// let count = 10;
// let p = new Promise(function(resolve, reject){
//  let count = 0;
//  let t = setTimeout(function foo() {
//     ++count;
//     if (count > 18 && count < 21) {
//        clearTimeout(t);
//        resolve(count);
//     }
//     t = setTimeout(foo, 100);
//  }, 100);
// });
// console.log(p);

// p.finally(() => {
//  console.log('This is finally block');
//  return 'abc';
// }).then((result) => { console.log('result', result); }, (error) => { console.log('error', error); })

// p.finally(() => {
//  console.log('This is finally block');
//  return 'abc';
// }).then((result) => {
//  console.log('then1', result);
//  return new Promise((resolve, reject) => {reject(++result)});
//  return ++result;
// }).catch((error) => {
//  console.log('error', error);
// });


// p.finally(() => {
//  console.log('finally');
//  return 'ignored';
// }).then((res) => {
//  console.log('then1');
//  console.log(res);
//  return ++res;
// }).then((res) => {
//  console.log('then2');
//  console.log(res);
//  return res;
// }).catch((err) => {
//  console.log('catch');
//  console.log(err);
// })

// Promisify

// fetch('/test.json')
// .then((res) => {
//  console.log('Response', res);
//  return res.json();
// })
// .then((res) => {
//  console.log('then1');
//  console.log(res);
//  res.age = res.age + 1;
//  return res;
// }).then((res) => {
//  console.log('then2');
//  console.log(res);
//  res.age = res.age + 1;
//  return res;
// }).then((res) => {
//  console.log('then3');
//  console.log(res);
//  res.age = res.age + 1;
//  return res;
// });

// class MyError extends Error {
//  code = 0;
//  constructor (message, code) {
//     super(message);
//     this.code = code;
//  }
// }






// new Promise(function(resolve, reject){
//  setTimeout(() => {
//     resolve(1);
//     // reject(new MyError('p error', 0))
//  }, 100);
// }).then((res) => {
//  const error = new MyError('then1 error',1);
//
//  throw error;
//  return res;
// }).then((res) => {
//  throw new MyError('then2 error',2);
//  return res;
// }).then((res) => {
//  throw new MyError('then3 error',3);
//  return res;
// }).catch((err) => {
//  if (err instanceof MyError) {
//     console.log('My error');
//  }
//  console.log(JSON.stringify(err));
// })


//
// try {
//  fetch('/test2.json')
//     .then((res) => {
//        console.log('Response', res);
//        if(res.status !== 404) {
//           return res.json();
//        }
//        console.error(res.statusText);
//     })
// } catch (err) {
//  console.log(err);
// }