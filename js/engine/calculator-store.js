import createStore from "./../flux/store-creator";
import combineReducers from "./reducers/combine-reducers";

import {
    historyReducer,
    settingsReducer,
    clearingReducer,
    argumentReducer,
    memoryReducer,
    operatorReducer,
    navigationReducer
} from "./reducers";

import {
    updateView,
    updateHistory,
    updateCookies
} from "./effects";

function CalculatorStore(initialState) {
    const store = createStore(historyReducer(combineReducers({
        settings: settingsReducer,
        clearing: clearingReducer,
        argument: argumentReducer,
        memory: memoryReducer,
        operator: operatorReducer,
        navigation: navigationReducer
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