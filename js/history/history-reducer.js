function HistoryReducer(reducer) {
    return function (previousState, action) {
        var newIndex = previousState.currentIndex;
        var currentState = previousState.history[previousState.currentIndex];
        switch (action.type) {
            case "undo":
                newIndex--;
                while (newIndex > 0 && currentState.query === previousState.history[newIndex].query) {
                    newIndex--;
                }

                return {
                    history: previousState.history,
                    currentIndex: newIndex
                };
            case "redo":
                newIndex++;
                while (newIndex < previousState.history.length - 1 && currentState.query === previousState.history[newIndex].query) {
                    newIndex++;
                }

                return {
                    history: previousState.history,
                    currentIndex: newIndex
                };
            default:
                previousState.history[previousState.currentIndex + 1] = reducer(previousState.history[previousState.currentIndex], action);
                previousState.history.length = previousState.currentIndex + 2;
                return {
                    history: previousState.history,
                    currentIndex: previousState.currentIndex + 1
                };
        }
    };
}

export default HistoryReducer;