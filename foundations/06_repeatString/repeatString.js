const repeatString = function(str, repeats) {
    if(repeats < 0)
    {
        return "ERROR";
    }

    let repeatStr = "";
    for(let i = 0; i < repeats; i++)
    {
        repeatStr += str;
    }
    return repeatStr;
};

// Do not edit below this line
module.exports = repeatString;
