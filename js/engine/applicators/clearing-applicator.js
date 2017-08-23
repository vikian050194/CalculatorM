function applyClearing(calculator) {
    var applyClear = function () {
        $('[data-value="clear"]').on('click', function () {
            calculator.dispatch(createAction('clear')());
        });
    };

    var applyBackspace = function () {
        $('[data-value="backspace"]').on('click', function () {
            calculator.dispatch(createAction('deleteDigit')());
        })
    };

    applyClear();
    applyBackspace();
}