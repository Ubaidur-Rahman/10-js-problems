// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>LeetCode Problem Solving With <span>Javascript</span></h1>`;

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
    console.log(++charCount[str[i]]);
    charCount[str[i]] = ++charCount[str[i]] || 1;
  }
  console.log(charCount);
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
  // console.log(arr, arrLength);
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
  // console.log(mean);
  // console.log(median);
  // console.log(mode);
  return [mean, median, mode];
};
// console.log(
//   stat(
//     [64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060],
//     10
//   )
// );

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

// console.log(rangeBitwiseAnd(5, 7));

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

// console.log(areNumbersAscending('hello world 5 x 5'));

// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

var maximumProduct = function (nums) {
  let sortArr = nums.sort((a, b) => a + b);
  // console.log(sortArr);
  let maxNumArr = sortArr.slice(sortArr.length - 3);
  return maxNumArr.reduce((acc, curr) => acc * curr, 1);
};

// console.log(maximumProduct([-100, -2, -3, 1]));

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

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var isAnagram = function (s, t) {
  let sortArr = (str) => str.split('').sort();
  let array1 = sortArr(s);
  let array2 = sortArr(t);
  if (array1.length === array2.length) {
    return array1.every((element, index) => {
      if (element === array2[index]) {
        return true;
      }
      return false;
    });
  }

  return false;
};
// console.log(isAnagram('rat', 'tar'));

//matrix

const multiplyMatrices = function (matrixA, matrixB) {
  // matrix and point

  function multiplyMatrixAndPoint(matrix, point) {
    // Give a simple variable name to each part of the matrix, a column and row number
    let c0r0 = matrix[0],
      c1r0 = matrix[1],
      c2r0 = matrix[2],
      c3r0 = matrix[3];
    let c0r1 = matrix[4],
      c1r1 = matrix[5],
      c2r1 = matrix[6],
      c3r1 = matrix[7];
    let c0r2 = matrix[8],
      c1r2 = matrix[9],
      c2r2 = matrix[10],
      c3r2 = matrix[11];
    let c0r3 = matrix[12],
      c1r3 = matrix[13],
      c2r3 = matrix[14],
      c3r3 = matrix[15];

    // Now set some simple names for the point
    let x = point[0];
    let y = point[1];
    let z = point[2];
    let w = point[3];

    // Multiply the point against each part of the 1st column, then add together
    let resultX = x * c0r0 + y * c0r1 + z * c0r2 + w * c0r3;

    // Multiply the point against each part of the 2nd column, then add together
    let resultY = x * c1r0 + y * c1r1 + z * c1r2 + w * c1r3;

    // Multiply the point against each part of the 3rd column, then add together
    let resultZ = x * c2r0 + y * c2r1 + z * c2r2 + w * c2r3;

    // Multiply the point against each part of the 4th column, then add together
    let resultW = x * c3r0 + y * c3r1 + z * c3r2 + w * c3r3;

    return [resultX, resultY, resultZ, resultW];
  }

  // Slice the second matrix up into rows
  let row0 = [matrixB[0], matrixB[1], matrixB[2], matrixB[3]];
  let row1 = [matrixB[4], matrixB[5], matrixB[6], matrixB[7]];
  let row2 = [matrixB[8], matrixB[9], matrixB[10], matrixB[11]];
  let row3 = [matrixB[12], matrixB[13], matrixB[14], matrixB[15]];

  // Multiply each row by matrixA
  let result0 = multiplyMatrixAndPoint(matrixA, row0);
  let result1 = multiplyMatrixAndPoint(matrixA, row1);
  let result2 = multiplyMatrixAndPoint(matrixA, row2);
  let result3 = multiplyMatrixAndPoint(matrixA, row3);

  // Turn the result rows back into a single matrix
  return [
    result0[0],
    result0[1],
    result0[2],
    result0[3],
    result1[0],
    result1[1],
    result1[2],
    result1[3],
    result2[0],
    result2[1],
    result2[2],
    result2[3],
    result3[0],
    result3[1],
    result3[2],
    result3[3],
  ];
};

