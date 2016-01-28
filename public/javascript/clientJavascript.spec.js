
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

    it('tests an averaging function', function () {
        expect(average(4, 4, 4)).toEqual(4);
        expect(average(1, 1, 0)).toEqual(.666);
        expect(average(1.333, 3.333, 0.666)).toEqual(1.777);
        expect(average(0, 0, 0)).toEqual(0);
    });
});
