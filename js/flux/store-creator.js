function createStore(reducer, defaultState) {
    var state = defaultState;
    var listeners = [];

    var getState = function () {
        return state;
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