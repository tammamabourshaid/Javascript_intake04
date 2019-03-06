function factorial(num){
    var fact = 1;
    for(i=num;i>=1;i--){
        fact = fact * i;
    }
    return fact;
}
// var factorial = function(n) {
//     return n > 1
//       ? n * factorial(n - 1)
//       : n < 0
//           ? n * factorial(n + 1)
//           : 1;
//   }
module.exports={factorial};