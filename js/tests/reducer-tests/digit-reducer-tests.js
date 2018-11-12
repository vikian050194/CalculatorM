import TestState from "./../test-state";
import DigitReducer from "./../../engine/reducers/digit-reducer";
import createAction from "./../../engine/action-creator";
import Integer from "./../../integer/integer";

import assert from "assert";

describe("Digit reducer", function () {
    describe("Actions", function () {
        it("add initial digit to first argument", function () {
            var actualState = new TestState();

            var expectedState = { ...new TestState(),
                firstArgument: new Integer("4")
            };

            assert.deepEqual(DigitReducer(actualState, createAction("addDigit")(4)), expectedState);
            assert.equal(actualState.firstArgument.isZero, true, "mutation detected");
        });

        it("add second digit to first argument", function () {
            var actualState = { ...new TestState(),
                firstArgument: new Integer("4")
            };

            var expectedState = { ...new TestState(),
                firstArgument: new Integer("42")
            };

            assert.deepEqual(DigitReducer(actualState, createAction("addDigit")(2)), expectedState);
            assert.deepEqual(actualState.firstArgument, new Integer("4"), "mutation detected");
        });

        it("add initial digit to second argument", function () {
            var actualState = { ...new TestState(),
                firstArgument: new Integer("42"),
                operator: "add"
            };

            var expectedState = { ...new TestState(),
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("2")
            };

            assert.deepEqual(DigitReducer(actualState, createAction("addDigit")(2)), expectedState);
            assert.equal(actualState.secondArgument, null, "mutation detected");
        });

        it("add second digit to second argument", function () {
            var actualState = { ...new TestState(),
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("2")
            };

            var expectedState = { ...new TestState(),
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("21")
            };

            assert.deepEqual(DigitReducer(actualState, createAction("addDigit")(1)), expectedState);
            assert.deepEqual(actualState.secondArgument, new Integer("2"), "mutation detected");
        });

        it("add third digit to positive first argument", function () {
            var actualState = { ...new TestState(),
                firstArgument: new Integer("42")
            };

            var expectedState = { ...new TestState(),
                firstArgument: new Integer("421")
            };

            assert.deepEqual(DigitReducer(actualState, createAction("addDigit")(1)), expectedState);
            assert.deepEqual(actualState.firstArgument, new Integer("42"), "mutation detected");
        });

        it("add third digit to negative first argument", function () {
            var actualState = { ...new TestState(),
                firstArgument: new Integer("-42")
            };

            var expectedState = { ...new TestState(),
                firstArgument: new Integer("-421")
            };

            assert.deepEqual(DigitReducer(actualState, createAction("addDigit")(1)), expectedState);
            assert.deepEqual(actualState.firstArgument, new Integer("-42"), "mutation detected");
        });

        it("change sign of first argument", function () {
            var actualState = { ...new TestState(),
                firstArgument: new Integer("42")
            };

            var expectedState = { ...new TestState(),
                firstArgument: new Integer("-42")
            };

            assert.deepEqual(DigitReducer(actualState, createAction("changeSign")()), expectedState);
            assert.equal(actualState.firstArgument.isNegative, false, "mutation detected");
        });

        it("change sign of first argument(zero)", function () {
            var actualState = { ...new TestState()
            };

            var expectedState = { ...new TestState()
            };

            assert.deepEqual(DigitReducer(actualState, createAction("changeSign")()), expectedState);
        });

        it("change sign of second argument", function () {
            var actualState = { ...new TestState(),
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("21")
            };

            var expectedState = { ...new TestState(),
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("-21")
            };

            assert.deepEqual(DigitReducer(actualState, createAction("changeSign")()), expectedState);
            assert.equal(actualState.secondArgument.isNegative, false, "mutation detected");
        });

        it("change sign of second argument(zero)", function () {
            var actualState = { ...new TestState(),
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer()
            };

            var expectedState = { ...new TestState(),
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer()
            };

            assert.deepEqual(DigitReducer(actualState, createAction("changeSign")()), expectedState);
        });

        it("change sign of second argument(null)", function () {
            var actualState = { ...new TestState(),
                firstArgument: new Integer("42"),
                operator: "add"
            };

            var expectedState = { ...new TestState(),
                firstArgument: new Integer("42"),
                operator: "add"
            };

            assert.deepEqual(DigitReducer(actualState, createAction("changeSign")()), expectedState);
            assert.equal(actualState.secondArgument, null, "mutation detected");
        });

        it("change sign of result", function () {
            var actualState = { ...new TestState(),
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("21"),
                result: new Integer("63")
            };

            var expectedState = { ...new TestState(),
                firstArgument: new Integer("-63"),
                operator: "",
                secondArgument: null,
                result: null
            };

            assert.deepEqual(DigitReducer(actualState, createAction("changeSign")()), expectedState);
            assert.deepEqual(actualState.firstArgument, new Integer("42"), "mutation detected");
            assert.equal(actualState.operator, "add", "mutation detected");
            assert.deepEqual(actualState.secondArgument, new Integer("21"), "mutation detected");
            assert.deepEqual(actualState.result, new Integer("63"), "mutation detected");
        });

        it("action for different reducer", function () {
            var actualState = new TestState();

            var expectedState = new TestState();

            assert.deepEqual(DigitReducer(actualState, createAction("TestAction")()), expectedState);
        });
    });
});