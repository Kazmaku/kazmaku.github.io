var pwd;
var strength;
let wordarray = [];
let word1array = [];
let temp = [];
let shuffledarray = [];
let numarray = [];
let temparray = [];
let finalarray = [];
let final = "";
let ss = [];
let s1, s2, s3;
var isAlnum = function (ch) {
    return /^[0-9]$/i.test(ch);
}
var isUpperCase = function (n) {
    if (n >= "A" && n <= "Z") {
        return true
    } else {
        return false
    }
}
var getRandomCharacter = function (length) {
    var result = '';
    var symbols = "!@#$%^&*(){}[]=<>/.";
    for (var i = 0; i < length; i++) {
        result += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return result;
}
var randomNum = function (min, max) {
    let num = [];
    for (var i = 0; i < 3; i++) {
        num.push(Math.floor(Math.random() * max) + min);
    }
    return num;
}
var randomNum4 = function (min, max) {
    let num = [];
    for (var i = 0; i < 4; i++) {
        num.push(Math.floor(Math.random() * max) + min);
    }
    return num;
}
function getThisPassword() {
    let element = document.getElementById('strength');
    let element1 = document.getElementById('suggestion')
    element.style.color = 'red';
    element1.style.color = 'red';
    strength = "weak";
    pwd = document.getElementById("pwd").value;
    if (pwd.length < 8) {
        strength = "weak";
    }
    else {
        wordarray = pwd.split('');
        for (var i = 0; i < pwd.length; i++) {
            if (isAlnum(wordarray[i])) {
                for (var j = 0; j < pwd.length; j++) {
                    if (isUpperCase(wordarray[j])) {
                        strength = "medium";
                        element.style.color = 'orange';
                    }
                }
            }
        }
    }
    if (strength == "medium" && pwd.length >= 12) {
        strength = "strong";
        element.style.color = 'yellow';
    }
    if (strength == "medium") {
        document.getElementById("suggestion").innerHTML = "Suggestion:";
        element1.style.color = 'black';
    }
    else if (strength == "strong") {
        document.getElementById("suggestion").innerHTML = "";
    }
    else if (strength == "weak") {
        document.getElementById("suggestion").innerHTML = "密碼強度不夠";
        element1.style.color = 'red';
    }
    document.getElementById("strength").innerHTML = strength;
    if (strength == "medium") {
        for (var x = 0; x < 3; x++) {
            word1array = wordarray;
            final = "";
            shuffledarray = [];
            numarray = [];
            temparray = [];
            finalarray = [];
            ss = [];
            for (var i = 0; i < 3; i++) {
                temp[i] = randomNum(0, 7)[i];
                word1array[temp[i]] = word1array[temp[i]].toUpperCase();
            }

            for (var i = 0; i < 8; i++) {
                temparray[i] = wordarray[i];
            }
            numarray = randomNum4(0, 10);
            shuffledarray = temparray.concat(numarray);
            shuffledarray.push(getRandomCharacter(1));
            finalarray = shuffledarray.sort((a, b) => 0.5 - Math.random());
            for (var i = 0; i < 12; i++) {
                final += finalarray[i];
            }
            ss.push(final);
            if(x==0){
                document.getElementById("s1").innerHTML = ss[0];
            }
            else if(x==1){
                document.getElementById("s2").innerHTML = ss[0];
            }
            else if(x==2){
                document.getElementById("s3").innerHTML = ss[0];
            }
            
            word1array = [];
        }
    }
    else {
        document.getElementById("s1").innerHTML = "";
        document.getElementById("s2").innerHTML = "";
        document.getElementById("s3").innerHTML = "";
    }
}