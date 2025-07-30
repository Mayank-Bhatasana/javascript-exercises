const removeFromArray = function(...arr) {
    const map = new Map()
    for (let i = 1; i < arr.length; i++) map.set(arr[i], true);
    return arr[0].filter(item => !map.has(item))
};

// Do not edit below this line
module.exports = removeFromArray;
