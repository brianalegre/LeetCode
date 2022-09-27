/* 
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:
-231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?

*/

/*
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // Check if number is negative
    if (x < 0) return false;

    // Declare variables
    let rev = 0;
    let num = x;

    // Reverse the number
    while (num > 0) {
        // Get the last digit
        rev = rev * 10 + num % 10

        // Round down the number
        num = Math.floor(num / 10);
    }
    return rev === x;

};