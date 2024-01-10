/* Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // Create an object to store elements and their indices
    const indexMap = {};

    // Iterate through the array using a traditional for loop
    for (let i = 0; i < nums.length; i++) {
        // Get the current element
        const currentNum = nums[i];

        // Check if the current element is in the indexMap
        if (currentNum in indexMap && i - indexMap[currentNum] <= k) {
            return true; // Return true if a duplicate within distance k is found
        }

        // Update or add the index of the current element in the indexMap
        indexMap[currentNum] = i;
    }

    // If no duplicates within distance k are found, return false
    return false;
};


console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // Output: true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // Output: true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // Output: false
