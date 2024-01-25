let obj = {
    name: "Alo",
    age: 18,
    phone : 2 ,
    bool : 1 ,
}
Object.defineProperties(obj, {
    last_name: {
        value: "Aloyan",
        writable: true, 
        enumerable: true, 
        configurable: true,
    }
});

console.log(obj);

let boo = Object.getOwnPropertyDescriptors(obj);
console.log(boo)

console.log(Object.isFrozen(obj));

Object.defineProperties(obj, {
    phone: {
        value: 3,
        writable: true, 
        enumerable: true, 
        configurable: false,
    }
});

console.log(obj)
delete obj.phone ;
console.log(obj)

delete obj.bool 
console.log(obj)


Object.preventExtensions()