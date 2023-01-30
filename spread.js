// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }
//   refactor 
const filterOutOdds = (...arguments) => arguments.filter (value => value % 2 === 0);
    
// hr 

// findMin 

  // function findMin(...numOfArg){
  //     return Math.min(Math.min(a, b), c);
  
  // }
  const findMin = ((...args) => Math.min(...args));

    // hr

  // mergeObjects

  // function mergeObjects(...objects) {
  //   let finalObj = objects[0];
  //   for (obj of objects) {
  //     for (const [key, value] of Object.entries(obj)) {
  //       finalObj[key] = value;
  //     }
  //   }
  // //   return finalObj;
  // }
  const mergeObjects = ((obj1, obj2) => ({...obj1, ...obj2}));

  // hr

  // doubleAndReturnArgs

  const doubleAndReturnArgs = ((arr, ...args) => [...arr, ...args.map(el => el*2)]);

  // Slice and Dice!
  function removeRandom(items) {
    const randomIndex = Math.floor(Math.random() * (items.length));
    let copied = [...items];
    copied.splice(randomIndex, 1);
    return copied;
  }

  /** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [...array1, ...array2]
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  return {...obj, ...{[key]: val}};
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
  const copy = {...obj};
  delete copy[key]
  return copy;
}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  return {...obj1, ...obj2};
}

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  let copy = {...obj};
  copy[key] = val;
  return copy;
}
