const fibonacci = function(index) {
    index = Number(index); 
    if(index < 0){return "OOPS";}else if(index == 0){return 0;}

    let fibonacciList = [1, 1];

    for(let i = 1; i < index; i++)
    {
        fibonacciList.push(fibonacciList[i] + fibonacciList[i - 1]);
    }

    return fibonacciList[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;