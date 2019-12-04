let capL = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

function getPasswordOptions() {
    let length = parseInt(prompt(
        "How many characters would you like your password to contain? (between 8-128)"
    ))
    if (isNaN(length) === true) {
        alert("Your paswword length must be a number")
        return;
    }

    if (length < 8) {
        alert("You must have at least 8 characters")
        return;
    }

    if (length > 128){
        alert("This is too many characters.  Less than 129, please")
        return; 
    }

    let hasSpecialCharacters = confirm ("Click ok to confirm special charaters");
    let hasNumericCharacters = confirm ("Click ok to confirm numeric charaters");
    let hasUpperCharacters = confirm ("Click ok to confirm upper cased charaters");
    let hasLowerCharacters = confirm ("Click ok to confirm lower cased charaters");

    if ( hasLowerCharacters === false && hasNumericCharacters === false && hasSpecialCharacters ===false && hasUpperCharacters ===false) {
        alert("Please select at least one type")
        return; 
    }
    let passwordOptions = {
        length: length,
        hasLowerCharacters: hasLowerCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasSpecialCharacters: hasSpecialCharacters,
        hasUpperCharacters: hasUpperCharacters
    }
    return passwordOptions
}
function getRandom(arr) {
    let randomIndex = Math.floor (Math.random () * arr.length);
    let randomElement = arr [randomIndex];
    return randomElement
}

function generatePassword () {
    let options = getPasswordOptions ();
    let result = [];
    let possibleCharacters = [];
    let gauranteedCharacters = [];

    if (options.hasSpecialCharacters) {
        possibleCharacters = possibleCharacters.concat(special)
        gauranteedCharacters.push (getRandom(special));
    }
    if (options.hasNumericCharacters) {
        possibleCharacters = possibleCharacters.concat(number)
        gauranteedCharacters.push (getRandom(number));
    }
    if (options.hasUpperCharacters) {
        possibleCharacters = possibleCharacters.concat(capL)
        gauranteedCharacters.push (getRandom(capL));
    }
    if (options.hasLowerCharacters) {
        possibleCharacters = possibleCharacters.concat(lowL)
        gauranteedCharacters.push (getRandom(lowL));
    }

    for (let i = 0; i < options.length; i++) {
        let possibleCharacter = getRandom (possibleCharacters)
        result.push  (possibleCharacter)
    }
    for (let i = 0; i < gauranteedCharacters.length; i++) {
        result [i] = gauranteedCharacters [i]
        
    }
    return result.join ("")
    
}
let copyButton = document.querySelector ("#copy");
let generateButton = document.querySelector ("#generate");


function writePassword ()  {
    let password = generatePassword ();
    let passwordText = document.querySelector ("#password");
    passwordText.value = password;
    copyButton.removeAttribute ("disabled");
    copyButton.focus ();

function copyToClipboard() {
    var passwordText = document.querySelector("#password");
        passwordText.select();
        document.execCommand("copy");
        alert(
          "Your password " + passwordText.value + " was copied to your clipboard."
        );
      }
// Add event listener to generate button
      generateBtn.addEventListener("click", writePassword);
      // Add event listener to copy button
      copyBtn.addEventListener("click", copyToClipboard);

}




// arrays for options

//Create pwOption[]                                  

//if (hasSpecialCharacters === true) {
   //// pwoption = pwoption.concat(capL)
//}
//if (hasSpecialCharacters === true) {
//    pwoption = pwoption.concat(number)
//}
//if (hasSpecialCharacters === true) {
 //   pwoption = pwoption.concat(lowL)
//}
//if (hasSpecialCharacters === true) {
 //   pwoption = pwoption.concat(special)
//}


// I think I need a for loop to for the number of characters chosen.  

    //for (let length > 0; length < array.length; index++) {
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


