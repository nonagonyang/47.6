/** product: calculate the product of an array of numbers. */

function product(nums,i=0) {
  if(i===nums.length) return 1;

  return nums[i]*product(nums,i+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // Returns first word's length if list length is 1
  if (words.length === 1) return words[0].length
  // Returns the longer words between the first 2 words in an array
  if (words.length === 2) return (words[0].length > words[1].length) ? words[0].length : words[1].length
  // If array length is 3+ 
  const tempLongest=longest(words.slice(1))
  return (words[0].length > tempLongest) ? words[0].length : tempLongest;
}



/** everyOther: return a string with every other letter. */

function everyOther(str,i=0) {
  if(i>=str.length) {
    return "";
  }
  return str[i] + everyOther(str,i+2)
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function reverseStr(str, i=str.length-1){
  if(i<0) return "";
  return str[i]+reverseStr(str,i-1)
}

function isPalindrome(str) {
  return str===reverseStr(str)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val,i=0) {
  if(i===arr.length) return -1;
  if(arr[i]===val){
    return i
  } else{
    return findIndex(arr, val, i+1)
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str,i=str.length-1) {
  if(i<0) return "";
  return str[i]+revString(str,i-1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
// M as the middle point of the array
// 1. If M == T, return true
// 2. If length of ARR is 0, return false (note: step 1 short circuits, ensuring we only hit step 2 if step 1 evaluates to false)
// 3. If T < M, return the result of the recursion on the lower half of ARR
// 4. If T > M, return the result of the recursion on the the latter half of ARR


function binarySearch(arr, val,startIdx=0, endIdx=arr.length){
  if (startIdx > endIdx) {
    return -1
  }
  let midIdx=Math.floor((startIdx+endIdx)/2)

  if (arr[midIdx]===val){
    return midIdx 
  }
  if(arr[midIdx]>val){
    return binarySearch(arr, val, startIdx,endIdx=midIdx-1)
  } 
  else{
    return binarySearch(arr, val, startIdx=midIdx+1, endIdx)
   }
  }

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
