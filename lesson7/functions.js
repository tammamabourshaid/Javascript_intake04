const firstNumberProvider = function (callback) {
    callback(1);
};

const secondNumberProvider = function () {
    return new Promise (resolve => resolve(2));
}

const thirdNumberProvider = async function () {
    return 3;
}

const adder = function () {
    firstNumberProvider(number => {
        const number1 = number;
        secondNumberProvider().then(async function (number) {
            const number2 = number;
            const number3 = await thirdNumberProvider();
            console.log(number1 + number2 + number3);

        })
    })

};
adder();