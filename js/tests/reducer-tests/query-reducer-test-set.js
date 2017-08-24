function QueryReducerTestSet(initialState) {
    var testSet = new TestSet();

    var addDigitQueryTest = new TestItem();
    addDigitQueryTest.name = 'Query after action "addDigit"';
    addDigitQueryTest.author = 'Anna';
    addDigitQueryTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 1;
        return QueryReducer(state, createAction('addDigit')(1));
    };
    addDigitQueryTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 1;
        return Object.assign(state, {query: new QueryBuilder().getQuery(state)});
    });
    testSet.addTestItem(addDigitQueryTest);


    var addOperatorQueryTest = new TestItem();
    addOperatorQueryTest.name = 'Query after action "addOperator"';
    addOperatorQueryTest.author = 'Anna';
    addOperatorQueryTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 1;
        state.operator = 'add';
        return QueryReducer(state, createAction('addOperator')('add'));
    };
    addOperatorQueryTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 1;
        state.operator = 'add';
        state.secondArgument = null;
        return Object.assign(state, {query: new QueryBuilder().getQuery(state)});
    });
    testSet.addTestItem(addOperatorQueryTest);


    var calculateQueryTest = new TestItem();
    calculateQueryTest.name = 'Query after action "calculate"';
    calculateQueryTest.author = 'Anna';
    calculateQueryTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 1;
        state.operator = 'add';
        state.secondArgument = 2;
        state = OperatorReducer(state, createAction('precalculate')());
        return QueryReducer(state, createAction('calculate')());
    };
    calculateQueryTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 3;
        state.operator = '';
        state.secondArgument = null;
        state.result = null;
        return Object.assign(state, {query: new QueryBuilder().getQuery(state)});
    });
    testSet.addTestItem(calculateQueryTest);

    return testSet.test();
}