// console.log(
//   multiplyMatrices(
//     [4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0, 4, 8, 4, 1],
//     [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
//   )
// );

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

var reverse = function (x) {
  let revNum = parseInt(Math.abs(x).toString().split('').reverse().join(''));
  if (revNum <= 2 ** 31 && revNum >= -1 * 2 ** 31) {
    return revNum * Math.sign(x);
  }
  return 0;
};
// console.log(reverse(521));
// console.log(reverse(1534236469));

// Given an array nums of integers, return how many of them contain an even number of digits.

var findNumbers = function (nums) {
  function logN(n) {
    if (n < 0) {
      n *= -1;
    }
    return Math.floor(Math.log10(n) + 1);
  }
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (logN(nums[i]) % 2 == 0) {
      arr.push(nums[i]);
    }
  }
  return arr.length;
};

// console.log(findNumbers([252]));

// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

var restoreString = function (s, indices) {};

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

var shuffle = function (nums, n) {
  let lastArr = nums.splice(n);
  // console.log(nums, lastArr)
  return nums.flatMap((el, i) => [el, lastArr[i]]);
};

// console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

var runningSum = function (nums) {
  let prev = 0;
  return nums.map((e) => {
    return (prev += e);
  });
};

// console.log(runningSum([2, 5, 1, 3, 4, 7]))

// Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

// A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

// If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

// Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.

var findMiddleIndex = function (nums) {
  let postSum = nums.reduce((a, b) => a + b);
  console.log(postSum);
  let preSum = 0;
  for (let i = 0; i < nums.length; i++) {
    postSum -= nums[i];
    if (postSum === preSum) return i;
    preSum += nums[i];
  }
  return -1;
};

//=================================

var pivotIndex = function (nums) {
  let postSum = nums.reduce((a, b) => a + b);
  console.log(postSum);
  let preSum = 0;
  for (let i = 0; i < nums.length; i++) {
    postSum -= nums[i];
    if (postSum === preSum) return i;
    preSum += nums[i];
  }
  return -1;
};

// console.log(findMiddleIndex([1, 5, 4, 6]));

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
};

// console.log(twoSum([3, 2, 4], 7));

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Hash Map

var twoSumAdvance = function (numbers, target) {
  let result = new Map();
  for (let i = 0; i <= numbers.length; i++) {
    if (result.get(target - numbers[i]) !== undefined) {
      return [result.get(target - numbers[i]) + 1, i + 1];
    } else {
      result.set(numbers[i], i);
    }
  }
};

// console.log(twoSumAdvance([3, 2, 4], 7));

var addBinary = function (a, b) {
  let dec =
    Number(parseInt(a, 2).toString(10)) + Number(parseInt(b, 2).toString(10));
  return (dec >>> 0).toString(2);
};

// console.log(addBinary('1010', '1011'));

var addTwoNumbers = function (l1, l2) {
  let ans = (parseInt(l1.join('')) + parseInt(l2.join('')))
    .toString()
    .split('')
    .reverse();
  return ans;
};

// console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

var isMonotonic = function (nums) {
  return (
    nums.every((el, i) => i === 0 || el <= nums[i - 1]) ||
    nums.every((el, i) => i === 0 || el >= nums[i - 1])
  );
};

// console.log(isMonotonic([1, 1, 2, 3, 3]));

// You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

var targetIndices = function (nums, target) {
  let ans = [];
  let sortArr = nums.sort((a, b) => a - b);
  sortArr.forEach((el, i) => {
    if (el === target) {
      ans.push(i);
    }
  });
  return ans;
};

// console.log(targetIndices([1, 2, 5, 2, 3], 5));

// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

