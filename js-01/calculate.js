
const calculate = (number1, string, number2) => {
    if(string == "+"){
       return number1 + number2;
    }else if(string == "*"){
        return number1 * number2;
    }else if(string == "/"){
        return number1 / number2;
    }else if(string == "-"){
        return number1 - number2;
    }
};



module.exports = {calculate};