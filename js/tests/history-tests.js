import TestState from "./test-state";
import HistoryReducer from "./../history/history-reducer";
import combineReducers from "./../engine/reducers/combine-reducers";
import CookieReducer from "./../engine/reducers/cookie-reducer";
import ClearingReducer from "./../engine/reducers/clearing-reducer";
import DigitReducer from "./../engine/reducers/digit-reducer";
import MemoryReducer from "./../engine/reducers/memory-reducer";
import OperatorReducer from "./../engine/reducers/operator-reducer";
import QueryReducer from "./../engine/reducers/query-reducer";
import createAction from "./../engine/action-creator";
import Integer from "./../integer/integer";

import assert from "assert";

describe("History", function () {

    var initialState = new TestState();
    var Reducer = combineReducers({
        cookie: CookieReducer,
        clearing: ClearingReducer,
        digit: DigitReducer,
        memory: MemoryReducer,
        operator: OperatorReducer,
        query: QueryReducer
    });

    it("undo", function () {
        var actualHistory = [{ ...initialState,
                firstArgument: new Integer("42"),
                query: "42_"
            },
            { ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("0"),
                query: "42 add 0_"
            }
        ];

        var expectedHistory = [{ ...initialState,
                firstArgument: new Integer("42"),
                query: "42_"
            },
            { ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("0"),
                query: "42 add 0_"
            }
        ];

        assert.deepEqual(HistoryReducer(Reducer)({
            history: actualHistory,
            currentIndex: 1
        }, createAction("undo")()), {
            history: expectedHistory,
            currentIndex: 0
        });
    });

    it("undo with new digit", function () {
        var actualHistory = [{ ...initialState,
                firstArgument: new Integer("42"),
                query: "42_"
            },
            { ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("0"),
                query: "42 add 0_"
            }
        ];

        var actualStateBeforeAddingNum = HistoryReducer(Reducer)({
            history: actualHistory,
            currentIndex: 1
        }, createAction("undo")());

        var expectedHistory = [{ ...initialState,
                firstArgument: new Integer("42"),
                query: "42_"
            },
            { ...initialState,
                firstArgument: new Integer("421"),
                query: "421_"
            }
        ];

        assert.deepEqual(HistoryReducer(Reducer)(actualStateBeforeAddingNum, createAction("addDigit")(1)), {
            history: expectedHistory,
            currentIndex: 1
        });
    });

    it("redo", function () {
        var actualHistory = [{ ...initialState,
                firstArgument: new Integer("42"),
                query: "42_"
            },
            { ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("0"),
                query: "42 add 0_"
            },
            { ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("21"),
                query: "42 add 21_"
            }
        ];

        var expectedHistory = [{ ...initialState,
                firstArgument: new Integer("42"),
                query: "42_"
            },
            { ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("0"),
                query: "42 add 0_"
            },
            { ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("21"),
                query: "42 add 21_"
            }
        ];

        assert.deepEqual(HistoryReducer(Reducer)({
            history: actualHistory,
            currentIndex: 1
        }, createAction("redo")()), {
            history: expectedHistory,
            currentIndex: 2
        });
    });
});