var arrayRankTransform = function (arr) {
  let instanceOfArr = new Set(arr);
  let ans = [];
  let sortArr = [...instanceOfArr].sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    ans[i] = sortArr.indexOf(arr[i]) + 1;
  }
  return ans;
};

// console.log(arrayRankTransform([40, 10, 20, 30, 20]));

// You are playing the following Nim Game with your friend:

// Initially, there is a heap of stones on the table.
// You and your friend will alternate taking turns, and you go first.
// On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
// The one who removes the last stone is the winner.
// Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.

var canWinNim = function (n) {
  if (n % 4 !== 0) {
    return true;
  }
  return false;
};

// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

var isPowerOfThree = function (n) {
  if (n == 0) {
    return false;
  }
  // base case handling:
  if (n == 1) {
    return true;
  } else if (n % 3 == 0) {
    return isPowerOfThree(n / 3);
  } else {
    return false;
  }
};

// console.log(isPowerOfThree(27));

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

var removeElement = function (nums, val) {
  let sortArr = nums.sort((a, b) => a - b);
  return sortArr.filter((el) => el !== val);
};

// console.log(removeElement([3, 2, 2, 3], 3));

// Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

var strStr = function (haystack, needle) {
  if (haystack.indexOf(needle) === -1) {
    return -1;
  }
  return haystack.indexOf(needle);
};

// console.log(strStr('a', 'a'));

var singleNumber = function (nums) {
  const singleNum = {};
  for (let i = 0; i < nums.length; i++) {
    singleNum[nums[i]] = ++singleNum[nums[i]] || 1;
  }
  for (let key in singleNum) {
    if (singleNum[key] === 1) {
      return key;
    }
  }
};

// console.log(singleNumber([1, 2, 1, 2, 3]));

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

var findDuplicate = function (nums) {
  const singleNum = {};
  for (let i = 0; i < nums.length; i++) {
    singleNum[nums[i]] = ++singleNum[nums[i]] || 1;
  }
  for (let key in singleNum) {
    if (singleNum[key] > 1) {
      return key;
    }
  }
};

// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

var singleNumber = function (nums) {
  const singleNum = {};
  for (let i = 0; i < nums.length; i++) {
    singleNum[nums[i]] = ++singleNum[nums[i]] || 1;
  }
  let ans = [];
  for (let key in singleNum) {
    if (!(singleNum[key] > 1)) {
      ans.push(key);
    }
  }
  return ans;
};

// console.log(singleNumber([1, 2, 1, 3, 2, 5]));

// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function (nums) {
  const singleNum = {};
  for (let i = 0; i < nums.length; i++) {
    singleNum[nums[i]] = ++singleNum[nums[i]] || 1;
  }
  let ans = [];
  for (let key in singleNum) {
    if (!(singleNum[key] > 1)) {
      ans.push(key);
    }
  }
  return ans;
};

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

var merge = function (nums1, m, nums2, n) {
  let removeZero = (arr) => arr.filter((el) => !(el === 0));
  let n1 = removeZero(nums1);
  let n2 = removeZero(nums2);
  nums1 = [...n1, ...n2].sort((a, b) => a - b);
  return nums1;
};

// console.log(merge([0], 0, [2, 5, 6], 3));

var uniqueOccurrences = function (arr) {
  let singleNum = {};
  for (let i = 0; i < arr.length; i++) {
    singleNum[arr[i]] = ++singleNum[arr[i]] || 1;
  }
  let ans = Object.values(singleNum).filter(
    (e, index, arr) => arr.indexOf(e) !== index
  );
  if (ans.length === 0) {
    return true;
  }
  return false;
};

// console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));

// You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.

// You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. The final digits are then grouped as follows:

// 2 digits: A single block of length 2.
// 3 digits: A single block of length 3.
// 4 digits: Two blocks of length 2 each.
// The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2.

// Return the phone number after formatting.

var reformatNumber = function (number) {
  const reRemoveDash = /\D/g;
  const reSeparateByDash = /(...?(?=..))/g;
  return number.replace(reRemoveDash, '').replace(reSeparateByDash, '$1-');
};

