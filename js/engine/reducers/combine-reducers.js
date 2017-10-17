function combineReducers(reducers) {
    return function (previousState, action) {
        return Object.keys(reducers).reduce(function (nextState, key) {
            nextState = reducers[key](nextState, action);
            return nextState;
        }, $.extend(true, {}, previousState));
    }
}

module.exports = combineReducers;