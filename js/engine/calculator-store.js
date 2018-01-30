var createStore = require('./../flux/store-creator'),
    HistoryReducer = require('./../history/history-reducer'),
    combineReducers = require('./reducers/combine-reducers'),
    CookieReducer = require('./reducers/cookie-reducer'),
    ClearingReducer = require('./reducers/clearing-reducer'),
    DigitReducer = require('./reducers/digit-reducer'),
    MemoryReducer = require('./reducers/memory-reducer'),
    OperatorReducer = require('./reducers/operator-reducer'),
    QueryReducer = require('./reducers/query-reducer'),
    HistoryUpdate = require('./../history/history-update'),
    UpdateUI = require('./../engine/update-ui'),
    Integer = require('./../integer/integer');

function CalculatorStore() {
    var initialState = {
        firstArgument: new Integer('0'),
        secondArgument: null,
        operator: '',
        module: new Integer('0'),
        memory: null,
        query: '_',
        result: null,
        positiveCookie: false,
        moduleCookie: false
    };
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

module.exports = CalculatorStore;