// console.log(reformatNumber('1-23-45 6 4'));

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

var fizzBuzz = function (n) {
  let ans = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      ans.push('Fizzbuzz');
      continue;
    } else if (i % 3 === 0) {
      ans.push('Fizz');
      continue;
    } else if (i % 5 === 0) {
      ans.push('Buzz');
      continue;
    } else {
      ans.push(`${i}`);
    }
  }
  return ans;
};

// console.log(fizzBuzz(16));

// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

var addStrings = function (num1, num2) {
  return (BigInt(num1) + BigInt(num2)).toString();
};

// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

var multiply = function (num1, num2) {
  return (BigInt(num1) * BigInt(num2)).toString();
};

// Given an integer num, return a string of its base 7 representation.

var convertToBase7 = function (num) {
  return num.toString(7);
};
// console.log(convertToBase7(100))

// Given a string s, return the lexicographically smallest subsequence of s that contains all the distinct characters of s exactly once.

var smallestSubsequence = function (s) {
  return s
    .split('')
    .sort()
    .filter((el, i, arr) => i == arr.indexOf(el))
    .join('');
};

// console.log(smallestSubsequence('cbacdcbc'));

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function (s) {
  return s.reverse();
};

// console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));

// Given two integers num1 and num2, return the sum of the two integers.

var sum = function (num1, num2) {
  return num1 + num2;
};

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

var isUgly = function (num) {
  if (num < 0) return false;
  while (num > 1) {
    if (num % 2 == 0) num /= 2;
    else if (num % 3 == 0) num /= 3;
    else if (num % 5 == 0) num /= 5;
    else return false;
  }
  return num == 1;
};

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

var majorityElement = function (nums) {
  let singleNum = {};
  for (let i = 0; i < nums.length; i++) {
    singleNum[nums[i]] = ++singleNum[nums[i]] || 1;
  }
  return Object.keys(singleNum).reduce((a, b) =>
    singleNum[a] > singleNum[b] ? a : b
  );
};
// console.log(majorityElement([2, 3, 1, 2]));

// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

var countNegatives = function (grid) {
  return grid.flat().filter((el) => el < 0).length;
};

// console.log(
//   countNegatives([
//     [4, 3, 2, -1],
//     [3, 2, 1, -1],
//     [1, 1, -1, -2],
//     [-1, -1, -2, -3],
//   ])
// );

// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

// var countOdds = function (low, high) {
//   let arr = [];
//   for (let i = low; i <= high; i++) {
//     if (i % 2 === 1) {
//       arr.push(i);
//     }
//   }
//   return arr.length;
// };

var countOdds = function (low, high) {
  let odd = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 === 1) {
      odd++;
    }
  }
  return odd;
};

// console.log(countOdds(800445804, 979430543));

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

var getConcatenation = function (nums) {
  return [...nums, ...nums];
};
// console.log(getConcatenation([1, 2, 1]));

// There is a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).

var arraySign = function (nums) {
  let positive = 0;
  let negetive = 0;
  if (nums.includes(0)) {
    return 0;
  } else {
    nums.map((el) => {
      if (el > 0) {
        positive += Math.sign(el);
      } else {
        negetive += Math.sign(el);
      }
    });
  }
  return positive + negetive;
};

// console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));

// Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

// Answers within 10-5 of the actual answer will be considered accepted.

var trimMean = function (arr) {
  let sortArr = [...arr].sort((a, b) => a - b);
  let fiveParcent = (sortArr.length * 5) / 100;
  let spliceArr = sortArr.slice(fiveParcent, -fiveParcent);
  let sum = spliceArr.reduce((acc, cur) => acc + cur, 0);
  return (sum / spliceArr.length).toFixed(5);
};

// console.log(
//   trimMean([6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4])
// );

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

var truncateSentence = function (s, k) {
  return s.split(' ').slice(0, k).join(' ');
};

