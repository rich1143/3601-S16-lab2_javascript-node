
//Just some example testing.
describe('testing basic functions', function() {
    it('should return the correct string length', function () {
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function () {
        expect(returnKittens()).toBe("kittens");
    });

    it('this test should not fail!', function () {
        expect(dontReturnKittens()).toBe("Not Kittens!");
    });

    it('this should test letter to numbers', function () {
        expect(lettersToNumbers('A')).toEqual(4);
        expect(lettersToNumbers('A-')).toEqual(3.666);
        expect(lettersToNumbers('B+')).toEqual(3.333);
        expect(lettersToNumbers('B')).toEqual(3);
        expect(lettersToNumbers('B-')).toEqual(2.666);
        expect(lettersToNumbers('C+')).toEqual(2.333);
        expect(lettersToNumbers('C')).toEqual(2);
        expect(lettersToNumbers('C-')).toEqual(1.666);
        expect(lettersToNumbers('D+')).toEqual(1.333);
        expect(lettersToNumbers('D')).toEqual(1);
        expect(lettersToNumbers('D-')).toEqual(0.666);
        expect(lettersToNumbers('F')).toEqual(0);
    });



    it('tests studentPoints function', function () {
        expect(studentPoints("A", "A", "A",4.0,3.0,2.0)).toEqual(36.0);
        expect(studentPoints("D","D", "F",3,4,5)).toEqual(7.0);
        expect(studentPoints("D+", "C+", "D-",2,4,4)).toEqual(14.662);
        expect(studentPoints("F", "F", "F",.5,5,2)).toEqual(0.0);
    });

    it('tests GPACalc function', function () {
        expect(GPACalc("A", "A", "A",4.0,3.0,2.0)).toEqual(4.0);
        expect(GPACalc("D","D", "F",3,4,5)).toEqual(0.5833);
        expect(GPACalc("D+", "C+", "D-",2,4,4)).toEqual(1.4662);
        expect(GPACalc("F", "F", "F",.5,5,2)).toEqual(0.0);
    });

});
