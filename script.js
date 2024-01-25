// let i = 0;
// while(i <= 100) {
//   console.log(i++);
// }



// for(let i = 0; i <= 100; ++i) {
//   console.log(i);
// }



// let i = 100;
// while(i >= 0) {
//   console.log(i--);
// }



// for(let i = 100; i >= 0; --i) {
//   console.log(i);
// }



// for(let i = 1; i < 100; ++i) {
//   if(i % 2 == 0) {
//     console.log(i)
//   }
// }



// let i = 1;
// while(i <= 100) {
//   if(i % 2 == 0) {
//     console.log(i)
//   }
//   ++i;
// }



// for(let i = 1; i < 100; ++i) {
//   if(i % 2 == 1) {
//     console.log(i)
//   }
// }



// let i = 1;
// while(i <= 100) {
//   if(i % 2 == 1) {
//     console.log(i)
//   }
//   ++i;
// }



// for(let i = 2; i <= 100; i += 2) {
//   console.log(i);
// }



// let i = 2;
// while(i <= 100) {
//   console.log(i);
//   i += 2;
// }



// for(let i = 1; i <= 100; i += 2) {
//   console.log(i);
// }



// let i = 1;
// while(i <= 100) {
//   console.log(i);
//   i += 2;
// }



// let a = 5;
// console.log(a % 2 == 0? "EVEN" : "ODD");



// let a = 3;
// let b = 4;
// let str = "+";
// switch(str) {
//   case "+":
//     console.log(a + b);
//     break;

//   case "-":
//     console.log(a - b);
//     break;

//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   default:
//     console.log("Invalid input")
// }


/* 


function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length -i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([7,6,4,3,2,1,5]));
 */


/* 
function selectionSort(arr) {
   for(let i = 0 ; i < arr .length ; i++){
       let tmp = i;
       for(let j = i + 1; j < arr.length; j++){
        if (arr[j] < arr[tmp]){
              tmp = j
        }
       }
       [arr[i],arr[tmp]] = [arr[tmp],arr[i]]
       
   }
  return arr ;
}

console.log(selectionSort([7,6,5,4,2,3,1]))

 */

// let obj = {
//     products : [
//        {
//          category  : "fruit",
//          name      : "apple",
//          price     : 23 ,
//          exp       : false
//        },
       
//        {
//         category : "fruit",
//         name     :   "orange",
//         price    : 12 ,
//         exp      : true 
//        },
       
//        {
//          category : "fruit",
//          name     : "kiwi" ,
//          price    : 22, 
//          exp      : true
//          },
//          {
//           category : "vegetable",
//           name     : " potato",
//           price    :  22 ,
//           exp      : true
//          }
//     ],
    
//        met : function(){
//        let name =[];
//          for(let key of this.products){
//            if(key.exp){
//             name.push(key.name);
//            }
//     }
//     return name ;
//   },
  
//    met1: function() {
//   let sum = 0;
//   for (let i = 0; i < this.products.length; i++) {
//     if (this.products[i].exp && this.products[i].category === "fruit") {
//       sum += this.products[i].price;
//     }
//   }
//   return sum;
// }
// }
  
//   console.log(obj.met());
//   console.log(obj.met1())

//   [1,2,3 ]
//  - [12,4]        
// function lastEl(arr) {
//     if (arr.length === 0) {
//       arr.push(1); 
//       arr[arr.length - 1] = arr[arr.length - 1] + 1; 
//     }
//     return arr;
//   }
  
//   console.log(lastEl([1,2,3]));
  

// function armstrongNumber(num) {
//     let temp = num ;
//     let x = 0;
//     let total = 0;
    
//     while(temp > 0){
//        temp = Math.floor(temp / 10)
//         x++ ;
//     }
    
//     temp = num
    
//      while(temp > 0){
//         let b = temp % 10
//         total +=Math.pow(b,x);
//         temp = Math.floor(temp /10)
//     }
    
//      if( total === num){
//       console.log(true)
//      }else {
//         console.log(false)
//      }
    
//   }



