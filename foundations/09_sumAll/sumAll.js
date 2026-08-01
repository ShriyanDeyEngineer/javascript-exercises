const sumAll = function(num1, num2) {
    if((typeof(num1) != "number" || typeof(num2) != "number") ||  
    (num1 < 1 || num2 < 1) ||
    (num1 % 1 != 0 || num2 % 1 != 0))
    {return "ERROR";}

    let lowBound, highBound, total = 0;

    if(num1 < num2){lowBound = num1; highBound = num2;}
    else{lowBound = num2; highBound = num1;}

    for(let i = lowBound; i <= highBound; i++)
    {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
