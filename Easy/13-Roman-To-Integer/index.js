/* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

*/

/*
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
    // Declare variables
    let sum = 0;
    let prev = 0;
    let current = 0;
    let map = new Map();

    // Map the roman numerals to their values
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);

    // Loop through the string
    for (let i = 0; i < s.length; i++) {
        // Get the current value
        current = map.get(s[i]);

        // Check if the current value is greater than the previous value
        if (current > prev) {
            // Subtract the previous value from the current value
            sum += current - 2 * prev;
        } else {
            // Add the current value to the sum
            sum += current;
        }

        // Set the previous value
        prev = current;
    }

};
