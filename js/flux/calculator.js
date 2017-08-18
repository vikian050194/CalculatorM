function Calculator() {
    var defaultState = {
        firstArgument: 0,
        secondArgument: null,
        operator: '',
        module: 0,
        memory: null
    };
    var store = createStore(Reducer, defaultState);

    this.thunk = function(func, payload) {
        store.thunk(func, payload);
    };

    store.addListener(UpdateUI);
}