// // 1. Գրել ռեկուրսիվ ֆունկցիա, որը էկրանին կտպի 1-ից n թվերը։

// function printNumbers(n) {
//     if (n > 0) {
//          printNumbers(n - 1);
//         console.log(n);
//     }
// }


// printNumbers(5);


// // 2. Գրել ռեկուրսիվ ֆունկցիա, որը կվերադարձնի 1-ից  n թվերի գումարը:
// function sum(num){
//     if(num <= 1) {
//    return num ;
//  }
//  return num + sum(num-1)
// }

// console.log(sum(5))


// //3.Գրել ռեկուրսիվ ֆունկցիա, որը կվերադարձնի 1-ից  n թվերի արտադրյալը

// function mul(num){
//     if(num == 0 || num == 1){
//       return 1;
//     }
//     return num * mul(num -1)
//   }
  
  
//   let res = mul(5);
//   console.log(res)


// //4. Գրել ռեկուրսիվ ֆունկցիա, որը կվերադարձնի 1-ից  n զույգ թվերի գումարը:
// function evenNum(num){
// function evenNum(num){
//    if(num == 0 || num == 1) return  0
//    if(num == 2) return num;
//    if(num % 2 != 0 ){
//       return evenNum(num - 1)
//    }else {
//        return num + evenNum(num - 2)
//    }
//  }


// console.log(evenNum(11))



// // 5. Գրել ռեկուրսիվ ֆունկցիա, որը կվերադարձնի 1-ից  n կենտ թվերի արտադրյալը:

// function mulodd(num) {
//     if (num < 3) return 1;
//     if (num % 2 === 0) {
//         return mulodd(num - 1);
//     } else {
//         return num * mulodd(num - 2);
//     }
// }

// console.log(mulodd(5)); 


// // 6. Գրել ռեկուրսիվ ֆունկցիա, որը որպես արգումենտ ստանում է զանգված և վերադարձնում զանգվածի էլեմենտների գումարը։
//  function arrNumSum(arr,index= 0) {
  
//   if(index >= arr.length){
//    return 0 ;
//   }else{
//     return arr[index] + arrNumSum(arr,index + 1) 
//   }
   
  
  
  
// }
// console.log(arrNumSum([1,2,3]))

// // 7. Գրել ռեկուրսիվ ֆունկցիա, որը որպես արգումենտ ստանում է թիվ և վերադարձնում այդ թվի թվանշանների քանակը

// function foo(num){
//     if(num < 9 ){
//      return 1 
//     }
//     return 1 + foo(Math.floor(num / 10))
//     }
    
//     console.log(foo(5555))
    

// // 8,Գրել ռեկուրսիվ ֆունկցիա, որը որպես արգումենտ կստանա 2 թիվ, և կվերադարձնի 1-ին թիվը բարձրացրած 2-րդ թվի աստիճան։ Օրինակ power(2,3) => 8:

// function pow(number, exp) {
//     if (exp == 0) return 1;
//     if(exp < 0) {
//             return (1 / number) * pow(number,exp+1)  
//       }else{
//         return number * pow(number ,exp - 1)    
//          }
  
      
//       }
//      console.log(pow(2, -2)); 



// // 9. Գրել ռեկուրսիվ ֆունկցիա, որը որպես արգումենտ ստանում է 2 թիվ և տպում է էկրանին այդ թվերի միջև եղած բոլոր թվերը։ Օրինակ՝ printRange(1, 5) => 1,2, 3, 4,5:


// function printRange(start,end){
//      if(start > end) return ;
//      console.log(start);

//      return   printRange(start+1,end)
// }

// printRange(1,9)


// 10. Գրել ռեկուրսիվ ֆունկցիա, որը որպես արգումենտ ստանում է 2 թիվ և վերադարձնում այդ թվերի ամենամեծ ընդհանուր բաժանարարը։ 

// function gcd(a,b){
//      if(b == 0) return  a;
//      else {
//         return gcd(b,a % b)
//      }
     
//     }
//     console.log(gcd(48,18))