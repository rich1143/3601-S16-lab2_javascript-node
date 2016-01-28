// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.stringDouble = function(str){
   return str + str;
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

exports.GPACalc = function(grade1, grade2, grade3, cred1, cred2, cred3){
    pointsEarned = studentPoints(grade1, grade2, grade3 , cred1, cred2, cred3);
    totalPoints = 4.0*(cred1 + cred2 + cred3);
    GPA =  Math.round(4.0*(pointsEarned/totalPoints)*10000)/10000;
    return GPA.toString();
};