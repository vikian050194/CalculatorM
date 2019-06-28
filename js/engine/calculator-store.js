import createStore from "./../flux/store-creator";
import combineReducers from "./reducers/combine-reducers";

import {
    historyReducer,
    cookieReducer,
    clearingReducer,
    digitReducer,
    memoryReducer,
    operatorReducer
} from "./reducers";

import {
    updateView,
    updateHistory,
    updateCookies
} from "./effects";

function CalculatorStore(initialState) {
    const store = createStore(historyReducer(combineReducers({
        cookie: cookieReducer,
        clearing: clearingReducer,
        digit: digitReducer,
        memory: memoryReducer,
        operator: operatorReducer
    })), initialState);

    this.thunk = function (func, value) {
        store.thunk(func, value);
    };

    this.dispatch = function (action) {
        return store.dispatch(action);
    };

    store.addListener(updateHistory(updateView, updateCookies));
    updateView(initialState);
}

export default CalculatorStore;