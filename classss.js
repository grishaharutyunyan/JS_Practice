class Person {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    sayFullInfo() {
        console.log(`Hello, my name is ${this.name} ${this.surname} and I am ${this.age} years old.`);
    }

    static foo(){
         console.log("Hello")
    }
    adress="Azatutyun"
    #city = "Yerevan"
}

class User extends Person{
    constructor(name,surname,age){
        super(name,surname)
        this.age = age
    }
    print(){
        super.print()
    }
}

let user = new User()


function  Person(name,surname){
    this.name = name
    this.surname = surname
    Object.defineProperty(Person.prototype,'print',{
        value:function(){
            console.log(this.name)
        },
        writable:true,
        enumible:false,
        configurable:true,
    }),
    adress = "Azatutyun 24/7"
    let city ='Yervan'
}
Person.foo = function(){
    console.log('Hello')
}

function User(name,surname,age){
    Person.call(this,name,surname);
    this.age = age
}
User__proto__= Person;
User.prototype__proto__= Person.prototype


