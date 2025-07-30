const palindromes = function (string) {

    // With map

    // const map = new Map()
    // map.set(' ', true);
    // map.set(',', true);
    // map.set('!', true);
    // map.set('.', true);


    // With Object
    const obg = {
        ' ' : true,
        '.' : true,
        '!' : true,
        ',' : true,
    }

    // for map use !map.has(val)
    const temp = string.split('').filter(val => !obg[val]);
    const temp2 = temp.join('').toLowerCase();
    const temp3 = temp2.split('').reverse().join('')
    return temp2 === temp3
};

// Do not edit below this line
module.exports = palindromes;
