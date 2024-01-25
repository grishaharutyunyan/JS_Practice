    
      /* 1)Իրականացնել [Symbole.toPrimitive]


 let obj ={
      name : "Alo",
      surname : "Bloyan",
      age  : 18 ,
      email : "al0bloyan18@list.com",
      
      [Symbol.toPrimitive](hint){
           if(hint === "string"){

              return this.name + " " + this.surname ;

           }else if(hint === "number"){

            return this.age ;
            
           }else {
                return this.email;
           }
      }
 }


console.log(`${obj}`);
console.log(+obj)
console.log(obj + "")

*/

 /*      ---- 2) Իրականացնել  toString(), valueOf()

         
 let obj ={
      name : "Alo",
      surname : "Bloyan",
      age  : 18 ,
      
      toString(){
          return this.name + " " + this.surname 
      },
      
      valueOf(){
          return this.age
      }
      
   }

console.log(obj.toString());
console.log(obj.valueOf()); 
*/
