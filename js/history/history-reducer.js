function HistoryReducer(reducer) {
    return function (previousState, action) {
        switch (action.type) {
            case 'undo':
                var newIndex = previousState.currentIndex - 1;
                var currentState = previousState.history[previousState.currentIndex];
                while (newIndex > 0 && currentState === previousState.history[newIndex]) {
                    newIndex--;
                }
                return {
                    history: previousState.history,
                    currentIndex: newIndex
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