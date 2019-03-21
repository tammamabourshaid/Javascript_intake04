const callback = (name, callback) => setTimeout(() => callback(`Hello ${name}!`), 1000);

const promise = () => new Promise(resolve => callback("Alexa", resolve));

const asynFn = async () => await promise();

asynFn().then(value => console.log(value));