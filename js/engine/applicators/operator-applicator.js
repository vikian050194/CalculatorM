import createAction from "../action-creator";
import { ACTIONS } from "./../../constants";

function operatorApplicator(calculatorStore) {
    const operators = ["add", "sub", "mul", "div", "pow", "calc", "mod"];

    for (let i = 0; i <= operators.length; i++) {
        (function () {
            const value = operators[i];
            $("[data-value=" + value + "]").on("click", function () {
                calculatorStore.dispatch(createAction(ACTIONS.ADD_OPERATOR)(value));
            });
        })();
    }
}

export { operatorApplicator };