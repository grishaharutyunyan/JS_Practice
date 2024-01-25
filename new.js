// let obj = {
//      name : "A" ,
//      foo(){
//         return this.name
//      }
// }

// let obj1 = {
//     name : "B" ,
//     foo(){
//         return super.foo()
//     },
//     __proto__ : obj ,
// }

// let obj2 = {
//      name : "C" ,
//      foo(){
//         return super.foo()
//      },
//      __proto__ : obj1 
// }


// console.log(obj.foo())
// console.log(obj1.foo())
// console.log(obj2.foo())

let obj = {
    name: 'James',
    foo(){
        return this.name
    }
}
let obj1 = {
    name: 'Oliver',
    foo(){
        return super.foo()
    },
    __proto_: obj
}
let obj2 = {
    name: 'Sergey',
    foo(){
        return super.foo()
    },
    _proto_: obj1
}
console.log(obj.foo())
// console.log(obj1.foo())
// console.log(obj2.foo())
