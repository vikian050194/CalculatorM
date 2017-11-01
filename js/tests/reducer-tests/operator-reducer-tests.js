var TestState = require('./../test-state'),
    OperatorReducer = require('./../../engine/reducers/operator-reducer'),
    QueryReducer = require('./../../engine/reducers/query-reducer'),
    createAction = require('./../../engine/action-creator');

var assert = require('assert');

var applyJQuery = require('./../apply-jquery');
applyJQuery();

describe('Operator reducer', function () {

    var initialState = new TestState();

    it('action "addOperator" with empty input', function () {
        var actualState = $.extend(true, {}, initialState);

        var expectedState = $.extend(true, {}, initialState, {
            operator: 'add'
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('addOperator')('add')), expectedState);
    });

    it('action "addOperator" without previous operator', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 42
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 42,
            operator: 'add'
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('addOperator')('add')), expectedState);
    });

    it('several actions "addOperator" in a row', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 42
        });
        actualState = OperatorReducer(actualState, createAction('addOperator')('add'));
        actualState = OperatorReducer(actualState, createAction('addOperator')('sub'));
        actualState = OperatorReducer(actualState, createAction('addOperator')('mul'));
        actualState = OperatorReducer(actualState, createAction('addOperator')('pow'));

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 42,
            operator: 'div'
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('addOperator')('div')), expectedState);
    });

    it('action "addOperator" with previous operator', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 42,
            operator: 'add',
            secondArgument: 21
        });
        actualState = OperatorReducer(actualState, createAction('precalculate')());

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 63,
            operator: 'mul'
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('addOperator')('mul')), expectedState);
    });

    it('calculate right after "addOperator"', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 42,
            operator: 'div'
        });
        actualState = OperatorReducer(actualState, createAction('precalculate')());

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 42,
            operator: 'div',
            result: Infinity
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('calculate')()), expectedState);
    });

    it('action "calculate" with module', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 63,
            module: 5
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 63,
            result: 3,
            module: 5
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('calculate')()), expectedState);
    });

    it('action "calculate" with first argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 63
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 63,
            result: 63
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('calculate')()), expectedState);
    });

    it('calculate without module', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 63
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 63,
            result: 63
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('calculate')()), expectedState);
    });

    it('add operator "add"', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 42
        });
        actualState = OperatorReducer(actualState, createAction('addOperator')('add'));
        actualState.secondArgument = 21;

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 42,
            operator: 'add',
            secondArgument: 21,
            result: 63
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('precalculate')()), expectedState);
    });

    it('add operator "sub"', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 42
        });
        actualState = OperatorReducer(actualState, createAction('addOperator')('sub'));
        actualState.secondArgument = 21;

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 42,
            operator: 'sub',
            secondArgument: 21,
            result: 21
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('precalculate')()), expectedState);
    });

    it('add operator "mul"', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 4
        });
        actualState = OperatorReducer(actualState, createAction('addOperator')('mul'));
        actualState.secondArgument = 2;

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 4,
            operator: 'mul',
            secondArgument: 2,
            result: 8
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('precalculate')()), expectedState);
    });

    it('add operator "div"', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 4
        });
        actualState = OperatorReducer(actualState, createAction('addOperator')('div'));
        actualState.secondArgument = 2;

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 4,
            operator: 'div',
            secondArgument: 2,
            result: 2
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('precalculate')()), expectedState);
    });

    it('add operator "pow"', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 4
        });
        actualState = OperatorReducer(actualState, createAction('addOperator')('pow'));
        actualState.secondArgument = 2;

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 4,
            operator: 'pow',
            secondArgument: 2,
            result: 16
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('precalculate')()), expectedState);
    });

    it('add operator "mod"', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 3
        });
        actualState = OperatorReducer(actualState, createAction('addOperator')('mod'));
        actualState.secondArgument = 2;

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 3,
            operator: 'mod',
            secondArgument: 2,
            module: 2,
            result: 1
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('precalculate')()), expectedState);
    });

    it('add operator "mod" with zero', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 3
        });
        actualState = OperatorReducer(actualState, createAction('addOperator')('mod'));
        actualState.secondArgument = 0;

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 3,
            operator: 'mod',
            secondArgument: 0
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('precalculate')()), expectedState);
    });

    it('add operator "mod" with zero with previous module', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 3,
            module: 78
        });
        actualState = OperatorReducer(actualState, createAction('addOperator')('mod'));
        actualState.secondArgument = 0;

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 3,
            operator: 'mod',
            secondArgument: 0
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('precalculate')()), expectedState);
    });

    it('add operator "mod" with positive cookie', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: -17,
            positiveCookie: true
        });
        actualState = OperatorReducer(actualState, createAction('addOperator')('mod'));
        actualState.secondArgument = 9;

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: -17,
            operator: 'mod',
            secondArgument: 9,
            result: 1,
            module: 9,
            positiveCookie: true
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('precalculate')()), expectedState);
    });

    it('add operator with positive cookie and module', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: -18,
            positiveCookie: true,
            module: 9
        });
        actualState = OperatorReducer(actualState, createAction('addOperator')('add'));
        actualState.secondArgument = 1;

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: -18,
            operator: 'add',
            secondArgument: 1,
            result: 1,
            module: 9,
            positiveCookie: true
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('precalculate')()), expectedState);
    });

    it('calculate with positive cookie and module', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: -17,
            positiveCookie: true,
            module: 9
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: -17,
            result: 1,
            module: 9,
            positiveCookie: true
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('calculate')()), expectedState);
    });

    it('calculate right after "mod"', function () {
        var actualState = $.extend(true, {}, initialState);
        actualState = OperatorReducer(actualState, createAction('addOperator')('mod'));

        var expectedState = $.extend(true, {}, initialState, {
            operator: 'mod',
            result: 0
        });

        assert.deepEqual(OperatorReducer(actualState, createAction('calculate')()), expectedState);
    });

    it('add operator after calculate with "mod"', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 78
        });
        actualState = OperatorReducer(actualState, createAction('addOperator')('mod'));
        actualState = QueryReducer(actualState, createAction('addOperator')('mod'));
        actualState.secondArgument = 72;
        actualState = OperatorReducer(actualState, createAction('precalculate')());
        actualState = OperatorReducer(actualState, createAction('calculate')());
        actualState = QueryReducer(actualState, createAction('calculate')());
        actualState = OperatorReducer(actualState, createAction('precalculate')());
        actualState = OperatorReducer(actualState, createAction('addOperator')('add'));

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 6,
            operator: 'add',
            module: 72,
            query: '6 add _ mod 72'
        });

        assert.deepEqual(QueryReducer(actualState, createAction('addOperator')('add')), expectedState);
    });
});