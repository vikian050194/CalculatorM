import TestState from "./../test-state";
import { memoryReducer } from "./../../engine/reducers";
import createAction from "./../../engine/action-creator";
import Integer from "./../../integer";

import assert from "assert";

describe("Memory reducer", function () {
    it("add first argument(zero)", function () {
        var actualState = { ...new TestState()
        };

        var expectedState = { ...new TestState(),
            memory: new Integer()
        };

        assert.deepStrictEqual(memoryReducer(actualState, createAction("addToMemory")()), expectedState);
    });

    it("add first argument", function () {
        var actualState = { ...new TestState(),
            firstArgument: new Integer("42")
        };

        var expectedState = { ...new TestState(),
            memory: new Integer("42"),
            firstArgument: new Integer("42")
        };

        assert.deepStrictEqual(memoryReducer(actualState, createAction("addToMemory")()), expectedState);
        assert.deepStrictEqual(actualState.memory, null, "mutation detected");
    });

    it("add second argument(zero)", function () {
        var actualState = { ...new TestState(),
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer()
        };

        var expectedState = { ...new TestState(),
            memory: new Integer(),
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer()
        };

        assert.deepStrictEqual(memoryReducer(actualState, createAction("addToMemory")()), expectedState);
        assert.deepStrictEqual(actualState.memory, null, "mutation detected");

    });

    it("add second argument", function () {
        var actualState = { ...new TestState(),
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("21")
        };

        var expectedState = { ...new TestState(),
            memory: new Integer("21"),
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("21")
        };

        assert.deepStrictEqual(memoryReducer(actualState, createAction("addToMemory")()), expectedState);
        assert.deepStrictEqual(actualState.memory, null, "mutation detected");
    });

    it("recall from empty memory", function () {
        var actualState = { ...new TestState(),
            firstArgument: new Integer("42")
        };

        var expectedState = { ...new TestState(),
            firstArgument: new Integer("42")
        };

        assert.deepStrictEqual(memoryReducer(actualState, createAction("getFromMemory")()), expectedState);
    });

    it("recall from memory to first argument", function () {
        var actualState = { ...new TestState(),
            firstArgument: new Integer("42"),
            memory: new Integer("21")
        };

        var expectedState = { ...new TestState(),
            firstArgument: new Integer("21"),
            memory: new Integer("21")
        };

        assert.deepStrictEqual(memoryReducer(actualState, createAction("getFromMemory")()), expectedState);
        assert.deepStrictEqual(actualState.firstArgument, new Integer("42"), "mutation detected");
    });

    it("recall from memory to second argument", function () {
        var actualState = { ...new TestState(),
            firstArgument: new Integer("42"),
            memory: new Integer("21"),
            operator: "add",
            secondArgument: new Integer("3")
        };

        var expectedState = { ...new TestState(),
            firstArgument: new Integer("42"),
            memory: new Integer("21"),
            operator: "add",
            secondArgument: new Integer("21")
        };

        assert.deepStrictEqual(memoryReducer(actualState, createAction("getFromMemory")()), expectedState);
        assert.deepStrictEqual(actualState.secondArgument, new Integer("3"), "mutation detected");
    });

    it("clear empty memory", function () {
        var actualState = { ...new TestState()
        };

        var expectedState = { ...new TestState()
        };

        assert.deepStrictEqual(memoryReducer(actualState, createAction("clearMemory")()), expectedState);
    });

    it("clear memory", function () {
        var actualState = { ...new TestState(),
            firstArgument: new Integer("42"),
            memory: new Integer("21"),
            operator: "add",
            secondArgument: new Integer("21")
        };

        var expectedState = { ...new TestState(),
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("21")
        };

        assert.deepStrictEqual(memoryReducer(actualState, createAction("clearMemory")()), expectedState);
    });

    it("action for different reducer", function () {
        var actualState = new TestState();

        var expectedState = new TestState();

        assert.deepStrictEqual(memoryReducer(actualState, createAction("TestAction")()), expectedState);
    });
});