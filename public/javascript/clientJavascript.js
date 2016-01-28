// Our javascript for the CLIENT side.
// This will run on the browser.

/**
 * Takes no arguments, and creates a javascript alert in the client's browser.
 */
var sendAlert = function(){
    alert("THIS IS AN ALERT!");
};

/**
 * Used for getting the length of a string. For example only, you won't likely need to use something like this...
 * DIFFERENT FROM THE stringLength function in the server side javascript!!!
 *
 * @param str  - the string to have its length returned
 * @returns {*}  - an integer, the length of the string
 */
var testStringLength = function(str){
    return str.length;
};


/**
 * Takes no arguments, returns the string "kittens"
 *
 * @returns {string}  - returns "kittens"
 */
var returnKittens = function(){
    return "kittens";
};

var dontReturnKittens = function(){
    return "Not Kittens!";
};

var lettersToNumbers = function(letterGrade){
    return 0;
};

var average = function(grade1,grade2,grade3){
    G1 = lettersToNumbers(grade1);
    G2 = lettersToNumbers(grade2);
    G3 = lettersToNumbers(grade3);
    sum = G1 + G2 + G3;
    return sum/3.0;
};