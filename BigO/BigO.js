//Check performance of a loop
// let arr = [1, 1, 1];
// const arr = new Array(100000).fill(1, 0);
// const timeStart = performance.now();
// console.log(arr);
// arr.forEach((arrVal) => {
//   if (arrVal === 'Waldo') {
//     console.log('Found Waldo');
//     console.log(arrVal);
//   }
// })

// const timeEnd = performance.now();

// console.log(`${timeEnd} - ${timeStart} = ${timeEnd - timeStart}`);


//nested loop  O(n^2)

// const boxes = [1, 2, 3, 4, 5];
// //create all combinations of boxes...11,12,13,...51,52,53,54,55
// boxes.forEach((outerVal) => {
//   //outer value
//   boxes.forEach((innerVal) => {
//     console.log(`${outerVal}${innerVal}`);
//   })
// })


const arr1 = new Array(10000).fill('a', 0);
const arr2 = new Array(10000).fill('b', 0);
// arr1.push('b');
//Give 2 arrays, determine if there is at least 1 matching pair
//  arr1 = ['a','b','c','x']
//  arr2 = ['z','y','c','b']
//
// if size is small, can easily use a nested for loop   O(n^2)-quadratic..not good, but works
//
//nested loop
function compArr(arr1, arr2) {
  const t1 = performance.now();
  for (i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }
  console.log(`Nested loop ${performance.now() - t1}`);
  return false;
}


//better solution is to create a 3rd array. If a char in arr1, then put True in arr3 for that char location
//using the charCodeAt function
//

// function createArr3(arr1, arr2) {
//   const t2 = performance.now();
//   const arr3 = [];
//   arr1.forEach((arr1Val, idx) => {
//     if (arr3[arr1Val.charCodeAt(0)] === true);
//     else arr3[arr1Val.charCodeAt(0)] = true;
//   });
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr3[arr2[i].charCodeAt(0)]) return true;
//   }
//   console.log(`Hash Table time = ${performance.now() - t2}`);
//   return false;
// }

//Third solution, convert the first array to an object and use second array to check the properties to see
//if there's a match
function objSol(arr1, arr2) {
  arr1.push('b');
  let newObj = {};
  for (i = 0; i < arr1.length; i++) {
    newObj[arr1[i]] = true;

  }
  console.log(arr1, arr2, newObj)
  for (let j = 0; j < arr2.length; j++) {
    console.log(newObj[arr2[j]]);
    if (newObj[arr2[j]]) return true;
  }
  return false;
}

// console.log(`There is a match of letters in arr1 & arr2: ${createArr3(arr1, arr2)}.`);

// console.log(`Nested for loops is three letter match: ${compArr(arr1, arr2)}`);

console.log(objSol(arr1, arr2))