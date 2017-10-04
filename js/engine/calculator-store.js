function CalculatorStore(initialState) {
    var store = createStore(HistoryReducer(combineReducers({
		cookie: CookieReducer,
        clearing: ClearingReducer,
        digit: DigitReducer,
        memory: MemoryReducer,
        operator: OperatorReducer,
        query: QueryReducer
    })), initialState);

    this.thunk = function (func, value) {
        store.thunk(func, value);
    };

    this.dispatch = function (action) {
        return store.dispatch(action);
    };

    store.addListener(HistoryUpdate(UpdateUI));
    UpdateUI(initialState);
}