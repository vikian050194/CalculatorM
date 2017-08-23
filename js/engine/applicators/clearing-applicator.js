function applyClearing(calculatorStore) {
    var applyClear = function () {
        $('[data-value="clear"]').on('click', function () {
            calculatorStore.dispatch(createAction('clear')());
        });
    };

    var applyBackspace = function () {
        $('[data-value="backspace"]').on('click', function () {
            calculatorStore.dispatch(createAction('deleteDigit')());
        })
    };

    applyClear();
    applyBackspace();
}