const palindromes = function (str) {
    /*
    1. Convert str to array of characters to be able to apply array operations on it
    2. Store the reverse order of str in a seperate array
    3. Use .filter() to remove punctuation
    4. Combine arrays of characters back into strings then compare
    */
    str = str.toLowerCase();
    let normalOrder = str.split("");

    //need copy over elements to a dummy array because .reverse() overwrites the original array
    let copyNormalOrder = [];
    normalOrder.forEach(element => {
        copyNormalOrder.push(element);
    });

    let reverseOrder = copyNormalOrder.reverse();

    normalOrder = normalOrder.filter(char => char != '!' && char != '.' && char != ',' && char != " ");
    reverseOrder = reverseOrder.filter(char => char != '!' && char != '.' && char != ',' && char != " ");

    normalOrder = normalOrder.toString();
    reverseOrder = reverseOrder.toString();

    return normalOrder == reverseOrder;
};

// Do not edit below this line
module.exports = palindromes;