// console.log(truncateSentence('Hello how are you Contestant', 4));

// Given an integer n, return true if it is a power of Two. Otherwise, return false.

// An integer n is a power of Two, if there exists an integer x such that n == 4x.

var isPowerOfTwo = function (n) {
  return Math.log2(n) % 2 === 0 || Math.log2(n) % 2 === 1;
};

// console.log(isPowerOfTwo(2));

// Reversing an integer means to reverse all its digits.

// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

var isSameAfterReversals = function (num) {
  if (num === 0) {
    return true;
  }
  let reverseArr = num.toString().split('').reverse();
  if (reverseArr[0] == 0) {
    return false;
  } else {
    if (Number(reverseArr.reverse().join('')) === num) {
      return true;
    }
  }
};

// console.log(isSameAfterReversals(0));

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

var reverse = function (x) {
  if (x === 0) {
    return true;
  }
  let reverseArr = x.toString().split('').reverse();
  console.log(reverseArr);
  if (reverseArr[0] == 0) {
    return reverseArr;
  } else {
    if (Number(reverseArr.reverse().join('')) === x) {
      return Number(reverseArr.reverse().join(''));
    }
  }
};

// console.log(reverse(230));

// Reverse bits of a given 32 bits unsigned integer.

// Note:

// Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.

var reverseBits = function (n) {
  let reverseNum = Number(n.split('').reverse().join(''));
  console.log(reverseNum);
  console.log((reverseNum >>> 0).toString(2));
};

// console.log(reverseBits('11111111111111111111111111111101'));

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

var sortedSquares = function (nums) {
  let ans = nums.map((el) => el * el);
  return [...ans].sort((a, b) => a - b);
};

// console.log(sortedSquares([-4, -1, 0, 3, 10]));

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

var sortArrayByParity = function (nums) {
  let odd = [];
  let even = [];
  nums.map((el) => {
    if (el % 2 != 0) {
      odd.push(el);
    } else {
      even.push(el);
    }
  });
  return [...even, ...odd];
};

// console.log(sortArrayByParity([-4, -1, 0, 3, 10]));

// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

var sortArrayByParityII = function (nums) {
  let odd = [];
  let even = [];
  nums.map((el) => {
    if (el % 2 != 0) {
      odd.push(el);
    } else {
      even.push(el);
    }
  });
  // return even.flatMap((e, idx) => [e, odd[idx]]); runtime slow
  return even.reduce((a, c, i) => (a.push(c, odd[i]), a), []);
};

// console.log(sortArrayByParityII([4, 2, 5, 7]));

// You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:

// Sort the values at odd indices of nums in non-increasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
// Sort the values at even indices of nums in non-decreasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.
// Return the array formed after rearranging the values of nums.

var sortEvenOdd = function (nums) {
  let odd = [];
  let even = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      odd.push(nums[i]);
    } else {
      even.push(nums[i]);
    }
  }
  console.log(odd, even);
  let evenSort = even.sort((a, b) => b - a);
  let oddSort = odd.sort((a, b) => a - b);
  let mergeArray = oddSort.flatMap((e, idx) => [e, evenSort[idx]]);
  return mergeArray.filter((e) => e !== undefined);
};

// console.log(
//   sortEvenOdd([
//     36, 45, 32, 31, 15, 41, 9, 46, 36, 6, 15, 16, 33, 26, 27, 31, 44,
//   ])
// );

// You are given an integer array nums consisting of 2 * n integers.

// You need to divide nums into n pairs such that:

// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.

// var divideArray = function (nums) {
//   let singleNum = {};
//   for (let i = 0; i < nums.length; i++) {
//     singleNum[nums[i]] = ++singleNum[nums[i]] || 1;
//   }
//   let arr = Object.values(singleNum);
//   let ans = arr.every((el) => el % 2 == 0);
//   return ans;
// };

