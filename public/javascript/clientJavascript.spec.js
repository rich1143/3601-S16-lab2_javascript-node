
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    it('this test should not fail!', function(){
        expect(dontReturnKittens()).toBe("Not Kittens!");
    });

    it('this should test letter to numbers', function()
        expect(lettersToNumbers('A')).toEqual(4);
        expect(lettersToNumbers('B')).toEqual(3);
        expect(lettersToNumbers('C')).toEqual(2);
        expect(lettersToNumbers('D')).toEqual(1);
        expect(lettersToNumbers('F')).toEqual(0);
        expect(lettersToNumbers('A-')).toEqual(3.666);
        expect(lettersToNumbers('C+')).toEqual(2.333);
    )
});

