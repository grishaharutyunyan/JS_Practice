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

  

function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    // primitive value, return directly
    return obj;
  }

  // create a new object
  let copy;
  if (Array.isArray(obj)) {
    copy = [];
  } else {
    copy = {};
  }

  // iterate through the original object's properties
  for (const key in obj) {
    copy[key] = deepCopy(obj[key]); // recursively deep copy each property
  }

  // handle functions and dates
  if (typeof obj === "function") {
    copy = obj.bind({}); // create a bound copy of the function
  } else if (obj instanceof Date) {
    copy = new Date(obj.getTime()); // create a new Date object with the same time
  }

  return copy;
}

const obj = {
  a: 1,
  b: [2, 3],
  c: {
    d: 4,
    e: 5,
  },
  f: function () {
    console.log("This is a function");
  },
  g: new Date(),
};

const copy = deepCopy(obj);

console.log(copy); // will be a deep copy of the original object
