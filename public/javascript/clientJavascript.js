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
    if(letterGrade=="A"){
        return 4.0;
    }
    else if(letterGrade=="A-"){
        return 3.666;
    }
    else if(letterGrade=="A-"){
        return 3.666;
    }else if(letterGrade=="B+"){
        return 3.333;
    }else if(letterGrade=="B"){
        return 3.0;
    }else if(letterGrade=="B-"){
        return 2.666;
    }else if(letterGrade=="C+"){
        return 2.333;
    }else if(letterGrade=="C"){
        return 2.0;
    }else if(letterGrade=="C-"){
        return 1.666;
    }
    else if(letterGrade=="D+"){
        return 1.333;
    }else if(letterGrade=="D"){
        return 1.0;
    }
    else if(letterGrade=="D-"){
        return 0.666;
    }
    else{
        return 0;
    }
};

var studentPoints = function(grade1,grade2,grade3, cred1, cred2, cred3){
    G1 = lettersToNumbers(grade1)*cred1;
    G2 = lettersToNumbers(grade2)*cred2;
    G3 = lettersToNumbers(grade3)*cred3;
    sum = G1 + G2 + G3;
    return sum;
};

var GPACalc = function(grade1, grade2, grade3, cred1, cred2, cred3){
    pointsEarned = studentPoints(grade1, grade2, grade3 , cred1, cred2, cred3);
    totalPoints = 4.0*(cred1 + cred2 + cred3);
    return (pointsEarned/totalPoints);
};