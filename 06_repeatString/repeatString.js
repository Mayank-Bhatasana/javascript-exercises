const repeatString = function(string, nums) {
    let temp = '';
    if(nums < 0 ) return "ERROR"
    for (let i = 0; i < nums; i++)
        temp += string;

    return temp;
};

// Do not edit below this line
module.exports = repeatString;
