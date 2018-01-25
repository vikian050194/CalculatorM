var assert = require('assert'),
    Integer = require('./../integer/integer');

describe('Tests for Integer', function () {
    it('Init Integer', function () {
        var number = new Integer('2');

        assert.equal(number.toString(), '2');
    });

    it('Init negative nimber', function () {
        var number = new Integer('-2');

        assert.equal(number.toString(), '-2');
    })

    it('Init big negative number', function () {
        var number = new Integer('-2235353410049237463142341099923123454687865');

        assert.equal(number.toString(), '-2235353410049237463142341099923123454687865');
    })

    it('add 210 to 95', function () {
        var firstNumber = new Integer('210');
        var secondNumber = new Integer('95');
        var expected = new Integer('305');

        var actual = Integer.add(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('add 0 to 0', function () {
        var firstNumber = new Integer('0');
        var secondNumber = new Integer('0');
        var expected = new Integer('0');

        var actual = Integer.add(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('add -87 to -59', function () {
        var firstNumber = new Integer('-87');
        var secondNumber = new Integer('-59');
        var expected = new Integer('-146');

        var actual = Integer.add(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('add 87 to -59', function () {
        var firstNumber = new Integer('87');
        var secondNumber = new Integer('-59');
        var expected = new Integer('28');

        var actual = Integer.add(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('add -87 to 59', function () {
        var firstNumber = new Integer('-87');
        var secondNumber = new Integer('59');
        var expected = new Integer('-28');

        var actual = Integer.add(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('add 21037831813 to 959', function () {
        var firstNumber = new Integer('21037831813');
        var secondNumber = new Integer('959');
        var expected = new Integer('21037832772');

        var actual = Integer.add(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('add 21037831813453466456745765767525 to 46457656765756756465656756', function () {
        var firstNumber = new Integer('21037831813453466456745765767525');
        var secondNumber = new Integer('46457656765756756465656756');
        var expected = new Integer('21037878271110232213502231424281');

        var actual = Integer.add(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('add-210378318130 to 959', function () {
        var firstNumber = new Integer('-21037831813');
        var secondNumber = new Integer('959');
        var expected = new Integer('-21037830854');

        var actual = Integer.add(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('sub 1 to 1', function () {
        var firstNumber = new Integer('1');
        var secondNumber = new Integer('1');
        var expected = new Integer('0');

        var actual = Integer.sub(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('sub 100 to 9', function () {
        var firstNumber = new Integer('100');
        var secondNumber = new Integer('9');
        var expected = new Integer('91');

        var actual = Integer.sub(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('sub 21 to 30', function () {
        var firstNumber = new Integer('21');
        var secondNumber = new Integer('30');
        var expected = new Integer('-9');

        var actual = Integer.sub(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('sub 1000 to 999', function () {
        var firstNumber = new Integer('1000');
        var secondNumber = new Integer('999');
        var expected = new Integer('1');

        var actual = Integer.sub(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('sub 1000000000000 to 999999999999', function () {
        var firstNumber = new Integer('1000000000000');
        var secondNumber = new Integer('999999999999');
        var expected = new Integer('1');

        var actual = Integer.sub(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('sub -21 to -30', function () {
        var firstNumber = new Integer('-21');
        var secondNumber = new Integer('-30');
        var expected = new Integer('9');

        var actual = Integer.sub(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('sub -21 to 30', function () {
        var firstNumber = new Integer('-21');
        var secondNumber = new Integer('30');
        var expected = new Integer('-51');

        var actual = Integer.sub(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('sub 21 to -30', function () {
        var firstNumber = new Integer('21');
        var secondNumber = new Integer('-30');
        var expected = new Integer('51');

        var actual = Integer.sub(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('sub 100000000 to 1', function () {
        var firstNumber = new Integer('100000000');
        var secondNumber = new Integer('1');
        var expected = new Integer('99999999');

        var actual = Integer.sub(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('sub -645645776578 to 343255465768768798', function () {
        var firstNumber = new Integer('-645645776578');
        var secondNumber = new Integer('343255465768768798');
        var expected = new Integer('-343256111414545376');

        var actual = Integer.sub(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('sub 354456436346 to 4364', function () {
        var firstNumber = new Integer('354456436346');
        var secondNumber = new Integer('4364');
        var expected = new Integer('354456431982');

        var actual = Integer.sub(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('sub 965394583456 to 89534', function () {
        var firstNumber = new Integer('965394583456');
        var secondNumber = new Integer('89534');
        var expected = new Integer('965394493922');

        var actual = Integer.sub(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('sub 354456436346345745645684965394583456 to 4364565454645823653489534', function () {
        var firstNumber = new Integer('354456436346345745645684965394583456');
        var secondNumber = new Integer('4364565454645823653489534');
        var expected = new Integer('354456436341981180191039141741093922');

        var actual = Integer.sub(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('sub -1 to -1000000000000', function () {
        var firstNumber = new Integer('-1');
        var secondNumber = new Integer('-1000000000000');
        var expected = new Integer('999999999999');

        var actual = Integer.sub(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('mul 9 to 1', function () {
        var firstNumber = new Integer('9');
        var secondNumber = new Integer('10');
        var expected = new Integer('90');

        var actual = Integer.mul(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('mul 935345 to 0', function () {
        var firstNumber = new Integer('935345');
        var secondNumber = new Integer('0');
        var expected = new Integer('0');

        var actual = Integer.mul(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('mul 0 to 0', function () {
        var firstNumber = new Integer('0');
        var secondNumber = new Integer('0');
        var expected = new Integer('0');

        var actual = Integer.mul(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('mul 0 to 54364365345436', function () {
        var firstNumber = new Integer('0');
        var secondNumber = new Integer('54364365345436');
        var expected = new Integer('0');

        var actual = Integer.mul(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('mul 9187 to 189', function () {
        var firstNumber = new Integer('9187');
        var secondNumber = new Integer('189');
        var expected = new Integer('1736343');

        var actual = Integer.mul(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('mul 9187 to -189', function () {
        var firstNumber = new Integer('9187');
        var secondNumber = new Integer('-189');
        var expected = new Integer('-1736343');

        var actual = Integer.mul(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('mul -9187 to 189', function () {
        var firstNumber = new Integer('-9187');
        var secondNumber = new Integer('189');
        var expected = new Integer('-1736343');

        var actual = Integer.mul(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('mul -91874214143 to -32534563000', function () {
        var firstNumber = new Integer('-91874214143');
        var secondNumber = new Integer('-32534563000');
        var expected = new Integer('2989087408110924509000');

        var actual = Integer.mul(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('mul 324144744621 to 1000000000000', function () {
        var firstNumber = new Integer('324144744621');
        var secondNumber = new Integer('1000000000000');
        var expected = new Integer('324144744621000000000000');

        var actual = Integer.mul(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('div 100000 to 10', function () {
        var firstNumber = new Integer('100000');
        var secondNumber = new Integer('10');
        var expected = new Integer('10000');

        var actual = Integer.div(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('div 81 to 27', function () {
        var firstNumber = new Integer('81');
        var secondNumber = new Integer('3');
        var expected = new Integer('27');

        var actual = Integer.div(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('div 83 to 3', function () {
        var firstNumber = new Integer('83');
        var secondNumber = new Integer('3');
        var expected = new Integer('27');

        var actual = Integer.div(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('div 0 to 27', function () {
        var firstNumber = new Integer('0');
        var secondNumber = new Integer('27');
        var expected = new Integer('0');

        var actual = Integer.div(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('div 9 to 3', function () {
        var firstNumber = new Integer('9');
        var secondNumber = new Integer('3');
        var expected = new Integer('3');

        var actual = Integer.div(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('div 10 to 3', function () {
        var firstNumber = new Integer('10');
        var secondNumber = new Integer('3');
        var expected = new Integer('3');

        var actual = Integer.div(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('div 8 to 3', function () {
        var firstNumber = new Integer('8');
        var secondNumber = new Integer('3');
        var expected = new Integer('2');

        var actual = Integer.div(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('div 0 to 3', function () {
        var firstNumber = new Integer('0');
        var secondNumber = new Integer('3');
        var expected = new Integer('0');

        var actual = Integer.div(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('div 1 to 3', function () {
        var firstNumber = new Integer('1');
        var secondNumber = new Integer('3');
        var expected = new Integer('0');

        var actual = Integer.div(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('div 8655288755589632247 to 4555534522452', function () {
        var firstNumber = new Integer('8655288755589632247');
        var secondNumber = new Integer('4555534522452');
        var expected = new Integer('1899950');

        var actual = Integer.div(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })


    it('div -8 to -3', function () {
        var firstNumber = new Integer('-8');
        var secondNumber = new Integer('-3');
        var expected = new Integer('2');

        var actual = Integer.div(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('div 12 to 2', function () {
        var firstNumber = new Integer('12');
        var secondNumber = new Integer('2');
        var expected = new Integer('6');

        var actual = Integer.div(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })


    it('div 0 to -3', function () {
        var firstNumber = new Integer('0');
        var secondNumber = new Integer('-3');
        var expected = new Integer('0');

        var actual = Integer.div(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('div -1 to 3', function () {
        var firstNumber = new Integer('-1');
        var secondNumber = new Integer('3');
        var expected = new Integer('0');

        var actual = Integer.div(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('div 8655288755589632247 to -4555534522452', function () {
        var firstNumber = new Integer('8655288755589632247');
        var secondNumber = new Integer('-4555534522452');
        var expected = new Integer('-1899950');

        var actual = Integer.div(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('mod 100 to 12', function () {
        var firstNumber = new Integer('100');
        var secondNumber = new Integer('12');
        var expected = new Integer('4');

        var actual = Integer.mod(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('mod 3379 to 52', function () {
        var firstNumber = new Integer('3379');
        var secondNumber = new Integer('52');
        var expected = new Integer('51');

        var actual = Integer.mod(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    })

    it('mod 9 to 3', function () {
        var firstNumber = new Integer('9');
        var secondNumber = new Integer('3');
        var expected = new Integer('0');

        var actual = Integer.mod(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    });

    it('mod 3 to 2', function () {
        var firstNumber = new Integer('3');
        var secondNumber = new Integer('2');
        var expected = new Integer('1');

        var actual = Integer.mod(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    });

    it('pow 13 to 3', function () {
        var firstNumber = new Integer('13');
        var secondNumber = new Integer('3');
        var expected = new Integer('2197');

        var actual = Integer.pow(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    });
    
    it('pow 2 to 6', function () {
        var firstNumber = new Integer('2');
        var secondNumber = new Integer('6');
        var expected = new Integer('64');

        var actual = Integer.pow(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    });

    it('pow 15 to 2', function () {
        var firstNumber = new Integer('15');
        var secondNumber = new Integer('2');
        var expected = new Integer('225');

        var actual = Integer.pow(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    });

    it('pow 20 to 4', function () {
        var firstNumber = new Integer('20');
        var secondNumber = new Integer('4');
        var expected = new Integer('160000');

        var actual = Integer.pow(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    });

    it('pow 12 to 12', function () {
        var firstNumber = new Integer('12');
        var secondNumber = new Integer('12');
        var expected = new Integer('8916100448256');

        var actual = Integer.pow(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    });

    it('pow 12 to 11', function () {
        var firstNumber = new Integer('12');
        var secondNumber = new Integer('11');
        var expected = new Integer('743008370688');

        var actual = Integer.pow(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    });

    it('pow 12 to 5', function () {
        var firstNumber = new Integer('12');
        var secondNumber = new Integer('5');
        var expected = new Integer('248832');

        var actual = Integer.pow(firstNumber, secondNumber);
        
        assert.deepEqual(actual, expected);
    });
})