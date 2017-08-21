function createStore(reducer, initialState) {
    var state = {history: [initialState], currentIndex: 0};
    var listeners = [];

    var getState = function () {
        return state.history[state.currentIndex];
    };

    var addListener = function (callback) {
        var removeListener = function () {
            var index = listeners.indexOf(callback);
            listeners.splice(index, 1);
        };
        listeners.push(callback);
        return { removeListener };
    };

    var dispatch = function (action) {
        state = reducer(state, action);
        listeners.forEach(function (callback) {
            callback(state);
        })
    };

    var thunk = function (func, payload) {
        func(dispatch, getState)(payload);
    };

    return {
        getState: getState,
        thunk: thunk,
        addListener: addListener
    }
}