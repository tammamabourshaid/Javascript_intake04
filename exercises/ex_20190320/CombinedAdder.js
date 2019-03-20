const firstNumberProvider = (callback) => {
    callback(1);
};

const secondNumberProvider = () => {
    return new Promise(resolve => resolve(2));
};

const thirdNumberProvider = () => {
    return new Promise(resolve => resolve(3));
};

const adder = () => {
    let num1 = 0,
        num2 = 0,
        num3 = 0;

    firstNumberProvider((number) => {
        num1 = number;
        secondNumberProvider().then(async (number) => {
            num2 = number;
            num3 = await thirdNumberProvider();

            console.log(num1 + num2 + num3);

        })
    });

};
adder();