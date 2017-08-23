function applyHistory(calculator) {
    var applyUndo = function () {
        $('[data-value="undo"]').on('click', function () {
            calculator.dispatch(createAction('undo')());
        })
    };

    var applyRedo = function () {
        $('[data-value="redo"]').on('click', function () {
            calculator.dispatch(createAction('redo')());
        })
    };

    applyUndo();
    applyRedo();
}