var divideArray = function (nums) {
  let singleNum = {};
  for (let i = 0; i < nums.length; i++) {
    singleNum[nums[i]] = ++singleNum[nums[i]] || 1;
  }
  return Object.values(singleNum).every((el) => el % 2 == 0);
};

// console.log(divideArray([3, 2, 3, 2, 2, 2, 1]));

// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

var findSpecialInteger = function (arr) {
  let singleNum = {};
  for (let i = 0; i < arr.length; i++) {
    singleNum[arr[i]] = ++singleNum[arr[i]] || 1;
  }
  return Object.keys(singleNum).reduce((a, b) =>
    singleNum[a] > singleNum[b] ? a : b
  );
};

// console.log(findSpecialInteger([1, 1, 2, 3, 3, 4, 4, 6, 6, 6]));

// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.

var countPairs = function (nums, k) {};

// Given a string s and an array of strings words, determine whether s is a prefix string of words.

// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.

// Return true if s is a prefix string of words, or false otherwise.

var isPrefixString = function (s, words) {
  let joinArr = words.join('').slice(0, s.length);
  if (s === words[0]) {
    return s === joinArr;
  } else {
    return false;
  }
};

// console.log(isPrefixString('aaaaaa', ['aa', 'aaaa', 'banana']));

// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

var firstPalindrome = function (words) {
  let arr = [];
  words.find((el) => {
    if (el === el.split('').reverse().join('')) {
      arr.push(el);
    }
  });
  return arr[0] || '';
};

// console.log(firstPalindrome(['abc', 'car', 'ad', 'raceca', 'cool']));

// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

var arrayStringsAreEqual = function (word1, word2) {
  return word1.join('') === word2.join('');
};

// console.log(arrayStringsAreEqual(['ab', 'c'], ['abc']));

// You are given an integer n, the number of teams in a tournament that has strange rules:

// If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
// If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
// Return the number of matches played in the tournament until a winner is decided.

var numberOfMatches = function (n) {
  let totalMatch = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      totalMatch += n / 2;
      n = n / 2;
    } else {
      totalMatch += (n - 1) / 2;
      n = (n - 1) / 2 + 1;
    }
  }
  return totalMatch;
};

// console.log(numberOfMatches(5));

function isPangram(string) {
  var regex = /([a-z])(?!.*\1)/gi;
  return (string.match(regex) || []).length === 26;
}
// console.log(isPangram('A quick brown fox jumps over the lazy dog'));

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

var canConstruct = function (ransomNote, magazine) {
  return magazine.includes(ransomNote);
};

// console.log(canConstruct('aa', 'aab'));

// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

var largestOddNumber = function (num) {
  let numString = num.toString();
  for (let i = numString.length - 1; i >= 0; i--) {
    // console.log(numString.charAt(i)%2)
    if (numString.charAt(i) % 2 == 1) {
      console.log(numString.substring(0, i + 1));
      return numString.substring(0, i + 1);
    } else {
      return '';
    }
  }
};

// console.log(largestOddNumber('52'));

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

var search = function (nums, target) {
  return nums.indexOf(target);
};

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

// There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

// Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

// Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

// You must decrease the overall operation steps as much as possible.

var search2 = function (nums, target) {
  return nums.includes(target);
};
// console.log(search2([4, 5, 6, 7, 0, 1, 2], 3));

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// 154. Find Minimum in Rotated Sorted Array II

// var findMin = function (nums) {
//   let sortArr = nums.sort((a, b) => a - b);
//   return sortArr[0];
// };

var findMin = function (nums) {
  let sortArr = nums.sort((a, b) => a - b);
  return sortArr[0];
};

// console.log(findMin([4, 5, 6, 7, 0, 1, 2]));

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function (prices) {};

// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

var largestNumber = function (nums) {
  nums = nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
  console.log(nums);
  if (nums[0] === 0) return '0';
  return nums.join('');
};

console.log(largestNumber([3, 30, 34, 5, 9]));
