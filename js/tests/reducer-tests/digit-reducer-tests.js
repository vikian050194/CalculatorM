var TestState = require('./../test-state'),
    DigitReducer = require('./../../engine/reducers/digit-reducer'),
    OperatorReducer = require('./../../engine/reducers/operator-reducer'),
    QueryReducer = require('./../../engine/reducers/query-reducer'),
    createAction = require('./../../engine/action-creator');

var assert = require('assert'),
    Integer = require('./../../integer/integer');

var applyJQuery = require('./../apply-jquery');
applyJQuery();

describe('Digit reducer', function () {

    var initialState = new TestState();

    it('action "addDigit"', function () {
        var initialState = new TestState();
        var actualState = $.extend(true, {}, initialState);

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('4')
        });

        assert.deepEqual(DigitReducer(actualState, createAction('addDigit')(4)), expectedState);
    });

    it('few actions "addDigit"', function () {
        var initialState = new TestState();
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('4')
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42')
        });

        assert.deepEqual(DigitReducer(actualState, createAction('addDigit')(2)), expectedState);
    });

    it('add digit to secondArgument', function () {
        var initialState = new TestState();
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42'),
            operator: 'add',
            secondArgument: new Integer('0')
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42'),
            operator: 'add',
            secondArgument: new Integer('2')
        });

        assert.deepEqual(DigitReducer(actualState, createAction('addDigit')(2)), expectedState);
    });

    it('add few digits to secondArgument', function () {
        var initialState = new TestState();
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42'),
            operator: 'add',
            secondArgument: new Integer('2')
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42'),
            operator: 'add',
            secondArgument: new Integer('21')
        });

        assert.deepEqual(DigitReducer(actualState, createAction('addDigit')(1)), expectedState);
    });

    it('add digit to positive value', function () {
        var initialState = new TestState();
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42')
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('421')
        });

        assert.deepEqual(DigitReducer(actualState, createAction('addDigit')(1)), expectedState);
    });

    it('add digit to negative value', function () {
        var initialState = new TestState();
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('-42')
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('-421')
        });

        assert.deepEqual(DigitReducer(actualState, createAction('addDigit')(1)), expectedState);
    });

    it('add digit to zero', function () {
        var initialState = new TestState();
        var actualState = $.extend(true, {}, initialState);

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('1')
        });

        assert.deepEqual(DigitReducer(actualState, createAction('addDigit')(1)), expectedState);
    });

    it('change sign to firstArgument', function () {
        var initialState = new TestState();
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42')
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('-42')
        });

        assert.deepEqual(DigitReducer(actualState, createAction('changeSign')()), expectedState);
    });

    it('change sign to firstArgument with zero', function () {
        var initialState = new TestState();

        var actualState = $.extend(true, {}, initialState);

        var expectedState = $.extend(true, {}, initialState);

        assert.deepEqual(DigitReducer(actualState, createAction('changeSign')()), expectedState);
    });

    it('change sign to secondArgument', function () {
        var initialState = new TestState();

        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42'),
            operator: 'add',
            secondArgument: new Integer('21')
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42'),
            operator: 'add',
            secondArgument: new Integer('-21')
        });

        assert.deepEqual(DigitReducer(actualState, createAction('changeSign')()), expectedState);
    });

    it('change sign to secondArgument with zero', function () {
        var initialState = new TestState();

        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42'),
            operator: 'add',
            secondArgument: new Integer('0')
        });

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42'),
            operator: 'add',
            secondArgument: new Integer('0')
        });

        assert.deepEqual(DigitReducer(actualState, createAction('changeSign')()), expectedState);
    });

    it('change sign to result', function () {
        var initialState = new TestState();
        
        var actualState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('42')
        });
        actualState = OperatorReducer(actualState, createAction('addOperator')('add'));
        actualState = QueryReducer(actualState, createAction('addOperator')('add'));
        actualState.secondArgument = new Integer('21');
        actualState = OperatorReducer(actualState, createAction('precalculate')());
        actualState = QueryReducer(actualState, createAction('precalculate')());
        actualState = OperatorReducer(actualState, createAction('calculate')());
        actualState = QueryReducer(actualState, createAction('calculate')());

        var expectedState = $.extend(true, {}, initialState, {
            firstArgument: new Integer('-63'),
            query: '42 add 21 = 63_'
        });
      
        assert.deepEqual(DigitReducer(actualState, createAction('changeSign')()), expectedState);
    });
});