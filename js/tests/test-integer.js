function IntegerTestSet() {
    var testSet = new TestSet();

    var addNumber = new TestItem();
    addNumber.name = 'Add number';
    addNumber.author = 'Vitaly';

    addNumber.test = function () {
        var number = new Integer('2');
        return number.toString();
    };

    addNumber.expectedObject = (function () {
        return '2';
    })();
    testSet.addTestItem(addNumber);

    var addNegativeNumber = new TestItem();
    addNegativeNumber.name = 'Add negative number';
    addNegativeNumber.author = 'Vitaly';

    addNegativeNumber.test = function () {
        var number = new Integer('-2');
        return number.toString();
    };

    addNegativeNumber.expectedObject = (function () {
        return '-2';
    })();
    testSet.addTestItem(addNegativeNumber);

    var addBigNumber = new TestItem();
    addBigNumber.name = 'Add big number';
    addBigNumber.author = 'Vitaly';

    addBigNumber.test = function () {
        var number = new Integer('-210');
        return number.toString();
    };

    addBigNumber.expectedObject = (function () {
        return '-210';
    })();
    testSet.addTestItem(addBigNumber);

    var getAmount = new TestItem();
    getAmount.name = '210 ADD 95';
    getAmount.author = 'Vitaly';

    getAmount.test = function () {
        var numberFirst = new Integer('210');
        var numberSecond = new Integer('95');
        var result = Integer.add(numberFirst, numberSecond);
        return result.toString();
    };

    getAmount.expectedObject = (function () {
        return '305';
    })();
    testSet.addTestItem(getAmount);

    var getAmountNegativeNumbers = new TestItem();
    getAmountNegativeNumbers.name = '-87 ADD -59';
    getAmountNegativeNumbers.author = 'Vitaly';

    getAmountNegativeNumbers.test = function () {
        var numberFirst = new Integer('-87');
        var numberSecond = new Integer('-59');
        var result = Integer.add(numberFirst, numberSecond);
        return result.toString();
    };

    getAmountNegativeNumbers.expectedObject = (function () {
        return '-146';
    })();
    testSet.addTestItem(getAmountNegativeNumbers);

    var getAmountOnePositiveOneNegativeNumber = new TestItem();
    getAmountOnePositiveOneNegativeNumber.name = '87 ADD -59';
    getAmountOnePositiveOneNegativeNumber.author = 'Vitaly';

    getAmountOnePositiveOneNegativeNumber.test = function () {
        var numberFirst = new Integer('87');
        var numberSecond = new Integer('-59');
        var result = Integer.add(numberFirst, numberSecond);
        return result.toString();
    };

    getAmountOnePositiveOneNegativeNumber.expectedObject = (function () {
        return '28';
    })();
    testSet.addTestItem(getAmountOnePositiveOneNegativeNumber);

    var getAmountOnePositiveOneNegativeNumberTwo = new TestItem();
    getAmountOnePositiveOneNegativeNumberTwo.name = '-87 ADD 59';
    getAmountOnePositiveOneNegativeNumberTwo.author = 'Vitaly';

    getAmountOnePositiveOneNegativeNumberTwo.test = function () {
        var numberFirst = new Integer('-87');
        var numberSecond = new Integer('59');
        var result = Integer.add(numberFirst, numberSecond);
        return result.toString();
    };

    getAmountOnePositiveOneNegativeNumberTwo.expectedObject = (function () {
        return '-28';
    })();
    testSet.addTestItem(getAmountOnePositiveOneNegativeNumberTwo);


    var getAmountBigNumbers = new TestItem();
    getAmountBigNumbers.name = '21037831813 ADD 959';
    getAmountBigNumbers.author = 'Vitaly';

    getAmountBigNumbers.test = function () {
        var numberFirst = new Integer('21037831813');
        var numberSecond = new Integer('959');
        var result = Integer.add(numberFirst, numberSecond);
        return result.toString();
    };

    getAmountBigNumbers.expectedObject = (function () {
        return '21037832772';
    })();
    testSet.addTestItem(getAmountBigNumbers);

    var getAmountBigNumbers = new TestItem();
    getAmountBigNumbers.name = '21037831813453466456745765767525 ADD 46457656765756756465656756';
    getAmountBigNumbers.author = 'Vitaly';

    getAmountBigNumbers.test = function () {
        var numberFirst = new Integer('21037831813453466456745765767525');
        var numberSecond = new Integer('46457656765756756465656756');
        var result = Integer.add(numberFirst, numberSecond);
        return result.toString();
    };

    getAmountBigNumbers.expectedObject = (function () {
        return '21037878271110232213502231424281';
    })();
    testSet.addTestItem(getAmountBigNumbers);


    var getAmountBigNumbers = new TestItem();
    getAmountBigNumbers.name = '-21037831813 ADD 959';
    getAmountBigNumbers.author = 'Vitaly';

    getAmountBigNumbers.test = function () {
        var numberFirst = new Integer('-21037831813');
        var numberSecond = new Integer('959');
        var result = Integer.add(numberFirst, numberSecond);
        return result.toString();
    };

    getAmountBigNumbers.expectedObject = (function () {
        return '-21037830854';
    })();
    testSet.addTestItem(getAmountBigNumbers);

    var getSubNumbers = new TestItem();
    getSubNumbers.name = '100 SUB 9';
    getSubNumbers.author = 'Vitaly';
    
    getSubNumbers.test = function () {
        var numberFirst = new Integer('100');
        var numberSecond = new Integer('9');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    getSubNumbers.expectedObject = (function () {
        return '91';
    })();
    testSet.addTestItem(getSubNumbers);

    var getSubNumbersTwo = new TestItem();
    getSubNumbersTwo.name = '21 SUB 30';
    getSubNumbersTwo.author = 'Vitaly';
    
    getSubNumbersTwo.test = function () {
        var numberFirst = new Integer('21');
        var numberSecond = new Integer('30');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    getSubNumbersTwo.expectedObject = (function () {
        return '-9';
    })();
    testSet.addTestItem(getSubNumbersTwo);


    var getSubTwoNegativenumbers = new TestItem();
    getSubTwoNegativenumbers.name = '-21 SUB -30';
    getSubTwoNegativenumbers.author = 'Vitaly';
    
    getSubTwoNegativenumbers.test = function () {
        var numberFirst = new Integer('-21');
        var numberSecond = new Integer('-30');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    getSubTwoNegativenumbers.expectedObject = (function () {
        return '9';
    })();
    testSet.addTestItem(getSubTwoNegativenumbers);

    var getSubOneNegiveNumber = new TestItem();
    getSubOneNegiveNumber.name = '21 SUB -30';
    getSubOneNegiveNumber.author = 'Vitaly';
    
    getSubOneNegiveNumber.test = function () {
        var numberFirst = new Integer('21');
        var numberSecond = new Integer('-30');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    getSubOneNegiveNumber.expectedObject = (function () {
        return '51';
        })();
    testSet.addTestItem(getSubOneNegiveNumber);

    var getSubOneNegiveNumberTwo = new TestItem();
    getSubOneNegiveNumberTwo.name = '-21 SUB 30';
    getSubOneNegiveNumberTwo.author = 'Vitaly';
    
    getSubOneNegiveNumberTwo.test = function () {
        var numberFirst = new Integer('-21');
        var numberSecond = new Integer('30');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    getSubOneNegiveNumberTwo.expectedObject = (function () {
        return '-51';
    })();
    testSet.addTestItem(getSubOneNegiveNumberTwo);

    var getSubOneNegiveNumberTwo = new TestItem();
    getSubOneNegiveNumberTwo.name = '100000000 SUB 1';
    getSubOneNegiveNumberTwo.author = 'Vitaly';
    
    getSubOneNegiveNumberTwo.test = function () {
        var numberFirst = new Integer('100000000');
        var numberSecond = new Integer('1');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    getSubOneNegiveNumberTwo.expectedObject = (function () {
        return '99999999';
    })();
    testSet.addTestItem(getSubOneNegiveNumberTwo);


    var getSubOneNegiveNumberTwo = new TestItem();
    getSubOneNegiveNumberTwo.name = '-645645776578 SUB 343255465768768798';
    getSubOneNegiveNumberTwo.author = 'Vitaly';
    
    getSubOneNegiveNumberTwo.test = function () {
        var numberFirst = new Integer('-645645776578');
        var numberSecond = new Integer('343255465768768798');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    getSubOneNegiveNumberTwo.expectedObject = (function () {
        return '-343256111414545376';
    })();
    testSet.addTestItem(getSubOneNegiveNumberTwo);


    var getSubBigNumbers = new TestItem();
    getSubBigNumbers.name = '354456436346345745645684965394583456 SUB 4364565454645823653489534';
    getSubBigNumbers.author = 'Vitaly';
    
    getSubBigNumbers.test = function () {
        var numberFirst = new Integer('354456436346345745645684965394583456');
        var numberSecond = new Integer('4364565454645823653489534');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    getSubBigNumbers.expectedObject = (function () {
        return '35445639270069119918744843049924';
    })();
    testSet.addTestItem(getSubBigNumbers);

    var getSubOneNegiveNumberTwo = new TestItem();
    getSubOneNegiveNumberTwo.name = '-1 SUB -1000000000000';
    getSubOneNegiveNumberTwo.author = 'Vitaly';
    
    getSubOneNegiveNumberTwo.test = function () {
        var numberFirst = new Integer('-1');
        var numberSecond = new Integer('-1000000000000');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    getSubOneNegiveNumberTwo.expectedObject = (function () {
        return '999999999999';
    })();
    testSet.addTestItem(getSubOneNegiveNumberTwo);

    var firstTestMultiplication = new TestItem();
    firstTestMultiplication.name = '9 MUL 10';
    firstTestMultiplication.author = 'Vitaly';
    
    firstTestMultiplication.test = function () {
        var numberFirst = new Integer('9');
        var numberSecond = new Integer('10');
        var result = Integer.mul(numberFirst, numberSecond);
        return result.toString();
    };

    firstTestMultiplication.expectedObject = (function () {
        return '90';
        })();
    testSet.addTestItem(firstTestMultiplication);

    var secondTetstMul = new TestItem();
    secondTetstMul.name = '9187 MUL 189';
    secondTetstMul.author = 'Vitaly';
    
    secondTetstMul.test = function () {
        var numberFirst = new Integer('9187');
        var numberSecond = new Integer('189');
        var result = Integer.mul(numberFirst, numberSecond);
        return result.toString();
    };

    secondTetstMul.expectedObject = (function () {
        return '1736343';
        })();
    testSet.addTestItem(secondTetstMul);

    var tetstMulNegativeFirst = new TestItem();
    tetstMulNegativeFirst.name = '9187 MUL -189';
    tetstMulNegativeFirst.author = 'Vitaly';
    
    tetstMulNegativeFirst.test = function () {
        var numberFirst = new Integer('9187');
        var numberSecond = new Integer('-189');
        var result = Integer.mul(numberFirst, numberSecond);
        return result.toString();
    };

    tetstMulNegativeFirst.expectedObject = (function () {
        return '-1736343';
        })();
    testSet.addTestItem(tetstMulNegativeFirst);

    var tetstMulNegativeSecond = new TestItem();
    tetstMulNegativeSecond.name = '-9187 MUL 189';
    tetstMulNegativeSecond.author = 'Vitaly';
    
    tetstMulNegativeSecond.test = function () {
        var numberFirst = new Integer('-9187');
        var numberSecond = new Integer('189');
        var result = Integer.mul(numberFirst, numberSecond);
        return result.toString();
    };

    tetstMulNegativeSecond.expectedObject = (function () {
        return '-1736343';
        })();
    testSet.addTestItem(tetstMulNegativeSecond);

     var testTwoNegativeNumbers = new TestItem();
    testTwoNegativeNumbers.name = '-91874214143 MUL -32534563000';
    testTwoNegativeNumbers.author = 'Vitaly';
    
    testTwoNegativeNumbers.test = function () {
        var numberFirst = new Integer('-91874214143');
        var numberSecond = new Integer('-32534563000');
        var result = Integer.mul(numberFirst, numberSecond);
        return result.toString();
    };

    testTwoNegativeNumbers.expectedObject = (function () {
        return '2989087408110924509000';
        })();
    testSet.addTestItem(testTwoNegativeNumbers);

    var tetsForMultiplication = new TestItem();
    tetsForMultiplication.name = '324144744621 MUL 1000000000000';
    tetsForMultiplication.author = 'Vitaly';
    
    tetsForMultiplication.test = function () {
        var numberFirst = new Integer('324144744621');
        var numberSecond = new Integer('1000000000000');
        var result = Integer.mul(numberFirst, numberSecond);
        return result.toString();
    };

    tetsForMultiplication.expectedObject = (function () {
        return '324144744621000000000000';
        })();
    testSet.addTestItem(tetsForMultiplication);

    return testSet.test();
};