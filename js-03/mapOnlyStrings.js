function mapOnlyStrings(array, fn) {
  const test = [];

  array.forEach(element => {
    const mapped = fn(element);
    typeof mapped === "string" ? test.push(mapped) : test.push(element);
  });

  return test;
}

module.exports = { mapOnlyStrings };

// function mapOnlyStrings(array, fn) {
//   const test = [];

//   array.forEach(element => {
//     const mapped = fn(element);
//     if (typeof mapped === "string") {

//       test.push(mapped)
//     }
//     else {
//       test.push(element);
//     }

//   });
//   console.log(test); return test;
// }

// module.exports = { mapOnlyStrings };