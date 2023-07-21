//Задание 1
function compareAndPrintDifference(str1, str2) {
  // Находим длины строк
  const len1 = str1.length;
  const len2 = str2.length;
  // Определяем, какая строка больше или равна
  if (len1 > len2) {
    const difference = len1 - len2;
    console.log(str1.slice(-difference));
  } else if (len1 < len2) {
    const difference = len2 - len1;
    console.log(str2.slice(-difference));
  } else {
    console.log("Строки имеют одинаковую длину.");
  }
}

// Пример использования функции
const string1 = "text education part 2";
const string2 = "text education";

compareAndPrintDifference(string1, string2);




//задание 2
function commonElementsInArrays(...arrays) {
  const firstArray = arrays[0];
  const commonElements = [];
  for (const element of firstArray) {
    if (arrays.every(array => array.includes(element))) {
      commonElements.push(element);
    }
  }
  return commonElements;
}
// Пример использования функции
const result = commonElementsInArrays(
  [3, 6, 1, 8, 3, 6, 3, 6, 3, 6],
  [1, 4, 2, 4],
  [6, 3, 2, 8, 1]
);
console.log(result); // Output: [1]





//задание 3
function removeDuplicates(arr) {
  const uniqueElements = [];
  for (const element of arr) {
    const lowerCaseElement = element.toString().toLowerCase();
    if (!uniqueElements.includes(lowerCaseElement)) {
      uniqueElements.push(lowerCaseElement);
    }
  }
  return uniqueElements;
}
// Пример использования функции
const input1 = [4, 7, 1, 9, 6, 8, 4, 6, 3, 6];
const output1 = removeDuplicates(input1);
console.log(output1); // Output: [4, 7, 1, 9, 6, 8, 3]
const input2 = ['text', 'education', 'part', 'Text'];
const output2 = removeDuplicates(input2);
console.log(output2); // Output: ['text', 'education', 'part']






//задание 4
function range(start, end, step = 1) {
  const result = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}
// Пример использования функции
const output1 = range(5, 2, -1);
console.log(output1); // Output: [5, 4, 3, 2]
const output2 = range(4, 16, 2);
console.log(output2); // Output: [4, 6, 8, 10, 12, 14, 16]





//задание 5
function getRandomNonMatchingChar(char1, char2) {
  const allChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomChar;
  do {
    randomChar = allChars[Math.floor(Math.random() * allChars.length)];
  } while (randomChar === char1 || randomChar === char2);
  return randomChar;
}
function replaceMiddleChar(str) {
  const fragments = [];
  for (let i = 0; i < str.length; i += 3) {
    const fragment = str.slice(i, i + 3);
    let middleChar = fragment[1];
    const firstChar = fragment[0];
    const lastChar = fragment[2];
    if (middleChar === lastChar) {
      middleChar = getRandomNonMatchingChar(firstChar, lastChar);
    } else {
      middleChar = getRandomNonMatchingChar(firstChar, middleChar);
    }
    fragments.push(`${firstChar}${middleChar}${lastChar}`);
  }
  return fragments.sort();
}
// Пример использования функции
const input = 'test education part 2';
const output = replaceMiddleChar(input);
console.log(output); // Output: ["a_i", "d_c", "o_ ", "p_r", "t_2", "t_e", "t_s"]






//Задание 6
function func(num) {
  const innerFunc = (param1) => {
    const result = (num % 2 === 0 ? num ** 2 : num ** 3) * param1;
    return Math.sqrt(result).toFixed(2);
  };
  return innerFunc;
}
// Пример использования функции
const output = func(17)(6)(2);
console.log(output); // Output: 171.69





//задание 7
function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
// Пример использования функции
const input1 = 'testset';
const output1 = isPalindrome(input1);
console.log(output1); // Output: true
const input2 = 'abbcsa';
const output2 = isPalindrome(input2);
console.log(output2); // Output: false




//Задание 8
function removeElementsByIndices(arr, indicesToRemove) {
  const result = arr.filter((_, index) => !indicesToRemove.includes(index));
  return result;
}
// Пример использования функции
const inputArray = [5, 2, 8, 6, 1, 9, 3, 6, 3, 7, 1];
const indicesToRemove = [2, 5, 1];
const outputArray = removeElementsByIndices(inputArray, indicesToRemove);
console.log(outputArray); // Output: [5, 6, 1, 3, 6, 3, 7, 1]





//Задание 9
function filterCollectionByFields(collection, country, minAge) {
  return collection.filter(item => item.country === country && item.age > minAge);
}
// Пример использования функции
const arr = [
  { name: 'test', age: 34, country: 'RF' },
  { name: 'test2', age: 12, country: 'RF' },
  { name: 'test1', age: 54, country: 'RF' }
];
const output = filterCollectionByFields(arr, 'RF', 18);
console.log(output);
// Output: [{name: 'test', age: 34, country: 'RF'}, {name: 'test1', age: 54, country: 'RF'}]





//Задание 10
function findMissingValues(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}
// Пример использования функции
const input1 = [4, 7, 2, 9, 3, 5, 6, 4, 5, 1, 4];
const input2 = [4, 5, 6, 7, 8];
const output = findMissingValues(input1, input2);
console.log(output); // Output: [2, 9, 3, 1]





//Задание 11
function getUniqueSortedArray(arr) {
  const uniqueArray = arr.filter((item, index) => arr.indexOf(item) === index);
  uniqueArray.sort((a, b) => a - b);
  return uniqueArray;
}
// Пример использования функции
const input = [5, 2, 8, 4, 8, 2, 5, 8, 2, 17, 8, 4, 2, 4, 7, 3];
const output = getUniqueSortedArray(input);
console.log(output); // Output: [3, 7, 17]






//Задание 12
function objectToArray(obj) {
  return Object.entries(obj);
}
// Пример использования функции
const input = { 'dog': 6, 'cat': 11 };
const output = objectToArray(input);
console.log(output); // Output: [['dog', 6], ['cat', 11]]





//задание 13
function multiplyNumericProperties(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}
// Пример использования функции
const input = {
  name: 'test',
  age: 25,
  weight: 65,
  height: 165
};
multiplyNumericProperties(input);
console.log(input);
// Output: { name: 'test', age: 50, weight: 130, height: 330 }





//Задание 14
function isSubstringPresent(str1, str2) {
  if (str1.length < str2.length) {
    // Обмениваем строки, чтобы str1 была всегда больше или равна str2
    [str1, str2] = [str2, str1];
  }
  return str1.includes(str2);
}
// Пример использования функции
const input1 = ('text education part 2', 'text');
const output1 = isSubstringPresent(...input1);
console.log(output1); // Output: true
const input2 = ('text education part 2', 'test');
const output2 = isSubstringPresent(...input2);
console.log(output2); // Output: false





//задание 15
function areObjectsEqual(obj1, obj2) {
  const stringifiedObj1 = JSON.stringify(obj1);
  const stringifiedObj2 = JSON.stringify(obj2);
  return stringifiedObj1 === stringifiedObj2;
}
// Пример использования функции
const a = {test: 8, text: 9};
const b = {test: 8, text: 9};
const output = areObjectsEqual(a, b);
console.log(output); // Output: true

