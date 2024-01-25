// function deepCopy(object){
//     if(typeof object!=='object' || object===null){
//         return object
//     }
//     let obj = Object.getOwnPropertyDescriptors(object);
//     let copy = Array.isArray(object) ? [] : {}
//     for(let prop in obj){
//         if(typeof obj[prop].value === 'object'){
//             Object.defineProperty(copy,prop,{
//                 value:deepCopy(obj[prop].value),
//                 writable: obj[prop].writable,
//                 enumerable: obj[prop].enumerable,
//                 configurable: obj[prop].configurable
//             })
//         }else if(typeof obj[prop].value === 'function'){
//             Object.defineProperty(copy,prop,{
//                 value: new Function("return "+obj[prop].value)(),
//                 writable: obj[prop].writable,
//                 enumerable: obj[prop].enumerable,
//                 configurable: obj[prop].configurable
//             })
//         }else{
//             Object.defineProperty(copy,prop,obj[prop])
//         }
//     }
//     Object.setPrototypeOf(copy,Object.getPrototypeOf(object))
//     return copy
// }


// function deepcopy(obj){
//     let copy = Array.isArray(obj) ? []: {};
//     for(let key in obj){
//         if(typeof obj[key] === "object"){
//             copy[key] = deepcopy(obj[key]);
//         }else{
//             Object.defineProperty(copy,key,Object.getOwnPropertyDescriptor(obj, key))
//         }
//     }
//     return copy;
// }
// let obj = {
//     name:"alex",
//     asd: {asd:"sfsgg"},
//     friends:["aa","bbb"],
//     car:{
//         mark:"swwsw",
//         color:{
//             hh:{
//                 aa:"s"
//             }
//         }
//     },
//     foo:function(){
//         return 5
//     },
//     moo(){
//         console.log("shv")
//     }
// }










// deepCopy()
// function deepCopy(obj){
//     if(typeof obj!=="object" || obj===null){
//         return obj;
//     }
//     let copy=Array.isArray(obj) ? [] : {}
//     for(let prop in obj){
//         if(typeof obj[prop]==="object"){
//             copy[prop]=deepCopy(obj[prop]);
//         }else if(typeof obj[prop]==="function"){
//             copy[prop]=new Function("return "+obj[prop]())
//         }else{
//             copy[prop]=obj[prop]
//         }
//     }
//     return copy
// }
// let obj = {
//     name:"alex",
//     friends:["aa","bbb"],
//     car:{
//         mark:"swwsw",
//         color:{
//             hh:{
//                 aa:"s"
//             }
//         }
//     },
//     foo:function(){
//         return 5
//     }
// }
// let a = deepCopy(obj)
// console.log(a)



