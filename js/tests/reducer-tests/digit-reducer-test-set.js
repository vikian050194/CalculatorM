function DigitReducerTestSet(initialState) {
    var testSet = new TestSet();

    var addDigitTest = new TestItem();
    addDigitTest.name = 'Action "addDigit"';
    addDigitTest.author = 'Anna';

    addDigitTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        return DigitReducer(state, createAction('addDigit')(4));
    };

    addDigitTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 4});
    })();
    testSet.addTestItem(addDigitTest);


    var addFewDigitsTest = new TestItem();
    addFewDigitsTest.name = 'Few actions "addDigit"';
    addFewDigitsTest.author = 'Anna';

    addFewDigitsTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 4;
        return DigitReducer(state, createAction('addDigit')(2));
    };

    addFewDigitsTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 42});
    })();
    testSet.addTestItem(addFewDigitsTest);


    var addDigitToSecArgTest = new TestItem();
    addDigitToSecArgTest.name = 'Add digit to secondArgument';
    addDigitToSecArgTest.author = 'Anna';

    addDigitToSecArgTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.operator = 'add';
        state.secondArgument = 0;
        return DigitReducer(state, createAction('addDigit')(2));
    };

    addDigitToSecArgTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 42, operator: 'add', secondArgument: 2});
    })();
    testSet.addTestItem(addDigitToSecArgTest);


    var addFewDigitsToSecArgTest = new TestItem();
    addFewDigitsToSecArgTest.name = 'Add few digits to secondArgument';
    addFewDigitsToSecArgTest.author = 'Anna';

    addFewDigitsToSecArgTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.operator = 'add';
        state.secondArgument = 2;
        return DigitReducer(state, createAction('addDigit')(1));
    };

    addFewDigitsToSecArgTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 42, operator: 'add', secondArgument: 21});
    })();
    testSet.addTestItem(addFewDigitsToSecArgTest);


    var addDigitToPositiveValueTest = new TestItem();
    addDigitToPositiveValueTest.name = 'Add digit to positive value';
    addDigitToPositiveValueTest.author = 'Anna';

    addDigitToPositiveValueTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        return DigitReducer(state, createAction('addDigit')(1));
    };

    addDigitToPositiveValueTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 421});
    })();
    testSet.addTestItem(addDigitToPositiveValueTest);


    var addDigitToNegativeValueTest = new TestItem();
    addDigitToNegativeValueTest.name = 'Add digit to negative value';
    addDigitToNegativeValueTest.author = 'Anna';

    addDigitToNegativeValueTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = -42;
        return DigitReducer(state, createAction('addDigit')(1));
    };

    addDigitToNegativeValueTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: -421});
    })();
    testSet.addTestItem(addDigitToNegativeValueTest);


    var addDigitToZeroTest = new TestItem();
    addDigitToZeroTest.name = 'Add digit to zero';
    addDigitToZeroTest.author = 'Anna';

    addDigitToZeroTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        return DigitReducer(state, createAction('addDigit')(1));
    };

    addDigitToZeroTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 1});
    })();
    testSet.addTestItem(addDigitToZeroTest);


    var changeSignToFirstArgTest = new TestItem();
    changeSignToFirstArgTest.name = 'Change sign to firstArgument';
    changeSignToFirstArgTest.author = 'Anna';

    changeSignToFirstArgTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        return DigitReducer(state, createAction('changeSign')());
    };

    changeSignToFirstArgTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: -42});
    })();
    testSet.addTestItem(changeSignToFirstArgTest);


    var changeSignToFirstArgWithZeroTest = new TestItem();
    changeSignToFirstArgWithZeroTest.name = 'Change sign to firstArgument with zero';
    changeSignToFirstArgWithZeroTest.author = 'Anna';

    changeSignToFirstArgWithZeroTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        return DigitReducer(state, createAction('changeSign')());
    };

    changeSignToFirstArgWithZeroTest.expectedObject = (function () {
        return initialState;
    })();
    testSet.addTestItem(changeSignToFirstArgWithZeroTest);


    var changeSignToSecArgTest = new TestItem();
    changeSignToSecArgTest.name = 'Change sign to secondArgument';
    changeSignToSecArgTest.author = 'Anna';

    changeSignToSecArgTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.operator = 'add';
        state.secondArgument = 21;
        return DigitReducer(state, createAction('changeSign')());
    };

    changeSignToSecArgTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 42, operator: 'add', secondArgument: -21});
    })();
    testSet.addTestItem(changeSignToSecArgTest);


    var changeSignToSecArgWithZeroTest = new TestItem();
    changeSignToSecArgWithZeroTest.name = 'Change sign to firstArgument with zero';
    changeSignToSecArgWithZeroTest.author = 'Anna';

    changeSignToSecArgWithZeroTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.operator = 'add';
        return DigitReducer(state, createAction('changeSign')());
    };

    changeSignToSecArgWithZeroTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 42, operator: 'add'});
    })();
    testSet.addTestItem(changeSignToSecArgWithZeroTest);


    var changeSignToResultTest = new TestItem();
    changeSignToResultTest.name = 'Change sign to result';
    changeSignToResultTest.author = 'Anna';

    changeSignToResultTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state = OperatorReducer(state, createAction('addOperator')('add'));
        state = QueryReducer(state, createAction('addOperator')('add'));
        state.secondArgument = 21;
        state = OperatorReducer(state, createAction('precalculate')());
        state = QueryReducer(state, createAction('precalculate')());
        state = OperatorReducer(state, createAction('calculate')());
        state = QueryReducer(state, createAction('calculate')());
        return DigitReducer(state, createAction('changeSign')());
    };

    changeSignToResultTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: -63, query: '42 add 21 = 63'});
    })();
    testSet.addTestItem(changeSignToResultTest);

    return testSet.test();
}