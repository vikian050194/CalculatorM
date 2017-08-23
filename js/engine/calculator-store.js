function CalculatorStore() {
    var initialState = {
        firstArgument: 0,
        secondArgument: null,
        operator: '',
        module: 0,
        memory: null
    };
    var store = createStore(HistoryReducer(combineReducers({
        clearing: ClearingReducer,
        digit: DigitReducer,
        memory: MemoryReducer,
        module: ModuleReducer,
        operator: OperatorReducer
    })), initialState);

    this.thunk = function (func, value) {
        store.thunk(func, value);
    };

    this.dispatch = function (action) {
        return store.dispatch(action);
    };

    store.addListener(HistoryUpdate(UpdateUI));
}