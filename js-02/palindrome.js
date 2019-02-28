function isPalindrome(eini) {
    Truth = true;
    steini = eini.toString();
    for (i = 0; i < steini.length; i++) {
        if (steini.charAt(i) != steini.charAt(steini.length - i - 1)) {
            Truth = false;
        }
    }
    return Truth;
}

module.exports = { isPalindrome };