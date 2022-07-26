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


