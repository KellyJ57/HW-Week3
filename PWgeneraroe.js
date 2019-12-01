let capL = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

function getpasswordoptions() {
    let length = parseInt(prompt(
        "How many characters would you like yourpassword to contain? (between 8-128)"
    ))
    if (isNaN(length) === true) {
        alert("Your paswword length must be a number")
        return;
    }

    if (length < 8) {
        alert("You must have at least 8 characters")
        return;
    }

    if (length > 128) {
        alert("This is too many characters.  Less than 129, please")
        return;
    }

    let hasSpecialCharacters = confirm ("Click ok to confirm special charaters");
    let hasNumericCharacters = confirm ("Click ok to confirm numeric charaters");
    let hasUpperCharacters = confirm ("Click ok to confirm upper cased charaters");
    let hasLowerCharacters = confirm ("Click ok to confirm lower cased charaters");
}

getpasswordoptions();

// I think I need a for loop to for the number of characters chosen.  

    //for (let length > 0; index < array.length; index++) {
        //const element = array[index];
        
    //}
// no idea


    // function generate () {   
    //   let PassLength = prompt("How many characters between 8-128?");
    //   if ((PassLength >= 7 || PassLength <= 129)) {
    //     alert("You chose" + PassLength)
    //   }
    //   else alert("You must choose between 8 and 128")
    // }


