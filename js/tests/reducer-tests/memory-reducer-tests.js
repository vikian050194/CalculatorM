import TestState from "./../test-state";
import MemoryReducer from "./../../engine/reducers/memory-reducer";
import createAction from "./../../engine/action-creator";
import Integer from "./../../integer/integer";

import assert from "assert";

describe("Memory reducer", function () {
    var initialState = new TestState();

    it("add to zero memory", function () {
        var actualState = { ...initialState
        };

        var expectedState = { ...initialState,
            memory: new Integer("0")
        };

        assert.deepEqual(MemoryReducer(actualState, createAction("addToMemory")()), expectedState);
    });

    it("add to memory", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("42")
        };

        var expectedState = { ...initialState,
            memory: new Integer("42"),
            firstArgument: new Integer("42")
        };

        assert.deepEqual(MemoryReducer(actualState, createAction("addToMemory")()), expectedState);
    });

    it("add zero to memory from second argument", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("0")
        };

        var expectedState = { ...initialState,
            memory: new Integer("0"),
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("0")
        };

        assert.deepEqual(MemoryReducer(actualState, createAction("addToMemory")()), expectedState);
    });

    it("add to memory from second argument", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("21")
        };

        var expectedState = { ...initialState,
            memory: new Integer("21"),
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("21")
        };

        assert.deepEqual(MemoryReducer(actualState, createAction("addToMemory")()), expectedState);
    });

    it("try memory recall from empty memory", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("42")
        };

        var expectedState = { ...initialState,
            firstArgument: new Integer("42")
        };

        assert.deepEqual(MemoryReducer(actualState, createAction("getFromMemory")()), expectedState);
    });

    it("memory recall", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("42"),
            memory: new Integer("21")
        };

        var expectedState = { ...initialState,
            firstArgument: new Integer("21"),
            memory: new Integer("21")
        };

        assert.deepEqual(MemoryReducer(actualState, createAction("getFromMemory")()), expectedState);
    });

    it("memory recall to second argument", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("42"),
            memory: new Integer("21"),
            operator: "add",
            secondArgument: new Integer("3")
        };

        var expectedState = { ...initialState,
            firstArgument: new Integer("42"),
            memory: new Integer("21"),
            operator: "add",
            secondArgument: new Integer("21")
        };

        assert.deepEqual(MemoryReducer(actualState, createAction("getFromMemory")()), expectedState);
    });

    it("clear memory", function () {
        var actualState = { ...initialState,
            memory: new Integer("21")
        };

        var expectedState = { ...initialState
        };

        assert.deepEqual(MemoryReducer(actualState, createAction("clearMemory")()), expectedState);
    });

    it("clear empty memory", function () {
        var actualState = { ...initialState
        };

        var expectedState = { ...initialState
        };

        assert.deepEqual(MemoryReducer(actualState, createAction("clearMemory")()), expectedState);
    });

    it("clear memory with arguments and operator", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("42"),
            memory: new Integer("21"),
            operator: "add",
            secondArgument: new Integer("21")
        };

        var expectedState = { ...initialState,
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("21")
        };

        assert.deepEqual(MemoryReducer(actualState, createAction("clearMemory")()), expectedState);
    });
});