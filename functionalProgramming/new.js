const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const name = [];
readline.question(`What's your username?`, (username) => {
    name.push(username)

    console.log(username);
    readline.question(`What's your password?`, (pwd1) => {
        name.push(pwd1)

        console.log(pwd1);
        readline.question(`confirmed password?`, (pwd2) => {
            name.push(pwd2)
            console.log(name.username)
            console.log(name)
            // console.log(name.value);

            readline.close()
        })
    })
})


function CheckPassword(name) {
    name = {
        value: 10
    }
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (name.value.match(paswd)) {
        alert('Correct, try another...')
        return true;
    } else {
        alert('Wrong...!')
        return false;
    }
}
CheckPassword(name)
// function checkForm(name) {
//     if (name.username == "") {
//         alert("Error: Username cannot be blank!");
//         name.username;
//         return false;
//     }
//     re = /^\w+$/;
//     if (!re.test(name.username)) {
//         alert("Error: Username must contain only letters, numbers and underscores!");
//         name.username;
//         return false;
//     }

//     if (name.pwd1 != "" && name.pwd1 == name.pwd2) {
//         if (name.pwd1 < 6) {
//             console.log(("Error: Password must contain at least six characters!"));

//             name.pwd1;
//             return false;
//         }
//         if (name.pwd1 == name.username) {
//            // alert("Error: Password must be different from Username!");
//             name.pwd1;
//             return false;
//         }
//         re = /[0-9]/;
//         if (!re.test(name.pwd1)) {
//            // alert("Error: password must contain at least one number (0-9)!");
//             name.pwd1;
//             return false;
//         }
//         re = /[a-z]/;
//         if (!re.test(name.pwd1)) {
//            // alert("Error: password must contain at least one lowercase letter (a-z)!");
//             name.pwd1.focus();
//             return false;
//         }
//         re = /[A-Z]/;
//         if (!re.test(name.pwd1)) {
//           //  alert("Error: password must contain at least one uppercase letter (A-Z)!");
//             name.pwd1();
//             return false;
//         }
//     } else {
//        // alert("Error: Please check that you've entered and confirmed your password!");
//         name.pwd1;
//         return false;
//     }

//    // alert("You entered a valid password: " + name.pwd1);
//     return true;
// }

// checkForm(name)