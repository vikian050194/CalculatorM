function QueryReducerTestSet() {
    var testSet = new TestSet();
    var initialState = new TestState;

    var addDigitQueryTest = new TestItem();
    addDigitQueryTest.name = 'Query after action "addDigit"';
    addDigitQueryTest.author = 'Anna';
    addDigitQueryTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 1;
        return QueryReducer(state, createAction('addDigit')(1));
    };
    addDigitQueryTest.expectedObject = (function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 1;
        return $.extend({}, state, {query: new QueryBuilder().getQuery(state)});
    })();
    testSet.addTestItem(addDigitQueryTest);


    var addOperatorQueryTest = new TestItem();
    addOperatorQueryTest.name = 'Query after action "addOperator"';
    addOperatorQueryTest.author = 'Anna';
    addOperatorQueryTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 1;
        state.operator = 'add';
        return QueryReducer(state, createAction('addOperator')('add'));
    };
    addOperatorQueryTest.expectedObject = (function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 1;
        state.operator = 'add';
        state.secondArgument = null;
        return $.extend({}, state, {query: new QueryBuilder().getQuery(state)});
    })();
    testSet.addTestItem(addOperatorQueryTest);


    var calculateQueryTest = new TestItem();
    calculateQueryTest.name = 'Query after action "calculate"';
    calculateQueryTest.author = 'Anna';
    calculateQueryTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 1;
        state.operator = 'add';
        state.secondArgument = 2;
        state = OperatorReducer(state, createAction('precalculate')());
        return QueryReducer(state, createAction('calculate')());
    };
    calculateQueryTest.expectedObject = (function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 1;
        state.operator = 'add';
        state.secondArgument = 2;
        state.result = 3;
        return $.extend(true, {}, initialState, {result: 3, query: new QueryBuilder().getQuery(state)});
    })();
    testSet.addTestItem(calculateQueryTest);


    var calculateWFAQueryTest = new TestItem();
    calculateWFAQueryTest.name = 'Query after action "calculate" with first argument';
    calculateWFAQueryTest.author = 'Anna';

    calculateWFAQueryTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 63;
        state = OperatorReducer(state, createAction('calculate')());
        return QueryReducer(state, createAction('calculate')())
    };

    calculateWFAQueryTest.expectedObject = (function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 63;
        state.result = 63;
        return $.extend({}, state, {firstArgument: 0, query: new QueryBuilder().getQuery(state)});
    })();
    testSet.addTestItem(calculateWFAQueryTest);


    var calculateWFAModQueryTest = new TestItem();
    calculateWFAModQueryTest.name = 'Query after action "calculate" with first argument and module';
    calculateWFAModQueryTest.author = 'Anna';

    calculateWFAModQueryTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 63;
        state.module = 20;
        state = OperatorReducer(state, createAction('calculate')());
        return QueryReducer(state, createAction('calculate')())
    };

    calculateWFAModQueryTest.expectedObject = (function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 63;
        state.result = 3;
        state.module = 20;
        return $.extend({}, state, {firstArgument: 0, query: new QueryBuilder().getQuery(state)});
    })();
    testSet.addTestItem(calculateWFAModQueryTest);


    var calculateWNaNResultQueryTest = new TestItem();
    calculateWNaNResultQueryTest.name = 'Query after action "calculate" with NaN result';
    calculateWNaNResultQueryTest.author = 'Anna';

    calculateWNaNResultQueryTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 63;
        state.secondArgument = 21;
        state.operator = 'add';
        state.result = NaN;
        state = OperatorReducer(state, createAction('calculate')());
        return QueryReducer(state, createAction('calculate')());
    };

    calculateWNaNResultQueryTest.expectedObject = (function () {
        return $.extend({}, initialState, {query: 'ERROR'});
    })();
    testSet.addTestItem(calculateWNaNResultQueryTest);


    var addOperatorWNaNResultQueryTest = new TestItem();
    addOperatorWNaNResultQueryTest.name = 'Query after action "addOperator" with NaN result';
    addOperatorWNaNResultQueryTest.author = 'Anna';

    addOperatorWNaNResultQueryTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 63;
        state.secondArgument = 21;
        state.operator = 'add';
        state.result = NaN;
        state = OperatorReducer(state, createAction('addOperator')('add'));
        return QueryReducer(state, createAction('addOperator')('add'));
    };

    addOperatorWNaNResultQueryTest.expectedObject = (function () {
        return $.extend({}, initialState, {query: 'ERROR'});
    })();
    testSet.addTestItem(addOperatorWNaNResultQueryTest);


    var addSeveralModulesQueryTest = new TestItem();
    addSeveralModulesQueryTest.name = 'Query after adding module with previous module';
    addSeveralModulesQueryTest.author = 'Anna';

    addSeveralModulesQueryTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 63;
        state.module = 6;
        state.operator = 'mod';
        state = OperatorReducer(state, createAction('addOperator')('mod'));
        return QueryReducer(state, createAction('addOperator')('mod'));
    };

    addSeveralModulesQueryTest.expectedObject = (function () {
        return $.extend({}, initialState, {firstArgument: 63, operator: 'mod', module: 0, query: '63 mod _'});
    })();
    testSet.addTestItem(addSeveralModulesQueryTest);

    return testSet.test();
}