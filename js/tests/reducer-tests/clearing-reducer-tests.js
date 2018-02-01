var TestState = require('./../test-state'),
    ClearingReducer = require('./../../engine/reducers/clearing-reducer'),
    createAction = require('./../../engine/action-creator');
    
var assert = require('assert'),
    Integer = require('./../../integer/integer');

var applyJQuery = require('./../apply-jquery');
applyJQuery();

describe('Clearing reducer', function () {

    var initialState = new TestState();

    it('clear', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('3'),
            operator: "add",
            secondArgument: new Integer('5'),
            module: new Integer('78')
        });

        var expectedState = $.extend(true, {}, initialState);

        assert.deepEqual(ClearingReducer(actualState, createAction('clear')()), expectedState);
    });

    it('backspace with first argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42')
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('4')
        });

        assert.deepEqual(ClearingReducer(actualState, createAction('deleteDigit')()), expectedState);
    });

    it('backspace to zero with first argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('4')
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('0')
        });

        assert.deepEqual(ClearingReducer(actualState, createAction('deleteDigit')()), expectedState);
    });

    it('backspace with second argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42'),
            operator: "add",
            secondArgument: new Integer('21')
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42'),
            operator: "add",
            secondArgument: new Integer('2')
        });

        assert.deepEqual(ClearingReducer(actualState, createAction('deleteDigit')()), expectedState);
    });

    it('backspace to zero with second argument', function () {
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42'),
            operator: "add",
            secondArgument: new Integer('2')
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42'),
            operator: "add",
            secondArgument: new Integer('0')
        });

        assert.deepEqual(ClearingReducer(actualState, createAction('deleteDigit')()), expectedState);
    });
});