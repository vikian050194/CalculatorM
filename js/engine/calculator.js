function Calculator() {
    var initialState = {
        firstArgument: 0,
        secondArgument: null,
        operator: '',
        module: 0,
        memory: null
    };
    var store = createStore(HistoryReducer(Reducer), initialState);

    this.thunk = function (func, value) {
        store.thunk(func, value);
    };

    store.addListener(HistoryUpdate(UpdateUI));
}