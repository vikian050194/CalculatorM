import initialState from "./../../engine/initial-state";
import { argumentReducer } from "../../engine/reducers";
import createAction from "../../engine/action-creator";
import { ACTIONS, TOKEN_TYPE } from "../../constants";
// import Integer from "../../integer";

import assert from "assert";

describe("Argument reducer", function () {
    describe(`Action: ${ACTIONS.ADD_DIGIT}`, function () {
        it("add first digit, query is empty", function () {
            var actualState = initialState;

            var expectedState = {
                ...initialState,
                query: {
                    ...initialState.query,
                    items: ["4"],
                    index: 0,
                    subindex: 0
                }
            };

            assert.deepStrictEqual(argumentReducer(actualState, createAction(ACTIONS.ADD_DIGIT)(4)), expectedState);
            assert.equal(actualState.query.items.length, 0, "mutation detected");
        });

        it("add second digit to first argument", function () {
            var actualState = {
                ...initialState,
                query: {
                    ...initialState.query,
                    items: ["4"],
                    index: 0,
                    subindex: 0
                }
            };

            var expectedState = {
                ...initialState,
                query: {
                    ...initialState.query,
                    items: ["42"],
                    index: 0,
                    subindex: 1
                }
            };

            assert.deepStrictEqual(argumentReducer(actualState, createAction(ACTIONS.ADD_DIGIT)(2)), expectedState);
            assert.equal(actualState.query.items[0].length, 1, "mutation detected");
        });

        it("insert third digit to first argument", function () {
            var actualState = {
                ...initialState,
                query: {
                    ...initialState.query,
                    items: ["42"],
                    index: 0,
                    subindex: 0
                }
            };

            var expectedState = {
                ...initialState,
                query: {
                    ...initialState.query,
                    items: ["402"],
                    index: 0,
                    subindex: 1
                }
            };

            assert.deepStrictEqual(argumentReducer(actualState, createAction(ACTIONS.ADD_DIGIT)(0)), expectedState);
            assert.equal(actualState.query.items[0].length, 2, "mutation detected");
        });

        it("add first digit of second argument", function () {
            var actualState = {
                ...initialState,
                query: {
                    items: ["1", "add"],
                    index: 1,
                    subindex: null,
                    type: TOKEN_TYPE.OPERATOR
                }
            };

            var expectedState = {
                ...initialState,
                query: {
                    items: ["1", "add", "2"],
                    index: 2,
                    subindex: 0,
                    type: TOKEN_TYPE.ARGUMENT
                }
            };

            assert.deepStrictEqual(argumentReducer(actualState, createAction(ACTIONS.ADD_DIGIT)(2)), expectedState);
            assert.equal(actualState.query.items.length, 2, "mutation detected");
        });

        /*it("add second digit to second argument", function () {
            var actualState = {
                ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("2")
            };

            var expectedState = {
                ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("21")
            };

            assert.deepStrictEqual(argumentReducer(actualState, createAction("addDigit")(1)), expectedState);
            assert.deepStrictEqual(actualState.secondArgument, new Integer("2"), "mutation detected");
        });

        it("add third digit to positive first argument", function () {
            var actualState = {
                ...initialState,
                firstArgument: new Integer("42")
            };

            var expectedState = {
                ...initialState,
                firstArgument: new Integer("421")
            };

            assert.deepStrictEqual(argumentReducer(actualState, createAction("addDigit")(1)), expectedState);
            assert.deepStrictEqual(actualState.firstArgument, new Integer("42"), "mutation detected");
        });

        it("add third digit to negative first argument", function () {
            var actualState = {
                ...initialState,
                firstArgument: new Integer("-42")
            };

            var expectedState = {
                ...initialState,
                firstArgument: new Integer("-421")
            };

            assert.deepStrictEqual(argumentReducer(actualState, createAction("addDigit")(1)), expectedState);
            assert.deepStrictEqual(actualState.firstArgument, new Integer("-42"), "mutation detected");
        });

        it("change sign of first argument", function () {
            var actualState = {
                ...initialState,
                firstArgument: new Integer("42")
            };

            var expectedState = {
                ...initialState,
                firstArgument: new Integer("-42")
            };

            assert.deepStrictEqual(argumentReducer(actualState, createAction("changeSign")()), expectedState);
            assert.equal(actualState.firstArgument.isNegative, false, "mutation detected");
        });

        it("change sign of first argument(zero)", function () {
            var actualState = {
                ...initialState
            };

            var expectedState = {
                ...initialState
            };

            assert.deepStrictEqual(argumentReducer(actualState, createAction("changeSign")()), expectedState);
        });

        it("change sign of second argument", function () {
            var actualState = {
                ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("21")
            };

            var expectedState = {
                ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("-21")
            };

            assert.deepStrictEqual(argumentReducer(actualState, createAction("changeSign")()), expectedState);
            assert.equal(actualState.secondArgument.isNegative, false, "mutation detected");
        });

        it("change sign of second argument(zero)", function () {
            var actualState = {
                ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer()
            };

            var expectedState = {
                ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer()
            };

            assert.deepStrictEqual(argumentReducer(actualState, createAction("changeSign")()), expectedState);
        });

        it("change sign of second argument(null)", function () {
            var actualState = {
                ...initialState,
                firstArgument: new Integer("42"),
                operator: "add"
            };

            var expectedState = {
                ...initialState,
                firstArgument: new Integer("42"),
                operator: "add"
            };

            assert.deepStrictEqual(argumentReducer(actualState, createAction("changeSign")()), expectedState);
            assert.equal(actualState.secondArgument, null, "mutation detected");
        });

        it("change sign of result", function () {
            var actualState = {
                ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("21"),
                result: new Integer("63")
            };

            var expectedState = {
                ...initialState,
                firstArgument: new Integer("-63"),
                operator: "",
                secondArgument: null,
                result: null
            };

            assert.deepStrictEqual(argumentReducer(actualState, createAction("changeSign")()), expectedState);
            assert.deepStrictEqual(actualState.firstArgument, new Integer("42"), "mutation detected");
            assert.equal(actualState.operator, "add", "mutation detected");
            assert.deepStrictEqual(actualState.secondArgument, new Integer("21"), "mutation detected");
            assert.deepStrictEqual(actualState.result, new Integer("63"), "mutation detected");
        });

        it("action for different reducer", function () {
            var actualState = initialState;

            var expectedState = initialState;

            assert.deepStrictEqual(argumentReducer(actualState, createAction("TestAction")()), expectedState);
        });*/
    });
});