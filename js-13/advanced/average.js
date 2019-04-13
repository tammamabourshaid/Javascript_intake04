const getAverage = temperatures => {
  const average = {
    "2019-03-25": temperatures[0],
    "2019-03-26": temperatures[1],
    "2019-03-27": temperatures[2],
    "2019-03-28": temperatures[3],
    "2019-03-29": temperatures[4],
    "2019-03-30": temperatures[5],
    "2019-03-31": temperatures[6],
    "2019-04-01": temperatures[7],
    "2019-04-02": temperatures[8],
    "2019-04-03": temperatures[9],
    "2019-04-04": temperatures[10],
    "2019-04-05": temperatures[11],
    "2019-04-06": temperatures[12]
  };

  return average;
};

module.exports = { getAverage };