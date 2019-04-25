
function passwordVerifier(password) {
  let checker = 0;

  if (password === null) {
    return false;
  }
  else if (!password.match(/[a-z]+/)) {
    return false;

  } else {
    if (password.match(/[a-z]+/)) {
      checker++;
    }
    if (password.match(/[A-Z]+/)) {
      checker++;
    }
    if (password.match(/[0-9]+/)) {
      checker++;
    }
    if (password.length > 8) {
      checker++;
    }
    switch (checker) {
      case 0:
      case 1:
      case 2:
        return false;
      default:
        return true;
    }
  }
}


module.exports = { passwordVerifier };

