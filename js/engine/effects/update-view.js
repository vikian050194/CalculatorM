import { updateQuery } from "./update-query";
import { updateResult } from "./update-result";

function updateView(state) {
    updateQuery(state);
    updateResult(state);
}

export { updateView };