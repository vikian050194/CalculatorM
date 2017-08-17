function Calculator() {
    var defaultState = {
        firstArgument: 0,
        secondArgument: 0,
        operator: '',
        module: 0,
        result: 0
    };
    var store = createStore(Reducer, defaultState);

    this.thunk = function(func, payload) {
        store.thunk(func, payload);
    };

    store.addListener(UpdateUI);
}