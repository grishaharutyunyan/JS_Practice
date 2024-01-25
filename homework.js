class User {
    constructor(gender, age) {
      this.gender = gender;
      this.age = age;
    }
  
    getGender() {
      return this.gender;
    }
  
    setGender(gender) {
      this.gender = gender;
    }
  
    getAge() {
      return this.age;
    }
  
    setAge(age) {
      this.age = age;
    }
  
    getBirthYear(currentYear) {
      return currentYear - this.age;
    }
  }
  
  class Person1 extends User {
    constructor(gender, age, name, surname) {
      super(gender, age);
      this.name = name;
      this.surname = surname;
    }
  
    getFullName() {
      return `${this.name} ${this.surname}`;
    }
  }
  
  class Person2 extends User {
    constructor(gender, age, name, surname, email) {
      super(gender, age);
      this.name = name;
      this.surname = surname;
      this.email = email;
    }
  
    getFullName() {
      return `${this.name} ${this.surname}`;
    }
    
    static randomEmail(name, surname) {
      let randomNumber = Math.floor(Math.random() * 100);
      let email = `${name.toLowerCase()}.${surname.toLowerCase()}${randomNumber}@mail.com`;
      return email;
    }
  }
  
 
  
 let user1 = new Person1('male', 22, 'Alo', 'Aloyan');
  console.log(user1.getFullName()); 
  console.log(user1.getBirthYear(2023)); 
  
  let user2 = new Person2('female', 10, 'Blo', 'Bloyan');
  console.log(user2.getFullName()); 
  console.log(user2.getBirthYear(2023)); 
  
   let mail = Person2.randomEmail('Alo','Aloyan');
   console.log(mail); 
  