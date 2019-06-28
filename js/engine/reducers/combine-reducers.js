const combineReducers = (reducers) => {
    return (previousState, action) => {
        return Object.keys(reducers).reduce(function (nextState, key) {
            nextState = reducers[key](nextState, action);
            return nextState;
        }, previousState);
    };
};

export default combineReducers;