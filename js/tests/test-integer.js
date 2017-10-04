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

    return testSet.test();
};