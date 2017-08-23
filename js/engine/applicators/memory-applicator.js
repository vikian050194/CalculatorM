function applyMemory(calculator) {
    var applyMemoryAdd = function () {
        $('[data-value="memoryAdd"]').on('click', function () {
            calculator.dispatch(createAction('addToMemory')());
        });
    };

    var applyMemoryRecall = function () {
        $('[data-value="memoryRecall"]').on('click', function () {
            calculator.dispatch(createAction('getFromMemory')());
        });
    };

    var applyMemoryClear = function () {
        $('[data-value="memoryClear"]').on('click', function () {
            calculator.dispatch(createAction('clearMemory')());
        });
    };

    applyMemoryAdd();
    applyMemoryRecall();
    applyMemoryClear();
}