// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 


function reverseText(inputText){
    let reverseText = "";

    for(let i=inputText.length - 1; i>= 0; i--){
        reverseText += inputText[i];
    }

    return reverseText;
}

const message = "This is secret text";

const secret = reverseText(message);
console.log(secret);
