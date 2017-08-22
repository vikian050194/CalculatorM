function CalculatorUI() {
    var calculator = new Calculator();

    var addOperator = function (dispatch, getState) {
        return function (value) {
            dispatch(AddOperatorActionCreator(value));
            var currentState = getState();
            if (currentState.operator === 'calc') {
                dispatch(CalculateActionCreator());
            }
        }
    };

    var addDigit = function (dispatch, getState) {
        return function (value) {
            dispatch(AddDigitActionCreator(value));
        }
    };

    var setModule = function (dispatch, getState) {
        return function (value) {
            var currentState = getState();
            dispatch(SetToZeroActionCreator());
            var module = currentState.firstArgument;
            if (currentState.secondArgument !== null)
                module = currentState.secondArgument;
            dispatch(SetModuleActionCreator(module));
        }
    };

    var clear = function (dispatch, getState) {
        return function (value) {
            dispatch(ClearActionCreator());
        }
    };

    var addToMemory = function (dispatch, getState) {
        return function (value) {
            dispatch(AddToMemoryActionCreator());
        }
    };

    var getFromMemory = function (dispatch, getState) {
        return function (value) {
            dispatch(GetFromMemoryActionCreator());
        }
    };

    var clearMemory = function (dispatch, getState) {
        return function (value) {
            dispatch(ClearMemoryActionCreator());
        }
    };

    var deleteDigit = function (dispatch, getState) {
        return function (value) {
            dispatch(DeleteDigitActionCreator());
        }
    };

    var undo = function (dispatch, getState) {
        return function (value) {
            dispatch(UndoActionCreator());
        }
    };

    var redo = function (dispatch, getState) {
        return function (value) {
            dispatch(RedoActionCreator());
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
            $('[data-value="setMod"]').click(function () {
                calculator.thunk(setModule);
            });
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

        var applyMemoryClear = function () {
            $('[data-value="memoryClear"]').on('click', function () {
                calculator.thunk(clearMemory);
            });
        };

        var applyBackspace = function () {
            $('[data-value="backspace"]').on('click', function () {
                calculator.thunk(deleteDigit);
            })
        };

        var applyUndo = function () {
            $('[data-value="undo"]').on('click', function () {
                calculator.thunk(undo);
            })
        };

        var applyRedo = function () {
            $('[data-value="redo"]').on('click', function () {
                calculator.thunk(redo);
            })
        };

        var setStartZero = function () {
            $('#output').val(0);
            $('#query').val(0);
        };

        applyDigits(digits);
        applyOperators(operators);
        applyModule();
        applyClear();
        applyMemoryAdd();
        applyMemoryRecall();
        applyMemoryClear();
        applyBackspace();
        applyUndo();
        applyRedo();
        setStartZero();
    };

    init();
}