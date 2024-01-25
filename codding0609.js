// 1. Գրել ծրագիր, որը տրված տողի բառերը պահում է որպես զանգվածի առանձին էլեմենտներ:

// let str = 'Hello world!';
// let arr = [];

// for (let i = 0; i < str.length; ++i) {
//     arr[i] = str[i];
// }

// console.log(arr);


// 2. Գրել ծրագիր, որ ընդունում է ամբողջ թվերի զանգված եւ վերադարձնում է մինիմումը:

// let arr = [7, 6, 1, 2, 9, 3, 4];
// let min = arr[0];

// for (let i = 1; i < arr.length; ++i) {
//     if (min > arr[i]) {
//         min = arr[i];
//     }
// }

// console.log(min);


// 3. Գրել ծրագիր, որ ընդունում է ամբողջ թվերի զանգված և վերադարձնում է մինիմում արժեքով տարրի ինդեքսը։

// let arr = [7, 6, 1, 2, 9, 3, 4];
// let min = arr[0];
// let minIndex = 0;

// for (let i = 1; i < arr.length; ++i) {
//     if (arr[i] < min) {
//         min = arr[i];
//         minIndex = i;
//     }
// }

// console.log(minIndex);


// 4. Գրել ծրագիր, որը, նույն զանգվածի մեջ, զույգ էլեմենտները կդասավորի սկզբից, իսկ կենտերը՝ վերջից:

// let arr = [3, 5, 2, 6, 8, 4, 3, 5, 0];
// let j = 0;

// for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] % 2 === 0) {
//         [arr[j], arr[i]] = [arr[i], arr[j]];
//         j++;
//     }
// }

// console.log(arr);
