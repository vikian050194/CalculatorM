import createAction from "./../action-creator";
import { ACTIONS } from "../../constants";

function historyApplicator(calculatorStore) {
    $("[data-value=\"undo\"]").on("click", function () {
        calculatorStore.dispatch(createAction(ACTIONS.UNDO)());
    });

    $("[data-value=\"redo\"]").on("click", function () {
        calculatorStore.dispatch(createAction(ACTIONS.REDO)());
    });
}

export { historyApplicator };