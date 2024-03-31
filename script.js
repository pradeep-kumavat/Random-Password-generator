const passwordBox = document.getElementById("password");
const pcopy = document.getElementById("pcopy");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456890";
const symbol = "!@#$%^&*(){/}|[]" ;

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    pblock();
    let password= "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
function pshow(){
    pcopy.style.display = "block";
}
function pblock(){
    pcopy.style.display = "none";
}
