function CalculatorUI() {
    var calculator = new Calculator();

    var addOperator = function (dispatch, getState) {
        return function (payload) {
            dispatch(new Action('addOperator', payload));
            var currentState = getState();
            if(currentState.operator === 'calc') {
                dispatch(new Action('calculate'));
            }
        }
    };

    var addDigit = function (dispatch, getState) {
        return function (payload) {
            dispatch(new Action('addDigit', payload));
        }
    };

    var setModule = function (dispatch, getState) {
        return function (payload) {
            dispatch(new Action('setModule', payload));
        }
    };

    var init = function () {
        var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var operators = ['add', 'sub', 'mul', 'div', 'pow', 'calc'];

        var applyDigits = function (values) {
            for (var i = 0; i <= values.length; i++) {
                (function () {
                    var value = values[i];
                    $('[data-value=' + value + ']').on('click', function () {
                        calculator.thunk(addDigit, value);
                    });
                })();
            }
        };

        var applyOperators = function (values) {
            for (var i = 0; i <= values.length; i++) {
                (function () {
                    var value = values[i];
                    $('[data-value=' + value + ']').on('click', function () {
                        calculator.thunk(addOperator, value);
                    });
                })();
            }
        };

        var applyModule = function () {
            calculator.thunk(setModule, Module());
        };

        applyDigits(digits);
        applyOperators(operators);
        applyModule();
    };

    init();
}