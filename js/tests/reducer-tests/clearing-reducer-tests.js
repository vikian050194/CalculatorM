import TestState from "./../test-state";
import ClearingReducer from "./../../engine/reducers/clearing-reducer";
import createAction from "./../../engine/action-creator";
import Integer from "./../../integer/integer";
import assert from "assert";

describe("Clearing reducer", function () {
    it("clear", function () {
        var actualState = { ...new TestState(),
            firstArgument: new Integer("3"),
            operator: "add",
            secondArgument: new Integer("5"),
            module: new Integer("11"),
            result: new Integer("8"),
            query: "query",
        };

        var expectedState = { ...new TestState()
        };

        assert.deepEqual(ClearingReducer(actualState, createAction("clear")()), expectedState);
        assert.deepEqual(actualState.firstArgument, new Integer("3"), "mutation detected");
        assert.deepEqual(actualState.secondArgument, new Integer("5"), "mutation detected");
        assert.deepEqual(actualState.result, new Integer("8"), "mutation detected");
        assert.deepEqual(actualState.module, new Integer("11"), "mutation detected");
        assert.equal(actualState.operator, "add", "mutation detected");
        assert.equal(actualState.query, "query", "mutation detected");
    });

    it("remove second digit of first argument", function () {
        var actualState = { ...new TestState(),
            firstArgument: new Integer("42")
        };

        var expectedState = { ...new TestState(),
            firstArgument: new Integer("4")
        };

        assert.deepEqual(ClearingReducer(actualState, createAction("deleteDigit")()), expectedState);
        assert.deepEqual(actualState.firstArgument, new Integer("42"), "mutation detected");
    });

    it("remove second digit of second argument", function () {
        var actualState = { ...new TestState(),
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("21")
        };

        var expectedState = { ...new TestState(),
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("2")
        };

        assert.deepEqual(ClearingReducer(actualState, createAction("deleteDigit")()), expectedState);
        assert.deepEqual(actualState.secondArgument, new Integer("21"), "mutation detected");
    });

    it("remove operator", function () {
        var actualState = { ...new TestState(),
            firstArgument: new Integer("42"),
            operator: "add"
        };

        var expectedState = { ...new TestState(),
            firstArgument: new Integer("42"),
            operator: ""
        };

        assert.deepEqual(ClearingReducer(actualState, createAction("deleteDigit")()), expectedState);
        assert.equal(actualState.operator, "add", "mutation detected");
    });

    it("remove second digit of result", function () {
        var actualState = { ...new TestState(),
            result: new Integer("63")
        };

        var expectedState = { ...new TestState(),
            firstArgument: new Integer("6")
        };

        assert.deepEqual(ClearingReducer(actualState, createAction("deleteDigit")()), expectedState);
        assert.deepEqual(actualState.result, new Integer("63"), "mutation detected");
    });

    it("action for different reducer", function () {
        var actualState = new TestState();

        var expectedState = new TestState();

        assert.deepEqual(ClearingReducer(actualState, createAction("TestAction")()), expectedState);
    });
});