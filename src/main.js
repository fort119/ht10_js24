//first programm
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let arr2 = ['one', 'two', 'three'];

function reversedArray(arr) {
  let reversedArr = arr.reverse();
  return reversedArr;
}

/// или так
function reversedArray2(arr) {
  let reversedArr = [];
  for (let i = 0; i < arr.length; i++) {
    reversedArr.unshift(arr[i]);
  }
  return reversedArr;
}

console.log(reversedArray(arr1));
console.log(reversedArray2(arr2));

//second programm
let arr3 = [1, 2, 3, 4, 5, 6, 133, 12, 13, 14, 15, "гусь"];
let arr4 = [1, 2, 3, 4, 5, 7, 8, 11, 12, 13, 14, "гусь"];

function unique(arr1, arr2) {
  let uniqueArr = [];

  for (let elem of arr1) {
    if (!uniqueArr.includes(elem)) {
      uniqueArr.push(elem);
    }
  }

  for (let elem of arr2) {
    if (!uniqueArr.includes(elem)) {
      uniqueArr.push(elem);
    }
  }

  return uniqueArr;
}

console.log(unique(arr4, arr3));

//third programm
const students = [
  { name: "Alice", age: 20, grade: 4.5 },
  { name: "Bob", age: 21, grade: 3.9 },
  { name: "Charlie", age: 19, grade: 4.8 }
];

function calculateAverageGrade(arr) {
  let sum = 0;
  let averageGrade;

  students.forEach(element => {
    sum += element.grade;
  });
  averageGrade = (sum / arr.length).toFixed(1);
  return averageGrade;
}

console.log('средний бал ' + (calculateAverageGrade(students)));