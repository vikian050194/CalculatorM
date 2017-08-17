function FluxTestSet() {
    var testSet = new TestSet();
    var defaultState = {
        firstArgument: 0,
        secondArgument: 0,
        operator: '',
        module: 0,
        result: 0
    };

    var addDigitTest = new TestItem();
    addDigitTest.name = 'Action "addDigit"';
    addDigitTest.author = 'Anna';

    addDigitTest.test = function () {
        var state = jQuery.extend(true, {}, defaultState);
        return Reducer(state, new Action('addDigit', 4));
    };

    addDigitTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, defaultState);
        return Object.assign(state, {firstArgument: 4});
    })();
    testSet.addTestItem(addDigitTest);


    var addFewDigitsTest = new TestItem();
    addFewDigitsTest.name = 'Few actions "addDigit"';
    addFewDigitsTest.author = 'Anna';

    addFewDigitsTest.test = function () {
        var state = jQuery.extend(true, {}, defaultState);
        state.firstArgument = 4;
        return Reducer(state, new Action('addDigit', 2));
    };

    addFewDigitsTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, defaultState);
        return Object.assign(state, {firstArgument: 42});
    })();
    testSet.addTestItem(addFewDigitsTest);


    var addOperatorTest = new TestItem();
    addOperatorTest.name = 'Action "addOperator" without previous operator';
    addOperatorTest.author = 'Anna';

    addOperatorTest.test = function () {
        var state = jQuery.extend(true, {}, defaultState);
        state.firstArgument = 42;
        return Reducer(state, new Action('addOperator', 'add'));
    };

    addOperatorTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, defaultState);
        return Object.assign(state, {firstArgument: 42, operator: 'add'});
    })();
    testSet.addTestItem(addOperatorTest);


    var addOperatorWPrevTest = new TestItem();
    addOperatorWPrevTest.name = 'Action "addOperator" with previous operator';
    addOperatorWPrevTest.author = 'Anna';

    addOperatorWPrevTest.test = function () {
        var state = jQuery.extend(true, {}, defaultState);
        state.firstArgument = 42;
        state.operator = 'add';
        state.secondArgument = 21;
        return Reducer(state, new Action('addOperator', 'add'));
    };

    addOperatorWPrevTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, defaultState);
        return Object.assign(state, {firstArgument: 63, operator: 'add'});
    })();
    testSet.addTestItem(addOperatorWPrevTest);


    var twoArgumentsTest = new TestItem();
    twoArgumentsTest.name = 'Actions "addDigit" for 2 arguments';
    twoArgumentsTest.author = 'Anna';

    twoArgumentsTest.test = function () {
        var state = jQuery.extend(true, {}, defaultState);
        state.firstArgument = 42;
        state.operator = 'add';
        return Reducer(state, new Action('addDigit', 1));
    };

    twoArgumentsTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, defaultState);
        return Object.assign(state, {firstArgument: 42, operator: 'add', secondArgument: 1});
    })();
    testSet.addTestItem(twoArgumentsTest);


    var calculateTest = new TestItem();
    calculateTest.name = 'Action "calculate"';
    calculateTest.author = 'Anna';

    calculateTest.test = function () {
        var state = jQuery.extend(true, {}, defaultState);
        state.firstArgument = 63;
        state.operator = 'add';
        state.module = Module();
        return Reducer(state, new Action('calculate'));
    };

    calculateTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, defaultState);
        return Object.assign(state, {firstArgument: 63 % Module(), module: Module()});
    })();
    testSet.addTestItem(calculateTest);


    var setModuleTest = new TestItem();
    setModuleTest.name = 'Action "setModule"';
    setModuleTest.author = 'Anna';

    setModuleTest.test = function () {
        var state = jQuery.extend(true, {}, defaultState);
        return Reducer(state, new Action('setModule', 5));
    };

    setModuleTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, defaultState);
        return Object.assign(state, {module: 5});
    })();
    testSet.addTestItem(setModuleTest);


    var setModuleWCalcTest = new TestItem();
    setModuleWCalcTest.name = 'Action "setModule" with calculation';
    setModuleWCalcTest.author = 'Anna';

    setModuleWCalcTest.test = function () {
        var state = jQuery.extend(true, {}, defaultState);
        state = Reducer(state, new Action('setModule', 5));
        state.firstArgument = 63;
        return Reducer(state, new Action('calculate'));
    };

    setModuleWCalcTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, defaultState);
        return Object.assign(state, {module: 5, firstArgument: 3});
    })();
    testSet.addTestItem(setModuleWCalcTest);

    var addOperatorAddTest = new TestItem();
    addOperatorAddTest.name = 'Add operator "add"';
    addOperatorAddTest.author = 'Anna';

    addOperatorAddTest.test = function () {
        var state = jQuery.extend(true, {}, defaultState);
        state.firstArgument = 42;
        state.secondArgument = 21;
        state.operator = 'add';
        return Reducer(state, new Action('addOperator', 'add'));
    };

    addOperatorAddTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, defaultState);
        return Object.assign(state, {firstArgument: 63, operator: 'add'});
    })();
    testSet.addTestItem(addOperatorAddTest);

    var addOperatorSubTest = new TestItem();
    addOperatorSubTest.name = 'Add operator "sub"';
    addOperatorSubTest.author = 'Anna';

    addOperatorSubTest.test = function () {
        var state = jQuery.extend(true, {}, defaultState);
        state.firstArgument = 42;
        state.secondArgument = 21;
        state.operator = 'sub';
        return Reducer(state, new Action('addOperator', 'sub'));
    };

    addOperatorSubTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, defaultState);
        return Object.assign(state, {firstArgument: 21, operator: 'sub'});
    })();
    testSet.addTestItem(addOperatorSubTest);

    var addOperatorMulTest = new TestItem();
    addOperatorMulTest.name = 'Add operator "mul"';
    addOperatorMulTest.author = 'Anna';

    addOperatorMulTest.test = function () {
        var state = jQuery.extend(true, {}, defaultState);
        state.firstArgument = 4;
        state.secondArgument = 2;
        state.operator = 'mul';
        return Reducer(state, new Action('addOperator', 'mul'));
    };

    addOperatorMulTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, defaultState);
        return Object.assign(state, {firstArgument: 8, operator: 'mul'});
    })();
    testSet.addTestItem(addOperatorMulTest);

    var addOperatorDivTest = new TestItem();
    addOperatorDivTest.name = 'Add operator "div"';
    addOperatorDivTest.author = 'Anna';

    addOperatorDivTest.test = function () {
        var state = jQuery.extend(true, {}, defaultState);
        state.firstArgument = 42;
        state.secondArgument = 21;
        state.operator = 'div';
        return Reducer(state, new Action('addOperator', 'div'));
    };

    addOperatorDivTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, defaultState);
        return Object.assign(state, {firstArgument: 2, operator: 'div'});
    })();
    testSet.addTestItem(addOperatorDivTest);

    var addOperationPowTest = new TestItem();
    addOperationPowTest.name = 'Add operator "pow"';
    addOperationPowTest.author = 'Anna';

    addOperationPowTest.test = function () {
        var state = jQuery.extend(true, {}, defaultState);
        state.firstArgument = 3;
        state.secondArgument = 2;
        state.operator = 'pow';
        return Reducer(state, new Action('addOperator', 'pow'));
    };

    addOperationPowTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, defaultState);
        return Object.assign(state, {firstArgument: 9, operator: 'pow'});
    })();
    testSet.addTestItem(addOperationPowTest);

    return testSet.test();
}