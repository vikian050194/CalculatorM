var TestState = require('./../test-state'),
    ClearingReducer = require('./../../engine/reducers/clearing-reducer'),
    createAction = require('./../../engine/action-creator');

var assert = require('assert');

var applyJQuery = require('./../apply-jquery');
applyJQuery();

describe('Clearing reducer', function () {

    var initialState = new TestState();

    it('clear', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 3,
            operator: 'add',
            secondArgument: 5,
            module: 78
        });

        var expectedState = $.extend(true, {}, initialState);

        assert.deepEqual(ClearingReducer(actualState, createAction('clear')()), expectedState);
    });

    it('backspace with first argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 42
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 4
        });

        assert.deepEqual(ClearingReducer(actualState, createAction('deleteDigit')()), expectedState);
    });

    it('backspace to zero with first argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 4
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: 0
        });

        assert.deepEqual(ClearingReducer(actualState, createAction('deleteDigit')()), expectedState);
    });

    it('backspace with second argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 42,
            operator: 'add',
            secondArgument: 21
        });

        var expectedState = $.extend(true, {}, initialState, {
            secondArgument: 2,
            firstArgument: 42,
            operator: 'add'
        });

        assert.deepEqual(ClearingReducer(actualState, createAction('deleteDigit')()), expectedState);
    });

    it('backspace to zero with second argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: 42,
            operator: 'add',
            secondArgument: 2
        });

        var expectedState = $.extend(true, {}, initialState, {
            secondArgument: 0,
            firstArgument: 42,
            operator: 'add'
        });

        assert.deepEqual(ClearingReducer(actualState, createAction('deleteDigit')()), expectedState);
    });
});