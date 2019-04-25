const { avgPerDay } = require("./avgPerDay.js");

describe(`In file history_export_2019-04-07, you will find a time-based
series of weather measurements from Vienna.
The data is an official and unmodified CSV export from https://www.meteoblue.com.
Calculate the average degrees per day`, () => {
  it("should calculate the average", async () => {
    const weatherData = await avgPerDay();

    expect(weatherData).toEqual({
      "2019-03-25": 9.74,
      "2019-03-26": 6.92,
      "2019-03-27": 8,
      "2019-03-28": 9.43,
      "2019-03-29": 10.93,
      "2019-03-30": 12.53,
      "2019-03-31": 14.09,
      "2019-04-01": 11.06,
      "2019-04-02": 11.18,
      "2019-04-03": 13.32,
      "2019-04-04": 13.28,
      "2019-04-05": 11.38,
      "2019-04-06": 10.45
    });
  });
});
