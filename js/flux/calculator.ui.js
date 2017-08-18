function CalculatorUI() {
    var calculator = new Calculator();

    var addOperator = function (dispatch, getState) {
        return function (payload) {
            dispatch(AddOperatorActionCreator(payload));
            var currentState = getState();
            if(currentState.operator === 'calc') {
                dispatch(CalculateActionCreator());
            }
        }
    };

    var addDigit = function (dispatch, getState) {
        return function (payload) {
            dispatch(AddDigitActionCreator(payload));
        }
    };

    var setModule = function (dispatch, getState) {
        return function (payload) {
            dispatch(SetModuleActionCreator(payload));
        }
    };

    var clear = function (dispatch, getState) {
        return function (payload) {
            dispatch(ClearActionCreator());
        }
    };

    var addToMemory = function (dispatch, getState) {
        return function (payload) {
            dispatch(AddToMemoryActionCreator());
        }
    };

    var getFromMemory = function (dispatch, getState) {
        return function (payload) {
            dispatch(GetFromMemoryActionCreator());
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

        var applyClear = function () {
            $('[data-value="clear"]').on('click', function () {
                calculator.thunk(clear);
            });
        };

        var applyMemoryAdd = function () {
            $('[data-value="memoryAdd"]').on('click', function () {
                calculator.thunk(addToMemory);
            });
        };

        var applyMemoryRecall = function () {
            $('[data-value="memoryRecall"]').on('click', function () {
                calculator.thunk(getFromMemory);
            });
        };

        var setStartZero = function () {
            $('[data-value="0"]').trigger('click');
        };

        applyDigits(digits);
        applyOperators(operators);
        // applyModule();
        applyClear();
        applyMemoryAdd();
        applyMemoryRecall();
        setStartZero();
    };

    init();
}