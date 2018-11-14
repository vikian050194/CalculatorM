import createAction from "./../action-creator";

function applyDigits(calculatorStore) {
    var applyDigit = function() {
        var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i <= digits.length; i++) {
            (function () {
                var value = digits[i];
                $("[data-value=" + value + "]").on("click", function () {
                    calculatorStore.dispatch(createAction("addDigit")(value));
                });
            })();
        }
    };

    applyDigit();

    $("[data-value=\"sign\"]").on("click", function () {
        calculatorStore.dispatch(createAction("changeSign")());
    });
}

export default applyDigits;