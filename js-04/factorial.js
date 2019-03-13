function factorial(n) {
if (n!==0){
        return (n != 1) ? n * factorial(n - 1) : 1;
    }else{
        return 1;
    }
}
 //alert( factorial(5) ); // 120

module.exports = { factorial };