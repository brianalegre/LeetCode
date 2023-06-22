// 14. Longest Common Prefix
// Easy
// 14.3K
// 4K
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // Declare variable to store characters
    let prefix = '';

    // Check if the array is empty or null
    if (strs === null || strs.length === 0) {
        // Return empty string
        return prefix;
    }

    // Loop through the characters
    for (let i = 0; i < strs[0].length; i++) {
        // Get the first character
        const char = strs[0][i];

        // Loop through the strings
        for (let j = 1; j < strs.length; j++) {
            // Check if the character does not match
            if (strs[j][i] !== char) {
                // Return the prefix
                return prefix;
            }
        }

        // Add the character to the prefix
        prefix += char;
    }

    // Return the prefix
    return prefix;



};