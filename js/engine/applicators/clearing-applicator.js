import createAction from "./../action-creator";
import { ACTIONS } from "../../constants";

function clearingApplicator(calculatorStore) {
    const applyClear = function () {
        $("[data-value=\"clear\"]").on("click", function () {
            calculatorStore.dispatch(createAction(ACTIONS.CLEAR)());
        });
    };

    const applyBackspace = function () {
        $("[data-value=\"backspace\"]").on("click", function () {
            calculatorStore.dispatch(createAction(ACTIONS.DELETE)());
        });
    };

    applyClear();
    applyBackspace();
}

export { clearingApplicator };