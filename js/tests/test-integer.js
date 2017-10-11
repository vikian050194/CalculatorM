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

    var testAddition = new TestItem();
    testAddition.name = '210 ADD 95';
    testAddition.author = 'Vitaly';

    testAddition.test = function () {
        var numberFirst = new Integer('210');
        var numberSecond = new Integer('95');
        var result = Integer.add(numberFirst, numberSecond);
        return result.toString();
    };

    testAddition.expectedObject = (function () {
        return '305';
    })();
    testSet.addTestItem(testAddition);

    var testAddition = new TestItem();
    testAddition.name = '0 ADD 0';
    testAddition.author = 'Vitaly';

    testAddition.test = function () {
        var numberFirst = new Integer('0');
        var numberSecond = new Integer('0');
        var result = Integer.add(numberFirst, numberSecond);
        return result.toString();
    };

    testAddition.expectedObject = (function () {
        return '0';
    })();
    testSet.addTestItem(testAddition);

    var testAddition= new TestItem();
    testAddition.name = '-87 ADD -59';
    testAddition.author = 'Vitaly';

    testAddition.test = function () {
        var numberFirst = new Integer('-87');
        var numberSecond = new Integer('-59');
        var result = Integer.add(numberFirst, numberSecond);
        return result.toString();
    };

    testAddition.expectedObject = (function () {
        return '-146';
    })();
    testSet.addTestItem(testAddition);

    var testAddition = new TestItem();
    testAddition.name = '87 ADD -59';
    testAddition.author = 'Vitaly';

    testAddition.test = function () {
        var numberFirst = new Integer('87');
        var numberSecond = new Integer('-59');
        var result = Integer.add(numberFirst, numberSecond);
        return result.toString();
    };

    testAddition.expectedObject = (function () {
        return '28';
    })();
    testSet.addTestItem(testAddition);

    var testAdditionTwo = new TestItem();
    testAdditionTwo.name = '-87 ADD 59';
    testAdditionTwo.author = 'Vitaly';

    testAdditionTwo.test = function () {
        var numberFirst = new Integer('-87');
        var numberSecond = new Integer('59');
        var result = Integer.add(numberFirst, numberSecond);
        return result.toString();
    };

    testAdditionTwo.expectedObject = (function () {
        return '-28';
    })();
    testSet.addTestItem(testAdditionTwo);


    var testAddition = new TestItem();
    testAddition.name = '21037831813 ADD 959';
    testAddition.author = 'Vitaly';

    testAddition.test = function () {
        var numberFirst = new Integer('21037831813');
        var numberSecond = new Integer('959');
        var result = Integer.add(numberFirst, numberSecond);
        return result.toString();
    };

    testAddition.expectedObject = (function () {
        return '21037832772';
    })();
    testSet.addTestItem(testAddition);

    var testAddition = new TestItem();
    testAddition.name = '21037831813453466456745765767525 ADD 46457656765756756465656756';
    testAddition.author = 'Vitaly';

    testAddition.test = function () {
        var numberFirst = new Integer('21037831813453466456745765767525');
        var numberSecond = new Integer('46457656765756756465656756');
        var result = Integer.add(numberFirst, numberSecond);
        return result.toString();
    };

    testAddition.expectedObject = (function () {
        return '21037878271110232213502231424281';
    })();
    testSet.addTestItem(testAddition);


    var testAddition = new TestItem();
    testAddition.name = '-21037831813 ADD 959';
    testAddition.author = 'Vitaly';

    testAddition.test = function () {
        var numberFirst = new Integer('-21037831813');
        var numberSecond = new Integer('959');
        var result = Integer.add(numberFirst, numberSecond);
        return result.toString();
    };

    testAddition.expectedObject = (function () {
        return '-21037830854';
    })();
    testSet.addTestItem(testAddition);

    var testSubtraction = new TestItem();
    testSubtraction.name = '1 SUB 1';
    testSubtraction.author = 'Vitaly';
    
    testSubtraction.test = function () {
        var numberFirst = new Integer('1');
        var numberSecond = new Integer('1');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    testSubtraction.expectedObject = (function () {
        return '0';
    })();
    testSet.addTestItem(testSubtraction);

    var testSubtraction = new TestItem();
    testSubtraction.name = '100 SUB 9';
    testSubtraction.author = 'Vitaly';
    
    testSubtraction.test = function () {
        var numberFirst = new Integer('100');
        var numberSecond = new Integer('9');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    testSubtraction.expectedObject = (function () {
        return '91';
    })();
    testSet.addTestItem(testSubtraction);

    var testSubtraction = new TestItem();
    testSubtraction.name = '21 SUB 30';
    testSubtraction.author = 'Vitaly';
    
    testSubtraction.test = function () {
        var numberFirst = new Integer('21');
        var numberSecond = new Integer('30');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    testSubtraction.expectedObject = (function () {
        return '-9';
    })();
    testSet.addTestItem(testSubtraction);


    var testSubtraction = new TestItem();
    testSubtraction.name = '-21 SUB -30';
    testSubtraction.author = 'Vitaly';
    
    testSubtraction.test = function () {
        var numberFirst = new Integer('-21');
        var numberSecond = new Integer('-30');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    testSubtraction.expectedObject = (function () {
        return '9';
    })();
    testSet.addTestItem(testSubtraction);

    var testSubtraction = new TestItem();
    testSubtraction.name = '21 SUB -30';
    testSubtraction.author = 'Vitaly';
    
    testSubtraction.test = function () {
        var numberFirst = new Integer('21');
        var numberSecond = new Integer('-30');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    testSubtraction.expectedObject = (function () {
        return '51';
        })();
    testSet.addTestItem(testSubtraction);

    var testSubtraction = new TestItem();
    testSubtraction.name = '-21 SUB 30';
    testSubtraction.author = 'Vitaly';
    
    testSubtraction.test = function () {
        var numberFirst = new Integer('-21');
        var numberSecond = new Integer('30');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    testSubtraction.expectedObject = (function () {
        return '-51';
    })();
    testSet.addTestItem(testSubtraction);

    var testSubtraction = new TestItem();
    testSubtraction.name = '100000000 SUB 1';
    testSubtraction.author = 'Vitaly';
    
    testSubtraction.test = function () {
        var numberFirst = new Integer('100000000');
        var numberSecond = new Integer('1');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    testSubtraction.expectedObject = (function () {
        return '99999999';
    })();
    testSet.addTestItem(testSubtraction);


    var testSubtraction = new TestItem();
    testSubtraction.name = '-645645776578 SUB 343255465768768798';
    testSubtraction.author = 'Vitaly';
    
    testSubtraction.test = function () {
        var numberFirst = new Integer('-645645776578');
        var numberSecond = new Integer('343255465768768798');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    testSubtraction.expectedObject = (function () {
        return '-343256111414545376';
    })();
    testSet.addTestItem(testSubtraction);

    var testSubtraction = new TestItem();
    testSubtraction.name = '354456436346 SUB 4364';
    testSubtraction.author = 'Vitaly';
    
    testSubtraction.test = function () {
        var numberFirst = new Integer('354456436346');
        var numberSecond = new Integer('4364');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    testSubtraction.expectedObject = (function () {
        return '354456431982';
    })();
    testSet.addTestItem(testSubtraction);

    var testSubtraction = new TestItem();
    testSubtraction.name = '965394583456 SUB 89534';
    testSubtraction.author = 'Vitaly';
    
    testSubtraction.test = function () {
        var numberFirst = new Integer('965394583456');
        var numberSecond = new Integer('89534');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    testSubtraction.expectedObject = (function () {
        return '965394493922';
    })();
    testSet.addTestItem(testSubtraction);
    

    var testSubtraction = new TestItem();
    testSubtraction.name = '354456436346345745645684965394583456 SUB 4364565454645823653489534';
    testSubtraction.author = 'Vitaly';
    
    testSubtraction.test = function () {
        var numberFirst = new Integer('354456436346345745645684965394583456');
        var numberSecond = new Integer('4364565454645823653489534');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    testSubtraction.expectedObject = (function () {
        return '354456436341981180191039141741093922';
    })();
    testSet.addTestItem(testSubtraction);

    var testSubtraction = new TestItem();
    testSubtraction.name = '-1 SUB -1000000000000';
    testSubtraction.author = 'Vitaly';
    
    testSubtraction.test = function () {
        var numberFirst = new Integer('-1');
        var numberSecond = new Integer('-1000000000000');
        var result = Integer.sub(numberFirst, numberSecond);
        return result.toString();
    };

    testSubtraction.expectedObject = (function () {
        return '999999999999';
    })();
    testSet.addTestItem(testSubtraction);

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

    var testMultiplication = new TestItem();
    testMultiplication.name = '935345 MUL 0';
    testMultiplication.author = 'Vitaly';
    
    testMultiplication.test = function () {
        var numberFirst = new Integer('935345');
        var numberSecond = new Integer('0');
        var result = Integer.mul(numberFirst, numberSecond);
        return result.toString();
    };

    testMultiplication.expectedObject = (function () {
        return '0';
        })();
    testSet.addTestItem(testMultiplication);

    var testMultiplication = new TestItem();
    testMultiplication.name = '9187 MUL 189';
    testMultiplication.author = 'Vitaly';
    
    testMultiplication.test = function () {
        var numberFirst = new Integer('9187');
        var numberSecond = new Integer('189');
        var result = Integer.mul(numberFirst, numberSecond);
        return result.toString();
    };

    testMultiplication.expectedObject = (function () {
        return '1736343';
        })();
    testSet.addTestItem(testMultiplication);

    var testMultiplication = new TestItem();
    testMultiplication.name = '9187 MUL -189';
    testMultiplication.author = 'Vitaly';
    
    testMultiplication.test = function () {
        var numberFirst = new Integer('9187');
        var numberSecond = new Integer('-189');
        var result = Integer.mul(numberFirst, numberSecond);
        return result.toString();
    };

    testMultiplication.expectedObject = (function () {
        return '-1736343';
        })();
    testSet.addTestItem(testMultiplication);

    var testMultiplication = new TestItem();
    testMultiplication.name = '-9187 MUL 189';
    testMultiplication.author = 'Vitaly';
    
    testMultiplication.test = function () {
        var numberFirst = new Integer('-9187');
        var numberSecond = new Integer('189');
        var result = Integer.mul(numberFirst, numberSecond);
        return result.toString();
    };

    testMultiplication.expectedObject = (function () {
        return '-1736343';
        })();
    testSet.addTestItem(testMultiplication);

     var testMultiplication = new TestItem();
    testMultiplication.name = '-91874214143 MUL -32534563000';
    testMultiplication.author = 'Vitaly';
    
    testMultiplication.test = function () {
        var numberFirst = new Integer('-91874214143');
        var numberSecond = new Integer('-32534563000');
        var result = Integer.mul(numberFirst, numberSecond);
        return result.toString();
    };

    testMultiplication.expectedObject = (function () {
        return '2989087408110924509000';
        })();
    testSet.addTestItem(testMultiplication);

    var testMultiplication = new TestItem();
    testMultiplication.name = '324144744621 MUL 1000000000000';
    testMultiplication.author = 'Vitaly';
    
    testMultiplication.test = function () {
        var numberFirst = new Integer('324144744621');
        var numberSecond = new Integer('1000000000000');
        var result = Integer.mul(numberFirst, numberSecond);
        return result.toString();
    };

    testMultiplication.expectedObject = (function () {
        return '324144744621000000000000';
        })();
    testSet.addTestItem(testMultiplication);


    var testPow = new TestItem();
    testPow.name = '2 POW 8';
    testPow.author = 'Vitaly';
    
    testPow.test = function () {
        var numberFirst = new Integer('2');
        var numberSecond = new Integer('8');
        var result = Integer.pow(numberFirst, numberSecond);
        return result.toString();
    };

    testPow.expectedObject = (function () {
        return '256';
        })();
    testSet.addTestItem(testPow);


    return testSet.test();
};