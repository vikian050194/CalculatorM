import createAction from "../action-creator";
import { ACTIONS } from "../../constants";

function navigationApplicator(calculatorStore) {
    $("[data-value=\"left\"]").on("click", function () {
        calculatorStore.dispatch(createAction(ACTIONS.MOVE_LEFT)());
    });
    $("[data-value=\"right\"]").on("click", function () {
        calculatorStore.dispatch(createAction(ACTIONS.MOVE_RIGHT)());
    });
}

export { navigationApplicator };