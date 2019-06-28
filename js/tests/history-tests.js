import TestState from "./test-state";

import combineReducers from "./../engine/reducers/combine-reducers";

import {
    historyReducer,
    cookieReducer,
    clearingReducer,
    digitReducer,
    memoryReducer,
    operatorReducer
} from "./../engine/reducers";

import createAction from "./../engine/action-creator";
import Integer from "./../integer";

import assert from "assert";

describe("History", function () {

    var initialState = new TestState();
    var Reducer = combineReducers({
        cookie: cookieReducer,
        clearing: clearingReducer,
        digit: digitReducer,
        memory: memoryReducer,
        operator: operatorReducer
    });

    it("undo", function () {
        var actualHistory = [{
            ...initialState,
            firstArgument: new Integer("42")
        },
        {
            ...initialState,
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("0")
        }
        ];

        var expectedHistory = [{
            ...initialState,
            firstArgument: new Integer("42")
        },
        {
            ...initialState,
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("0")
        }
        ];

        assert.deepEqual(historyReducer(Reducer)({
            history: actualHistory,
            currentIndex: 1
        }, createAction("undo")()),{history: expectedHistory, currentIndex: 0 });
    });

    it("undo with new digit", function () {
        var actualHistory = [{
            ...initialState,
            firstArgument: new Integer("42")
        },
        {
            ...initialState,
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("0")
        }
        ];

        var actualStateBeforeAddingNum = historyReducer(Reducer)({
            history: actualHistory,
            currentIndex: 1
        }, createAction("undo")());

        var expectedHistory = [{
            ...initialState,
            firstArgument: new Integer("42")
        },
        {
            ...initialState,
            firstArgument: new Integer("421")
        }
        ];

        assert.deepEqual(historyReducer(Reducer)(actualStateBeforeAddingNum, createAction("addDigit")(1)), {
            history: expectedHistory,
            currentIndex: 1
        });
    });

    it("redo", function () {
        var actualHistory = [{
            ...initialState,
            firstArgument: new Integer("42")
        },
        {
            ...initialState,
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("0")
        },
        {
            ...initialState,
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("21")
        }
        ];

        var expectedHistory = [{
            ...initialState,
            firstArgument: new Integer("42")
        },
        {
            ...initialState,
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("0")
        },
        {
            ...initialState,
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("21")
        }
        ];

        assert.deepEqual(historyReducer(Reducer)({
            history: actualHistory,
            currentIndex: 1
        }, createAction("redo")()), { history: expectedHistory, currentIndex: 2 });
    });
});