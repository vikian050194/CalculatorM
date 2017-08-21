function Undoable(reducer) {
    return function (previousState, action) {
        switch (action.type) {
            case 'undo':
                return {
                    history: previousState.history,
                    currentIndex: previousState.currentIndex - 1
                };
                break;
            case 'redo':
                return {
                    history: previousState.history,
                    currentIndex: previousState.currentIndex + 1
                };
                break;
            default:
                previousState.history[previousState.currentIndex + 1] = reducer(previousState.history[previousState.currentIndex], action);
                previousState.history.length = previousState.currentIndex + 2;
                return {
                    history: previousState.history,
                    currentIndex: previousState.currentIndex + 1
                };
                break;
        }
    }
}