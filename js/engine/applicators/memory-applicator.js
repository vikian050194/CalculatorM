import createAction from "./../action-creator";

function memoryApplicator(calculatorStore) {
    const applyMemoryAdd = function () {
        $("[data-value=\"memoryAdd\"]").on("click", function () {
            calculatorStore.dispatch(createAction("addToMemory")());
        });
    };

    const applyMemoryRecall = function () {
        $("[data-value=\"memoryRecall\"]").on("click", function () {
            calculatorStore.dispatch(createAction("getFromMemory")());
        });
    };

    const applyMemoryClear = function () {
        $("[data-value=\"memoryClear\"]").on("click", function () {
            calculatorStore.dispatch(createAction("clearMemory")());
        });
    };

    applyMemoryAdd();
    applyMemoryRecall();
    applyMemoryClear();
}

export { memoryApplicator };