// TASK #1 Գրել ֆունկցիա, որն ընդունում է ամբողջ թվերի զանգվածը որպես մուտքագրում և
// վերադարձնում է նոր զանգված, որի բոլոր զույգ թվերը հանված են:

// function evenRemoved(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//         return;
//     }
// let result = [];
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] % 2 !== 0) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(evenRemoved([-1, 0, 1, 2, 3, 4, 5, 6]));


// TASK #2 Գրել ֆունկցիա, որը թվերի զանգվածից վերադարձնում է միայն 3-ի բաժանվող թվեր:

// function divideBy3(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] % 3 === 0) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(divideBy3([2, 3, 5, 6, 8, 9]));


// TASK #3 Գրել ֆունկցիա, որն ընդունում է թվերի զանգված և յուրաքանչյուր տարր բազմապատկում 2-ով:

// function mulTo2(arr) {
//     let doubled = arr.map((element) => element * 2);
//     return doubled;
// }
// console.log(mulTo2([1, 2, 3]));


// TASK #4 Գրել ֆունկցիա, որը որպես մուտք ստանում է թվերի զանգված և վերադարձնում
// զանգվածի բոլոր թվերի միջին թվաբանական արժեքը:

// function average(arr) {
//     let avg = 0;
//     for (let i = 0; i < arr.length; ++i) {
//         avg += arr[i];
//     }
//     return (avg / arr.length);
// }
// console.log(average([1, 2, 3, 4, 5]));


// TASK #5 Գրել ֆունկցիա, որը վերադարձնում է զանգվածի այն տարրերը, որոնց տիպը
// ‘’string’' է և որոնց երկարությունը (length) մեծ է 2-ից:

// function stringsOnly(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; ++i) {
//         if (typeof arr[i] === 'string' && arr[i].length > 2) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(stringsOnly(['hello', 1, false, 'b', 'world']));


// TASK #6 BubbleSort

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; ++i) {
//         for (let j = 0; j < arr.length - i - 1; ++j) {
//             if (arr[j] > arr[j + 1]) {
//             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }

// console.log((bubbleSort([9, 8, 7, 6, 5])));


// TASK #7 BinarySearch

// function binarySearch(array, number) {
//     let min = 0;
//     let max = array.length - 1;

//     while (min <= max) {
//         let middle = Math.floor((min + max) / 2);

//         if (array[middle] === number) {
//             return middle;
//         } else if (array[middle] < number) {
//             min = middle + 1;
//         } else {
//             max = middle - 1;
//         }
//     }
//     return -1;
// }

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 8));