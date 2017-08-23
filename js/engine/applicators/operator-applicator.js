function applyOperators(calculator) {
    var addOperator = function (dispatch, getState) {
        return function (value) {
            dispatch(createAction('addOperator')(value));
            var currentState = getState();
            if (currentState.operator === 'calc') {
                dispatch(createAction('calculate')());
            }
        }
    };

    var applyOperators = function () {
        var operators = ['add', 'sub', 'mul', 'div', 'pow', 'calc'];
        for (var i = 0; i <= operators.length; i++) {
            (function () {
                var value = operators[i];
                $('[data-value=' + value + ']').on('click', function () {
                    calculator.thunk(addOperator, value);
                });
            })();
        }
    };

    applyOperators();
}