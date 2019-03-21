const callback = callback => setTimeout(() => callback(100), 500);

const callbackBasedFn = value => console.log(value);

const asyncFn = async () => await 69;

const combineBothPromises = () => {
  callback(number => {
    const number1 = number;
    asyncFn().then(async () => {
      const number2 = await asyncFn(),
        sum = number1 + number2;
      console.log(sum);
    });
  });
};

combineBothPromises();