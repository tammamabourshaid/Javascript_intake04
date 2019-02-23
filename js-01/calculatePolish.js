const calculatePolish = ( string, number1, number2) => {
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

module.exports = {calculatePolish};