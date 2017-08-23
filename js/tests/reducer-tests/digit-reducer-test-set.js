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

    return testSet.test();
}