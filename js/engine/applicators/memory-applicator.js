var createAction = require('./../action-creator');

function applyMemory(calculatorStore) {
    var applyMemoryAdd = function () {
        $('[data-value="memoryAdd"]').on('click', function () {
            calculatorStore.dispatch(createAction('addToMemory')());
        });
    };

    var applyMemoryRecall = function () {
        $('[data-value="memoryRecall"]').on('click', function () {
            calculatorStore.dispatch(createAction('getFromMemory')());
        });
    };

    var applyMemoryClear = function () {
        $('[data-value="memoryClear"]').on('click', function () {
            calculatorStore.dispatch(createAction('clearMemory')());
        });
    };

    applyMemoryAdd();
    applyMemoryRecall();
    applyMemoryClear();
}

module.exports = applyMemory;