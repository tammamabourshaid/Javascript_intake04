const oldSchoolCallback = callback => setTimeout(() => callback(1), 1000);

const callbackPromise = () => new Promise(resolve => oldSchoolCallback(resolve));

const callBackAsync = async () => await callbackPromise();

callBackAsync().then(value => console.log(value));