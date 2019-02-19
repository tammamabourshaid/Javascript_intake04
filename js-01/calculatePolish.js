function calculatePolish(mathFn, number1, number2){
    switch(mathFn){
        case "+":
        return number1 + number2;
        case "-":
        return number1 - number2;
        case "*":
        return number1 * number2;
        case "/":
        return number1 / number2;
        default:
        console.log("not a math function");
    }
}

module.exports = {calculatePolish};