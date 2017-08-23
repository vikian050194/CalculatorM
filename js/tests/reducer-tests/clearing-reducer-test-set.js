function ClearingReducerTestSet(initialState) {
    var testSet = new TestSet();

    var clearTest = new TestItem();
    clearTest.name = 'Clear';
    clearTest.author = 'Anna';

    clearTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 3;
        state.operator = 'add';
        state.secondArgument = 5;
        state.module = 78;
        return ClearingReducer(state, createAction('clear')());
    };

    clearTest.expectedObject = (function () {
        return jQuery.extend(true, {}, initialState)
    })();
    testSet.addTestItem(clearTest);


    var backspaceFATest = new TestItem();
    backspaceFATest.name = 'Backspace with first argument';
    backspaceFATest.author = 'Anna';

    backspaceFATest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        return ClearingReducer(state, createAction('deleteDigit')());
    };

    backspaceFATest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 4});
    })();
    testSet.addTestItem(backspaceFATest);


    var backspaceFAToZeroTest = new TestItem();
    backspaceFAToZeroTest.name = 'Backspace to zero with first argument';
    backspaceFAToZeroTest.author = 'Anna';

    backspaceFAToZeroTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 4;
        return ClearingReducer(state, createAction('deleteDigit')());
    };

    backspaceFAToZeroTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 0});
    })();
    testSet.addTestItem(backspaceFAToZeroTest);


    var backspaceSATest = new TestItem();
    backspaceSATest.name = 'Backspace with second argument';
    backspaceSATest.author = 'Anna';

    backspaceSATest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.operator = 'add';
        state.secondArgument = 21;
        return ClearingReducer(state, createAction('deleteDigit')());
    };

    backspaceSATest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {secondArgument: 2, firstArgument: 42, operator: 'add'});
    })();
    testSet.addTestItem(backspaceSATest);


    var backspaceSAToZeroTest = new TestItem();
    backspaceSAToZeroTest.name = 'Backspace to zero with second argument';
    backspaceSAToZeroTest.author = 'Anna';

    backspaceSAToZeroTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.operator = 'add';
        state.secondArgument = 2;
        return ClearingReducer(state, createAction('deleteDigit')());
    };

    backspaceSAToZeroTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {secondArgument: 0, firstArgument: 42, operator: 'add'});
    })();
    testSet.addTestItem(backspaceSAToZeroTest);

    return testSet.test();
}