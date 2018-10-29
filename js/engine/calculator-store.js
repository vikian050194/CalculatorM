import createStore from "./../flux/store-creator";
import HistoryReducer from "./../history/history-reducer";
import combineReducers from "./reducers/combine-reducers";
import CookieReducer from "./reducers/cookie-reducer";
import ClearingReducer from "./reducers/clearing-reducer";
import DigitReducer from "./reducers/digit-reducer";
import MemoryReducer from "./reducers/memory-reducer";
import OperatorReducer from "./reducers/operator-reducer";
import QueryReducer from "./reducers/query-reducer";
import HistoryUpdate from "./../history/history-update";
import UpdateUI from "./../engine/update-ui";
import Integer from "./../integer/integer";

function CalculatorStore() {
    var initialState = {
        firstArgument: new Integer("0"),
        secondArgument: null,
        operator: "",
        module: new Integer("0"),
        memory: null,
        query: "_",
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

export default CalculatorStore;