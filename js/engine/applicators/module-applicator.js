function applyModule(calculator) {
    var setModule = function (dispatch, getState) {
        return function (value) {
            var currentState = getState();
            dispatch(createAction('setToZero')());
            var module = currentState.firstArgument;
            if (currentState.secondArgument !== null)
                module = currentState.secondArgument;
            dispatch(createAction('setModule')(module));
        }
    };

    var applyModule = function () {
        $('[data-value="setMod"]').click(function () {
            calculator.thunk(setModule);
        });
    };

    applyModule();
}