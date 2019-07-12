function createStore(reducer, initialState) {
    let state = {
        history: [initialState],
        currentIndex: 0
    };
    const listeners = [];

    const getState = function () {
        return state.history[state.currentIndex];
    };

    const addListener = function (callback) {
        const removeListener = function () {
            const index = listeners.indexOf(callback);
            listeners.splice(index, 1);
        };
        listeners.push(callback);
        return {removeListener: removeListener};
    };

    const dispatch = function (action) {
        state = reducer(state, action);
        listeners.forEach(function (callback) {
            callback(state);
        });
    };

    const thunk = function (func, value) {
        func(dispatch, getState)(value);
    };

    return {
        getState: getState,
        thunk: thunk,
        dispatch: dispatch,
        addListener: addListener
    };
}

export default createStore;