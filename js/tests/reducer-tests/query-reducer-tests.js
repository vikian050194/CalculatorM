var TestState = require('./../test-state'),
    QueryReducer = require('./../../engine/reducers/query-reducer'),
    OperatorReducer = require('./../../engine/reducers/operator-reducer'),
    QueryBuilder = require('./../../engine/query-builder'),
    createAction = require('./../../engine/action-creator');

var assert = require('assert');

describe('Query reducer', function () {

    var initialState = new TestState();

    before(function () {
        this.jsdom = require('jsdom-global')();
        $ = require('jquery');
    });

    after(function () {
        this.jsdom()
    });

    it('query after action "addDigit"', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 1
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 1
        });
        expectedState.query = new QueryBuilder().getQuery(expectedState);

        assert.deepEqual(QueryReducer(actualState, createAction('addDigit')(1)), expectedState);
    });

    it('query after action "addOperator"', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 1,
            operator: 'add'
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 1,
            operator: 'add',
            secondArgument: null
        });
        expectedState.query = new QueryBuilder().getQuery(expectedState);

        assert.deepEqual(QueryReducer(actualState, createAction('addOperator')('add')), expectedState);
    });

    it('query after action "calculate"', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 1,
            operator: 'add',
            secondArgument: 2
        });
        actualState = OperatorReducer(actualState, createAction('precalculate')());

        var queryState = $.extend(true, {}, initialState, {
            firstArgument: 1,
            operator: 'add',
            secondArgument: 2,
            result: 3
        });
        var expectedState = $.extend(true, {}, initialState, {
            result: 3,
            query: new QueryBuilder().getQuery(queryState)
        });

        assert.deepEqual(QueryReducer(actualState, createAction('calculate')()), expectedState);
    });

    it('query after action "calculate" with first argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 63
        });
        actualState = OperatorReducer(actualState, createAction('calculate')());

        var queryState = $.extend(true, {}, initialState, {
            firstArgument: 63,
            result: 63
        });
        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 0,
            result: 63,
            query: new QueryBuilder().getQuery(queryState)
        });

        assert.deepEqual(QueryReducer(actualState, createAction('calculate')()), expectedState);
    });

    it('query after action "calculate" with first argument and module', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 63,
            module: 20
        });
        actualState = OperatorReducer(actualState, createAction('calculate')());

        var queryState = $.extend(true, {}, initialState, {
            firstArgument: 63,
            result: 3,
            module: 20
        });
        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 0,
            result: 3,
            module: 20,
            query: new QueryBuilder().getQuery(queryState)
        });

        assert.deepEqual(QueryReducer(actualState, createAction('calculate')()), expectedState);
    });

    it('query after action "calculate" with NaN result', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 63,
            secondArgument: 21,
            operator: 'add',
            result: NaN
        });
        actualState = OperatorReducer(actualState, createAction('calculate')());

        var expectedState = $.extend(true, {}, initialState, {
            query: 'ERROR'
        });

        assert.deepEqual(QueryReducer(actualState, createAction('calculate')()), expectedState);
    });

    it('query after action "addOperator" with NaN result', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 63,
            secondArgument: 21,
            operator: 'add',
            result: NaN
        });
        actualState = OperatorReducer(actualState, createAction('addOperator')('add'));

        var expectedState = $.extend(true, {}, initialState, {
            query: 'ERROR'
        });

        assert.deepEqual(QueryReducer(actualState, createAction('addOperator')('add')), expectedState);
    });

    it('query after adding module with previous module', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 63,
            module: 6,
            operator: 'mod'
        });
        actualState = OperatorReducer(actualState, createAction('addOperator')('mod'));

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 63,
            operator: 'mod',
            module: 0,
            query: '63 mod _'
        });

        assert.deepEqual(QueryReducer(actualState, createAction('addOperator')('mod')), expectedState);
    });
});