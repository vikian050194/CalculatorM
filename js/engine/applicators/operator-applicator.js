function applyOperators(calculatorStore) {
    var addOperator = function (dispatch, getState) {
        return function (value) {
            dispatch(createAction('precalculate')());
            if (value !== 'calc') {
                dispatch(createAction('addOperator')(value));
            } else {
                dispatch(createAction('calculate')());
            }
        }
    };

    var applyOperators = function () {
        var operators = ['add', 'sub', 'mul', 'div', 'pow', 'calc', 'mod'];
        for (var i = 0; i <= operators.length; i++) {
            (function () {
                var value = operators[i];
                $('[data-value=' + value + ']').on('click', function () {
                    calculatorStore.thunk(addOperator, value);
                });
            })();
        }
    };

    applyOperators();
}