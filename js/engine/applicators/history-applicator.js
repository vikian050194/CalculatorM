var createAction = require('./../action-creator');

function applyHistory(calculatorStore) {
    var applyUndo = function () {
        $('[data-value="undo"]').on('click', function () {
            calculatorStore.dispatch(createAction('undo')());
        })
    };

    var applyRedo = function () {
        $('[data-value="redo"]').on('click', function () {
            calculatorStore.dispatch(createAction('redo')());
        })
    };

    applyUndo();
    applyRedo();
}

module.exports = applyHistory;