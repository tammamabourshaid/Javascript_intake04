function getDigitProperties(eini) {
    let keys = Object.keys(eini);
    return keys.filter(key => !/\d/.test(key));
};



console.log(getDigitProperties({
    foo1: "abcd",
    t3st: "test",
    name: 1
}));

console.log(getDigitProperties({}));

/*
function hasNumber(myString) {
    return /\d/.test(myString);
}*/