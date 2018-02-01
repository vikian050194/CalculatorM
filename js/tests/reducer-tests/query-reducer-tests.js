var TestState = require('./../test-state'),
    QueryReducer = require('./../../engine/reducers/query-reducer'),
    OperatorReducer = require('./../../engine/reducers/operator-reducer'),
    QueryBuilder = require('./../../engine/query-builder'),
    createAction = require('./../../engine/action-creator'),
    Integer = require('./../../integer/integer');

var assert = require('assert');

var applyJQuery = require('./../apply-jquery');
applyJQuery();

describe('Query reducer', function () {

    var initialState = new TestState();

    it('query after action "addDigit"', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('1')
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('1')
        });
        expectedState.query = new QueryBuilder().getQuery(expectedState);

        assert.deepEqual(QueryReducer(actualState, createAction('addDigit')(1)), expectedState);
    });

    it('query after action "addOperator"', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('1'),
            operator: 'add'
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('1'),
            operator: 'add',
            secondArgument: null
        });
        expectedState.query = new QueryBuilder().getQuery(expectedState);

        assert.deepEqual(QueryReducer(actualState, createAction('addOperator')('add')), expectedState);
    });

    it('query after action "calculate"', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('1'),
            operator: 'add',
            secondArgument: new Integer('2')
        });
        actualState = OperatorReducer(actualState, createAction('precalculate')());

        var queryState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('1'),
            operator: 'add',
            secondArgument: new Integer('2'),
            result: new Integer('3')
        });
        var expectedState = $.extend(true, {}, initialState, {
            result: new Integer('3'),
            query: new QueryBuilder().getQuery(queryState)
        });

        assert.deepEqual(QueryReducer(actualState, createAction('calculate')()), expectedState);
    });

    it('query after action "calculate" with first argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('63')
        });
        actualState = OperatorReducer(actualState, createAction('calculate')());

        var queryState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('63')
        });
        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('0'),
            query: new QueryBuilder().getQuery(queryState)
        });

        assert.deepEqual(QueryReducer(actualState, createAction('calculate')()), expectedState);
    });

    it('query after action "calculate" with first argument and module', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('63'),
            module: new Integer('20')
        });
        actualState = OperatorReducer(actualState, createAction('calculate')());

        var queryState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('63'),
            result: new Integer('3'),
            module: new Integer('20')
        });
        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('0'),
            result: new Integer('3'),
            module: new Integer('20'),
            query: new QueryBuilder().getQuery(queryState)
        });

        assert.deepEqual(QueryReducer(actualState, createAction('calculate')()), expectedState);
    });

    // it('query after action "calculate" with NaN result', function () {
    //     var actualState = $.extend(true, {}, initialState, {
    //         firstArgument: new Integer('63'),
    //         secondArgument: new Integer('21'),
    //         operator: 'add',
    //         result: null
    //     });
    //     actualState = OperatorReducer(actualState, createAction('calculate')());

    //     var expectedState = $.extend(true, {}, initialState, {
    //         query: 'ERROR'
    //     });

    //     assert.deepEqual(QueryReducer(actualState, createAction('calculate')()), expectedState);
    // });

    // it('query after action "addOperator" with NaN result', function () {
    //     var actualState = $.extend(true, {}, initialState, {
    //         firstArgument: new Integer('63'),
    //         secondArgument: new Integer('21'),
    //         operator: 'add',
    //         result: null
    //     });
    //     actualState = OperatorReducer(actualState, createAction('addOperator')('add'));

    //     var expectedState = $.extend(true, {}, initialState, {
    //         query: 'ERROR'
    //     });

    //     assert.deepEqual(QueryReducer(actualState, createAction('addOperator')('add')), expectedState);
    // });

    it('query after adding module with previous module', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('63'),
            module: new Integer('6'),
            operator: 'mod'
        });
        actualState = OperatorReducer(actualState, createAction('addOperator')('mod'));

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('63'),
            operator: 'mod',
            module: new Integer('0'),
            query: '63 mod _'
        });

        assert.deepEqual(QueryReducer(actualState, createAction('addOperator')('mod')), expectedState);
    });
});