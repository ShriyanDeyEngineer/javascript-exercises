const removeFromArray = function(items, ...args) {
    return items.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
