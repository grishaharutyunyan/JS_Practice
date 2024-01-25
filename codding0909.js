// 1. Ստեղծել ֆունկցիա, որը որպես արգումենտ ստանում է 2 թիվ և վերադարձնում այդ թվերի գումարը։

// function sum(num1, num2) {
//     return num1 + num2;
// }


// 2. Ստեղծել ֆունկցիա, որը որպես արգումենտ ստանում է n ամբողջ թիվ, 
// և էկրանին տպում n հատ "Hello World!"։

// function print(n) {
//     for(let i = 0; i < n; ++i) {
//         console.log("Hello World!")
//     }
// }


// 3. Ստեղծել ֆունկցիա, որը որպես արգումենտ ստանում է 2 թիվ, 
// և վերադարձնում այդ թվերից մեծագույնը։

// function max(num1, num2) {
//     return num1 > num2 ? num1 : num2;
// }

// function max1(num1, num2) {
//     if(num1 > num2) {
//         return num1;
//     }
//     return num2;
// }


// 4. Ստեղծել ֆունկցիա, որը որպես արգումենտ ստանում է տող, և վերադարձնում է տողի 
// "a" symbol֊ների քանակը։

// function count(str) {
//     let l = 0;
//     for(let i = 0; i < str.length; ++i) {
//         if(str[i] == "a") {
//             ++l;
//         }
//     }
//     return l;
// }


// 5. Ստեղծել ֆունկցիա, որը որպես արգումենտ ստանում է զանգված, և վերադարձնում այդ զանգվածի
// մեծագույն էլեմենտը։

// function maxArray(arr) {
//     let max = arr[0];
//     for(let i = 1; i < arr.length; ++i) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }


// 6. Ստեղծել ֆունկցիա, որը որպես արգումենտ ստանում է 2 զանգված, և վերադարձնում 
// մեկ այլ զանգված, որի մեջ կներառվեն առաջին և երկրորդ զանգվածների տարրերը։

// function concat(arr1, arr2) {
//     let res = [];
//     for(let num of arr1) {
//         res.push(num);
//     }
//     for(let num of arr2) {
//         res.push(num);
//     }
//     return res;
// }


// 7. Ստեղծել ֆունկցիա, որը որպես արգումենտ տող, և վերադարձնում տողի ամենաերկար բառը։

// function long(str) {
//     if(str.length == 0) {
//         return;
//     } 
       
//     let arr = str.split(" ");
//     let max = "";
//     for(let str of arr) {
//         if(str.length > max.length) {
//             max = str;
//         }
//     }
//     return max;
// }


// 8. Ստեղծել ֆունկցիա, որը որպես արգումենտ ստանում է ամբողջ թիվ, և հաշվում այդ թվի 
// ֆակտորիալը։

// function factorial(num) {
//     if(num < 0) {
//         return;
//     }
//     let res = 1;
//     for(let i = 2; i <= num; ++i) {
//         res *= i;
//     }
//     return res;
// }
// console.log(factorial(7));


// 9. Ստեղծել ֆունկցիա, որը որպես արգումենտ ստանում է ամբողջ թիվ, և 
// վերադարձնում այդ թվի թվանշանների գումարը։

// function sumT(num) {
//     let res = 0;
//     while(num !== 0) {
//         res += num % 10;
//         num = Math.floor(num / 10);
//     }
//     return res;
// }


// 10. Ստեղծել Ֆունկցիա, որը որպես արգումենտ ստանում է ամբողջ թիվ, և վերադարձնում է
// Ֆիբոնաչիի հաջորդականության n-րդ անդամը։

// function fibonacci(n) {
//     if (n < 0) {
//         return;
//     }

//     if (n === 0) {
//         return 0;
//     }
//     if (n === 1 || n === 2) {
//         return 1;
//     }

//     let preview = 0;
//     let current = 1;
    
//     for(let i = 2; i <= n; ++i) {
//        let next = preview + current;
//         preview = current;
//         current = next;
//     }
//     return current;
// }


// 11. Ստեղծել ֆունկցիա, որը վերադարձնում է true, եթե թիվը պարզ է, հակառակ դեպքում՝ false:

// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i < num; ++i) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }


// 12. Ստեղծել ֆունկցիա, որը որպես արգումենտ ստանում է բառ, և վերադարձնում այդ բառի 
// ձայնավորների քանակը։

// function count(str) {
//     if (typeof str !== 'string') {
// 		return;
//  	}

//     let sum = 0;
//     let check = ["a","A", "o", "O", "e", "E", "u", "U", "i", "I", "y", "Y"];
//     for(let i = 0; i < str.length; ++i) {
//         if(check.includes(str[i])) {
//             sum++;
//         }
//     }
//     return sum;
// }