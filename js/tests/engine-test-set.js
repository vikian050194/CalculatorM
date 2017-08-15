function EngineTestSet() {
    var testSet = new TestSet();

    var digits = function (engine, number) {
        var digitList = [];
        while(number > 0) {
            digitList.push(number%10);
            number = Math.floor(number/10);
        }
        digitList.reverse();
        digitList.forEach(function (value) {
            engine.digit(value);
        });
    };

    var defaultModelTest = new TestItem();
    defaultModelTest.name = 'Default model';
    defaultModelTest.test = function () {
        var engine = new Engine();
        return engine.model();
    };

    defaultModelTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 0;

        return expected;
    })();

    defaultModelTest.author = 'Kirill';
    testSet.addTestItem(defaultModelTest);

    var oneDigitZeroTest = new TestItem();
    oneDigitZeroTest.name = 'One digit: zero';
    oneDigitZeroTest.test = function () {
        var engine = new Engine();

        engine.digit(0);

        return engine.model();
    };

    oneDigitZeroTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 0;

        return expected;
    })();

    oneDigitZeroTest.author = 'Kirill';
    testSet.addTestItem(oneDigitZeroTest);

    var oneDigitNotZeroTest = new TestItem();
    oneDigitNotZeroTest.name = 'One digit: not zero';
    oneDigitNotZeroTest.test = function () {
        var engine = new Engine();

        engine.digit(2);

        return engine.model();
    };

    oneDigitNotZeroTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 2;

        return expected;
    })();

    oneDigitNotZeroTest.author = 'Kirill';
    testSet.addTestItem(oneDigitZeroTest);

    var fewDigitsTest = new TestItem();
    fewDigitsTest.name = 'Few digits';
    fewDigitsTest.test = function () {
        var engine = new Engine();

        digits(engine, 42);

        return engine.model();
    };

    fewDigitsTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 42;

        return expected;
    })();

    fewDigitsTest.author = 'Kirill';
    testSet.addTestItem(fewDigitsTest);

    var firstOperationTest = new TestItem();
    firstOperationTest.name = 'First tests operation';
    firstOperationTest.test = function () {
        var engine = new Engine();

        digits(engine, 42);
        engine.operator('add');

        return engine.model();
    };

    firstOperationTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 42;
        expected.operator = 'add';

        return expected;
    })();

    firstOperationTest.author = 'Vitaly';
    testSet.addTestItem(firstOperationTest);

    var twoArgumentsAddTest = new TestItem();
    twoArgumentsAddTest.name = 'Two arguments and click ADD';
    twoArgumentsAddTest.test = function () {
        var engine = new Engine();

        digits(engine, 42);
        engine.operator('add');
        digits(engine, 21);

        return engine.model();
    };

    twoArgumentsAddTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 42;
        expected.operator = 'add';
        expected.secondArgument = 21;

        return expected;
    })();

    twoArgumentsAddTest.author = 'Vitaly';
    testSet.addTestItem(twoArgumentsAddTest);

    var twoArgumentsMulTest = new TestItem();
    twoArgumentsMulTest.name = 'Two arguments and click MUL';
    twoArgumentsMulTest.test = function () {
        var engine = new Engine();

        digits(engine, 42);
        engine.operator('mul');
        digits(engine, 21);

        return engine.model();
    };

    twoArgumentsMulTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 42;
        expected.operator = 'mul';
        expected.secondArgument = 21;

        return expected;
    })();

    twoArgumentsMulTest.author = 'Vitaly';
    testSet.addTestItem(twoArgumentsMulTest);

    var twoArgumentsSubTest = new TestItem();
    twoArgumentsSubTest.name = 'Two arguments and click SUB';
    twoArgumentsSubTest.test = function () {
        var engine = new Engine();

        digits(engine, 42);
        engine.operator('sub');
        digits(engine, 21);

        return engine.model();
    };
    
    twoArgumentsSubTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 42;
        expected.operator = 'sub';
        expected.secondArgument = 21;

        return expected;
    })();
    
    twoArgumentsSubTest.author = 'Vitaly';
    testSet.addTestItem(twoArgumentsSubTest);

    var twoArgumentsDivTest = new TestItem();
    twoArgumentsDivTest.name = 'Two arguments and click DIV';
    twoArgumentsDivTest.test = function () {
        var engine = new Engine();

        digits(engine, 42);
        engine.operator('div');
        digits(engine, 21);

        return engine.model();
    };

    twoArgumentsDivTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 42;
        expected.operator = 'div';
        expected.secondArgument = 21;

        return expected;
    })();

    twoArgumentsDivTest.author = 'Vitaly';
    testSet.addTestItem(twoArgumentsDivTest);

    var twoArgumentsModTest = new TestItem();
    twoArgumentsModTest.name = 'Two arguments and click MOD';
    twoArgumentsModTest.test = function () {
        var engine = new Engine();

        digits(engine, 42);
        engine.operator('mod');
        digits(engine, 21);

        return engine.model();
    };

    twoArgumentsModTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 42;
        expected.operator = 'mod';
        expected.secondArgument = 21;

        return expected;
    })();

    twoArgumentsModTest.author = 'Vitaly';
    testSet.addTestItem(twoArgumentsModTest);

    var twoArgumentsPowTest = new TestItem();
    twoArgumentsPowTest.name = 'Two arguments and click POW';
    twoArgumentsPowTest.test = function () {
        var engine = new Engine();

        engine.digit(4);
        engine.operator('pow');
        digits(engine, 21);

        return engine.model();
    };

    twoArgumentsPowTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 4;
        expected.operator = 'pow';
        expected.secondArgument = 21;

        return expected;
    })();

    twoArgumentsPowTest.author = 'Vitaly';
    testSet.addTestItem(twoArgumentsPowTest);

    var clearTest = new TestItem();
    clearTest.name = 'Clear';
    clearTest.test = function () {
        var engine = new Engine();

        digits(engine, 42);
        engine.operator('add');
        digits(engine, 21);
        engine.clear();

        return engine.model();
    };

    clearTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 0;
        expected.operator = '';
        expected.secondArgument = 0;

        return expected;
    })();

    clearTest.author = 'Vitaly';
    testSet.addTestItem(clearTest);

    var setModuleTest = new TestItem();
    setModuleTest.name = 'Set module';
    setModuleTest.test = function () {
        var engine = new Engine();

        digits(engine, 1000);
        engine.setMod();

        return engine.model();
    };

    setModuleTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 0;
        expected.operator = '';
        expected.secondArgument = 0;
        expected.module = 1000;

        return expected;
    })();

    setModuleTest.author = 'Vitaly';
    testSet.addTestItem(setModuleTest);

    var calculateAddTest = new TestItem();
    calculateAddTest.name = 'Calculate ADD';
    calculateAddTest.test = function () {
        var engine = new Engine();

        digits(engine, 1000);
        engine.setMod();
        digits(engine, 42);
        engine.operator('add');
        digits(engine, 21);
        engine.calculate();

        return engine.model();
    };

    calculateAddTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 63;
        expected.operator = '';
        expected.secondArgument = 0;
        expected.module = 1000;

        return expected;
    })();

    calculateAddTest.author = 'Vitaly';
    testSet.addTestItem(calculateAddTest);

    var calculateSubTest = new TestItem();
    calculateSubTest.name = 'Calculate SUB';
    calculateSubTest.test = function () {
        var engine = new Engine();

        digits(engine, 1000);
        engine.setMod();
        digits(engine, 42);
        engine.operator('sub');
        digits(engine, 21);
        engine.calculate();

        return engine.model();
    };

    calculateSubTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 21;
        expected.operator = '';
        expected.secondArgument = 0;
        expected.module = 1000;

        return expected;
    })();

    calculateSubTest.author = 'Vitaly';
    testSet.addTestItem(calculateSubTest);

    var calculateMulTest = new TestItem();
    calculateMulTest.name = 'Calculate MUL';
    calculateMulTest.test = function () {
        var engine = new Engine();

        digits(engine, 1000);
        engine.setMod();
        engine.digit(4);
        engine.operator('mul');
        engine.digit(9);
        engine.calculate();

        return engine.model();
    };

    calculateMulTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 36;
        expected.operator = '';
        expected.secondArgument = 0;
        expected.module = 1000;

        return expected;
    })();

    calculateMulTest.author = 'Vitaly';
    testSet.addTestItem(calculateMulTest);

    var calculateDivTest = new TestItem();
    calculateDivTest.name = 'Calculate DIV';
    calculateDivTest.test = function () {
        var engine = new Engine();

        digits(engine, 1000);
        engine.setMod();
        digits(engine, 42);
        engine.operator('div');
        engine.digit(2);
        engine.calculate();

        return engine.model();
    };

    calculateDivTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 21;
        expected.operator = '';
        expected.secondArgument = 0;
        expected.module = 1000;

        return expected;
    })();

    calculateDivTest.author = 'Vitaly';
    testSet.addTestItem(calculateDivTest);

    var calculateModTest = new TestItem();
    calculateModTest.name = 'Calculate MOD';
    calculateModTest.test = function () {
        var engine = new Engine();

        digits(engine, 1000);
        engine.setMod();
        digits(engine, 41);
        engine.operator('mod');
        engine.digit(2);
        engine.calculate();

        return engine.model();
    };

    calculateModTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 1;
        expected.operator = '';
        expected.secondArgument = 0;
        expected.module = 1000;

        return expected;
    })();

    calculateModTest.author = 'Vitaly';
    testSet.addTestItem(calculateModTest);

    var calculatePowTest = new TestItem();
    calculatePowTest.name = 'Calculate POW';
    calculatePowTest.test = function () {
        var engine = new Engine();

        digits(engine, 1000);
        engine.setMod();
        engine.digit(4);
        engine.operator('pow');
        engine.digit(2);
        engine.calculate();

        return engine.model();
    };

    calculatePowTest.expectedObject = (function () {
        var expected = new Model();
        expected.firstArgument = 16;
        expected.operator = '';
        expected.secondArgument = 0;
        expected.module = 1000;

        return expected;
    })();

    calculatePowTest.author = 'Vitaly';
    testSet.addTestItem(calculatePowTest);
    
    return testSet.test();
}