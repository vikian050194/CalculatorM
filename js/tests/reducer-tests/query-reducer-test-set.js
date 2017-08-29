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
        return $.extend({}, state, {query: new QueryBuilder().getQuery(state)});
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
        return $.extend({}, state, {query: new QueryBuilder().getQuery(state)});
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
        return $.extend({}, state, {query: new QueryBuilder().getQuery(state)});
    });
    testSet.addTestItem(calculateQueryTest);


    var calculateWFAQueryTest = new TestItem();
    calculateWFAQueryTest.name = 'Query after action "calculate" with first argument';
    calculateWFAQueryTest.author = 'Anna';

    calculateWFAQueryTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 63;
        state = OperatorReducer(state, createAction('calculate')());
        return QueryReducer(state, createAction('calculate')())
    };

    calculateWFAQueryTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 63;
        state.result = 63;
        return $.extend({}, state, {firstArgument: 0, query: new QueryBuilder().getQuery(state)});
    })();
    testSet.addTestItem(calculateWFAQueryTest);


    var calculateWFAModQueryTest = new TestItem();
    calculateWFAModQueryTest.name = 'Query after action "calculate" with first argument and module';
    calculateWFAModQueryTest.author = 'Anna';

    calculateWFAModQueryTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 63;
        state.module = 20;
        state = OperatorReducer(state, createAction('calculate')());
        return QueryReducer(state, createAction('calculate')())
    };

    calculateWFAModQueryTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 63;
        state.result = 3;
        state.module = 20;
        return $.extend({}, state, {firstArgument: 0, query: new QueryBuilder().getQuery(state)});
    })();
    testSet.addTestItem(calculateWFAModQueryTest);

    return testSet.test();
}