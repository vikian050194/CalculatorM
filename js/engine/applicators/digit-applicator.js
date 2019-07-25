import createAction from "./../action-creator";
import { ACTIONS } from "./../../constants";

function digitApplicator(calculatorStore) {
    const applyDigit = function() {
        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (let i = 0; i <= digits.length; i++) {
            (function () {
                var value = digits[i];
                $("[data-value=" + value + "]").on("click", function () {
                    calculatorStore.dispatch(createAction(ACTIONS.ADD_DIGIT)(value));
                });
            })();
        }
    };

    applyDigit();

    $("[data-value=\"sign\"]").on("click", function () {
        calculatorStore.dispatch(createAction(ACTIONS.CHANGE_SIGN)());
    });
}

export { digitApplicator };