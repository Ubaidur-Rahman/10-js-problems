// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// problem 1
// Write a function that accepts an array of strings. Return the longest string.

function longestString(arr) {
  let longest = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

// problem 2
// Write a function that takes a string, and returns the character that is most commonly used in the string.

function commonCharacter(str) {
  const charCount = {}; //Step 0
  let maxCharCount = 0;
  let maxChar = '';
  for (let i = 0; i < str.length; i++) {
    // Step 1.
    charCount[str[i]] = ++charCount[str[i]] || 1;
  }

  for (let key in charCount) {
    //Step 2
    if (charCount[key] >= maxCharCount) {
      maxCharCount = charCount[key]; //Step 3
      maxChar = key;
    }
  }
  return maxChar;
}

// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// Note:

// Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

var hammingWeight = function (n) {
  let ans = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] == 1) {
      ans.push(n[i]);
    }
  }
  return ans.length;
};

// console.log(hammingWeight('111111111111111111001'));

const MissingNumber = (array, n) => {
  let arr = array.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != i) {
      return i;
    } else {
      return arr[arr.length];
    }
  }
};
// console.log(MissingNumber([2, 1, 5, 4]));

var missingNumber = (nums) => {
  let arr = nums.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != i) {
      return i;
    }
  }
  return arr.length;
};

// console.log(missingNumber([3, 0, 1]));

const ceilingNum = (arr, target) => {
  let targetArr = arr.filter((el) => el >= target);
  return targetArr[0];
};

// console.log(ceilingNum([1, 2, 6, 8, 9, 12, 15, 18, 32], 10));

const floorNum = (arr, target) => {
  let targetArr = arr.filter((el) => el <= target);
  return targetArr[targetArr.length - 1];
};

// console.log(floorNum([1, 2, 6, 8, 9, 12, 15, 18, 32], 12));

// sort an array

var sortArray = function (nums) {
  return nums.sort((a, b) => a - b);
};
// console.log(sortArray([3, 0, 1]));

// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.

var firstMissingPositive = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  const firstElement = arr[0];
  const lastElement = arr[arr.length - 1];
  let arrLength = lastElement - firstElement;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] != i) {
  //     return i;
  //   }
  // }
  console.log(arr, arrLength);
};

// firstMissingPositive([3, 4, -1, 1]);

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function (nums) {
  nums.forEach((el) => {
    let hasNumber = nums.includes(el);
    console.log(hasNumber, el);
  });
  // let hasNumber = nums.includes(1);
  // console.log(hasNumber);
};

// singleNumber([4, 1, 2, 1, 2]);
// Input: nums = [1]
// Output: 1

// Input: nums = [4,1,2,1,2]
// Output: 4

// Input: nums = [2,2,1]
// Output: 1

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

var searchRange = function (nums, target) {
  let firstIndex = nums.indexOf(target);
  let lastIndex = nums.lastIndexOf(target);
  if (nums.includes(target)) {
    return [firstIndex, lastIndex];
  }
  return [-1, -1];
};
// console.log(searchRange([1], 1));

// Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.

// You must write an algorithm that runs in O(n) time and uses O(1) extra space.

var lexicalOrder = function (n) {
  let ans = [];
  for (let i = 0; i <= n; ++i) {
    if (i === 0) {
      continue;
    }
    ans.push(i);
  }
  return ans.sort();
};
// console.log(lexicalOrder(5));

const stat = (arr, n) => {
  let mean = arr.reduce((acc, curr) => acc + curr, 0) / n;
  let sortArr = arr.sort((a, b) => a - b);
  let median = 0;
  if (n % 2 === 0) {
    median = (sortArr[n / 2] + sortArr[n / 2 - 1]) / 2;
  } else {
    median = sortArr[(n - 1) / 2];
  }
  console.log(median);
  let mode = sortArr.reduce(
    (a, b, i, arr) =>
      arr.filter((v) => v === a).length >= arr.filter((v) => v === b).length
        ? a
        : b,
    null
  );
  console.log(mean);
  console.log(median);
  console.log(mode);
  return [mean, median, mode];
};
console.log(
  stat(
    [64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060],
    10
  )
);

// Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.

var rangeBitwiseAnd = function (left, right) {
  let i = 0;
  while (left != right) {
    left >>= 1;
    right >>= 1;
    i++;
  }
  return left << i;
};

console.log(rangeBitwiseAnd(5, 7));

// A sentence is a list of tokens separated by a single space with no leading or trailing spaces. Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters.

// For example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: "2" and "4" are numbers and the other tokens such as "puppy" are words.
// Given a string s representing a sentence, you need to check if all the numbers in s are strictly increasing from left to right (i.e., other than the last number, each number is strictly smaller than the number on its right in s).

// Return true if so, or false otherwise.

var areNumbersAscending = function (s) {
  let numb = s.match(/\d+/g);
  let numbArr = numb.map((num) => Number(num));
  console.log(numbArr);

  for (let i = 0; i < numbArr.length; i++) {
    if (numbArr[i + 1] && numbArr[i + 1] > numbArr[i]) {
      continue;
    } else if (numbArr[i + 1] && numbArr[i + 1] <= numbArr[i]) {
      return false;
    }
  }
  return true;
};

console.log(areNumbersAscending('hello world 5 x 5'));

// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

var maximumProduct = function (nums) {
  let sortArr = nums.sort((a, b) => a + b);
  console.log(sortArr);
  let maxNumArr = sortArr.slice(sortArr.length - 3);
  return maxNumArr.reduce((acc, curr) => acc * curr, 1);
};

console.log(maximumProduct([-100, -2, -3, 1]));

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

const fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
};
// console.log(fib(10));

// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer num, return its complement.

var bitwiseComplement = function (n) {
  let reverseNum = n
    .toString(2)
    .split('')
    .map((i) => {
      if (i == 1) {
        return (i = 0);
      } else {
        return (i = 1);
      }
    })
    .join('');
  return parseInt(reverseNum, 2);
};
// console.log(bitwiseComplement(10));

// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer num, return its complement.

var findComplement = function (num) {
  let reverseNum = num
    .toString(2)
    .split('')
    .map((i) => {
      if (i == 1) {
        return (i = 0);
      } else {
        return (i = 1);
      }
    })
    .join('');
  return parseInt(reverseNum, 2);
};

// console.log(findComplement(10));

// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

// Given an integer n, return true if n is a perfect number, otherwise return false.

// var checkPerfectNumber = function (num) {
//   let allFactorsNum = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       allFactorsNum.push(i);
//     }
//   }
//   let factorsNum = allFactorsNum.slice(0, -1);
//   let sumOfArr = factorsNum.reduce((acc, curr) => acc + curr, 0);
//   return sumOfArr === num ? true : false;
// };

var checkPerfectNumber = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  return sum - num === num ? true : false;
};

// console.log(checkPerfectNumber())
