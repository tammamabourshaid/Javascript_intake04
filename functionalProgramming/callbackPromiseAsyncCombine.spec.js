const {combinerAsync
} = require("./callbackPromiseAsyncCombine.js");

describe("calculat numbers with combine callback,promise and async;)", () => 
      it("should add a 1", async() => {
    //     const numberProviderCallback = (callback) =>
    //     setTimeout(() => callback(1), 500);
    
    // const numberProviderPromise = () => new Promise(resolve =>
    //     setTimeout(() => numberProviderCallback(resolve, 1000)));
    
    // const numberProviderAsync = async () =>
    //     await numberProviderPromise()
    
    const combinerAsync = () => 
        numberProviderCallback(async number => {
            const number1 = await number,
                  number2 = await numberProviderPromise(),
                  number3 = await numberProviderAsync();
            console.log(number1 + number2 + number3); 
             expect(await combinerAsync(1)).toBe(3);
        });
      }));