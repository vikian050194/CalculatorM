import TestState from "./../test-state";
import ClearingReducer from "./../../engine/reducers/clearing-reducer";
import createAction from "./../../engine/action-creator";
import assert from "assert";
import Integer from "./../../integer/integer";

describe("Clearing reducer", function () {
    var initialState = new TestState();

    it("clear", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("3"),
            operator: "add",
            secondArgument: new Integer("5"),
            module: new Integer("78")
        };

        var expectedState = { ...initialState
        };

        assert.deepEqual(ClearingReducer(actualState, createAction("clear")()), expectedState);
    });

    it("backspace with first argument", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("42")
        };

        var expectedState = { ...initialState,
            firstArgument: new Integer("4")
        };

        assert.deepEqual(ClearingReducer(actualState, createAction("deleteDigit")()), expectedState);
    });

    it("backspace to zero with first argument", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("4")
        };

        var expectedState = { ...initialState,
            firstArgument: new Integer("0")
        };

        assert.deepEqual(ClearingReducer(actualState, createAction("deleteDigit")()), expectedState);
    });

    it("backspace with second argument", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("21")
        };

        var expectedState = { ...initialState,
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("2")
        };

        assert.deepEqual(ClearingReducer(actualState, createAction("deleteDigit")()), expectedState);
    });

    it("backspace to zero with second argument", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("2")
        };

        var expectedState = { ...initialState,
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("0")
        };

        assert.deepEqual(ClearingReducer(actualState, createAction("deleteDigit")()), expectedState);
    });
});