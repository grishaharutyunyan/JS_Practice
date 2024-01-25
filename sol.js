/////// class to function constructor

// function Animal(name,age){
//     this.name = name;
//     this.age = age;
//     Object.defineProperty(Animal,"isAnimal",{
//         value: function(obj){
//             return obj.constructor === Animal;
//         },
//         writable: true,
//         enumirable: false,
//         configurable: true,
//     })
//     Object.defineProperties(Animal.prototype,{
//         "barev":
//         {
//             value: function(){
//                 console.log("hello");
//             },
//             writable: true,
//             enumirable: false,
//             configurable: true
//         }
//     })
// }
// function Cat(name,surname,age){
//     Animal.call(this,name,age);
//     this.surname = surname;
//     Object.defineProperties(Cat.prototype,{
//         "barev":
//         {
//             value: function(){
//                 console.log("Barev i am cat");
//             },
//             writable: true,
//             enumirable: false,
//             configurable: true
//         }
//     });
//     Object.defineProperty(Cat,"isAnimal",{
//         value: function(obj){
//             return obj.constructor === Cat;
//         },
//         writable: true,
//         enumirable: false,
//         configurable: true,
//     })
// }
// Cat.__proto__ = Animal;
// Cat.prototype.__proto__ = Animal.prototype;
// let animal = new Animal()
// let cat = new Cat("aaa","bbb",12);
// console.log(Cat.isAnimal(cat))








//abstract class ...........


// class Abstract_Animal{
//     constructor(man,age){
//          if(this.constructor === Abstract_Animal){
//             throw new Error("You cant call .....")
//          }
//          this.man = man;
//          this.age= age;
//     }
    
//     say_name(){
//         throw new Error("This method is abstract")
//     }
//     say_age(){
//         throw new Error("This method is abstract")
//     }
    
// }


// class Dog extends Abstract_Animal{
//     constructor(man,age,owner){
//         super(man,age)
//         this.owner = owner
//     }
//     say_name(){
//         return this.man + this.owner
//     }

//     say_age() {
//          return this.age
//     }
// }

// let d = new Dog("Zeus",16,"Ter");
// console.log(d)
// console.log(d.say_name())
// console.log(d.say_age());



// / let obj = {
//         from: 0,
//         to: 10,
//         [Symbol.iterator]() {
//             return {
//                 next: () => {
//                     if (this.from > this.to) {
//                         return { value: undefined, done: true };
//                     } else {
//                         return { value: this.from++, done: false };
//                     }
//                 }
//             };
//         }
//     };
    
//     for (let i of obj) {
//         console.log(i);
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
    
    // function fetchData(delay, shouldSucceed) {
    //     return new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         if (shouldSucceed) {
    //           resolve("Data fetched successfully");
    //         } else {
    //           reject("ShouldSucess is false ");
    //         }
    //       }, delay);
    //     });
    //   }
      
    //   fetchData(1000, true)
    //   .then((data) => console.log(data))
    //   .catch((err) => console.error(err));
    
    // fetchData(1000, false)
    //   .then((data) => console.log(data))
    //   .catch((err) => console.error(err));


//     function Counter(count) {
//         let original = count 
    
//         return {
//             inc: function () {
                
//                 return ++original;
//             },
//             dec: function () {
//                 return --original;
//             },
//             reset: function () {
//                 return count;
//             }
//         };
//     }
    
// let mycount = Counter(5)
// console.log(mycount.dec())
// console.log(mycount.dec())
// console.log(mycount.inc())
// console.log(mycount.inc())
// console.log(mycount.inc())
// console.log(mycount.reset())




// function fetchData(delay, shouldSucceed) {
//     if (typeof(shouldSucceed) === "boolean" && typeof(delay) === "number") {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (shouldSucceed) {
//                     resolve("Data fetched successfully");
//                 } else {
//                     reject("ShouldSucceed is false");
//                 }
//             }, delay);
//         });
//     }
// }

// fetchData(1000, true)
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

// fetchData(1000, false)
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

  
// let obj = {
//      from :  0 ,
//      to   :  10 ,
//      [Symbol.iterator](){
//         return {
//             next : ()=> {
//                if(this.from <= this.to){
//                  return {value:this.from++ , done: false}
//                }else {
//                   return {value:undefined , done:true}
//                }
//             }
//         }
//      }
// };

// for(let i of obj) {
//      console.log(i)
// }



// let obj = {
//     from :0 ,
//     to  : 10 ,
//     *[Symbol.iterator](){
//        while(this.from <= this.to){
//              yield this.from++
//        }
//     }
// };

// for(let i of obj){
//     console.log(i)
// }


// class ab_Animal  {
//     constructor(name) 
//         if (this.constructor === ab_Animal) {
//             throw new Error2("Abstract class can't be instantiated");
//         
//         this.name = name;
//     }
//     makeSound() {
//         throw new Error("Abstract method makeSound must be implemented");
//     }
//     displayInfo() {
//         throw new Error("Abstract method displayInfo must be implemented");
//     }
// };

// class Dog extends ab_Animal {
//     constructor(name, color) {
//         super(name);
//         this.color = color;
//     }
//     makeSound() {
//         return "Woof Woof";
//     }
//     displayInfo() {
//         return `${this.name} is a dog with color ${this.color}`;
//     }
// }

// class Cat extends ab_Animal {
//     constructor(name, age, owner) {
//         super(name);
//         this.age = age;
//         this.owner = owner;
//     }
//     makeSound() {
//         return "Meow";
//     }
//     displayInfo() {
//         return `Cat named ${this.name} is ${this.age} years old, owned by ${this.owner}`;
//     }
// }

// let d = new Dog("Mursik", "Black");
// console.log(d.makeSound());
// console.log(d.displayInfo());

// let c = new Cat("Marsik", 18, "Valodik");
// console.log(c.makeSound());
// console.log(c.displayInfo());
// console.log(c.displayInfo());



// let obj = {
//      from :0 ,
//      to : 10 ,
//      [Symbol.iterator](){
//         return {
//             next: ()=> {
//                 if(this.from
//             }
//         }
//      }
// }


// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     static isANimal(animal) {
//         if (animal.constructor = Animal) {
//             return true;
//         }
//         return false;
//     }
//     sey_something() {
//         return "hello"
//     }
// }
// class Cat extends Animal {
//     constructor(name, age, ownerName) {
//         super(name, age)
//         this.ownerName = ownerName;
//     }
//     sey() {
//         return "hello ketty"
//     }
// }




// function Animal(name, age) {
//     // if (!new.target) {
//     //     return new Animal(name, age);
//     // }
//     this.name = name;
//     this.age = age;
//     Object.defineProperties(Animal.prototype, {
//         "sey_something": {
//             value: function () {
//                 return "hello";
//             },
//             writable: true,
//             enumerable: false,
//             configurable: true
//         }
//     })
//     Object.defineProperty(Animal, "isAnimal",
//         {
//             value: function (obj) {
//                 if (obj.constructor === Animal) {
//                     return true;
//                 }
//                 return false;
//             },
//             writable: true,
//             enumerable: false,
//             configurable: true,
//         })
// }
// function Cat(name, age, ownerName) {
//     Animal.call(this, name, age);
//     this.ownerName = ownerName;
//     Object.defineProperty(Cat.prototype, "sey", {
//         value: function () {
//             return "hello ketty";
//         },
//         writable: true,
//         enumerable: false,
//         configurable: true
//     })
//     Cat.__proto__ = Animal;
//     Cat.prototype.__proto__ = Animal.prototype;
// }