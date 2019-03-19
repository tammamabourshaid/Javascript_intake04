const callback = callback => setTimeout(() => callback(5), 1000);

const promise = () => new Promise(resolve => resolve(10));

const asyncAwait = async () => await 15;

const combinedAdder = () => {
  callback(number5 => {
    const number1 = number5;
    asyncAwait().then(async () => {
      const number2 = await promise(),
        number3 = await asyncAwait(),
        sum = number1 + number2 + number3;
      console.log(sum);
    });
  });
};

combinedAdder();