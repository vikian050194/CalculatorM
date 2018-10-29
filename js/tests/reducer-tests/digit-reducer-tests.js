import TestState from "./../test-state";
import DigitReducer from "./../../engine/reducers/digit-reducer";
import OperatorReducer from "./../../engine/reducers/operator-reducer";
import QueryReducer from "./../../engine/reducers/query-reducer";
import createAction from "./../../engine/action-creator";
import Integer from "./../../integer/integer";

import assert from "assert";

var initialState = new TestState();

describe("Digit reducer", function () {
    describe("Actions", function(){
        it("action \"addDigit\"", function () {
            var actualState = { ...initialState
            };
    
            var expectedState = { ...initialState,
                firstArgument: new Integer("4")
            };
    
            assert.deepEqual(DigitReducer(actualState, createAction("addDigit")(4)), expectedState);
        });
    
        it("few actions \"addDigit\"", function () {
            var actualState = { ...initialState,
                firstArgument: new Integer("4")
            };
    
            var expectedState = { ...initialState,
                firstArgument: new Integer("42")
            };
    
            assert.deepEqual(DigitReducer(actualState, createAction("addDigit")(2)), expectedState);
        });
    
        it("add digit to secondArgument", function () {
            var actualState = { ...initialState,
                firstArgument: new Integer("42"),
                operator: "add"
            };
    
            var expectedState = { ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("2")
            };
    
            assert.deepEqual(DigitReducer(actualState, createAction("addDigit")(2)), expectedState);
        });
    
        it("add few digits to secondArgument", function () {
            var actualState = { ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("2")
            };
    
            var expectedState = { ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("21")
            };
    
            assert.deepEqual(DigitReducer(actualState, createAction("addDigit")(1)), expectedState);
        });
    
        it("add digit to positive value", function () {
            var actualState = { ...initialState,
                firstArgument: new Integer("42")
            };
    
            var expectedState = { ...initialState,
                firstArgument: new Integer("421")
            };
    
            assert.deepEqual(DigitReducer(actualState, createAction("addDigit")(1)), expectedState);
        });
    
        it("add digit to negative value", function () {
            var actualState = { ...initialState,
                firstArgument: new Integer("-42")
            };
    
            var expectedState = { ...initialState,
                firstArgument: new Integer("-421")
            };
    
            assert.deepEqual(DigitReducer(actualState, createAction("addDigit")(1)), expectedState);
        });
    
        it("add digit to zero", function () {
            var actualState = { ...initialState
            };
    
            var expectedState = { ...initialState,
                firstArgument: new Integer("1")
            };
    
            assert.deepEqual(DigitReducer(actualState, createAction("addDigit")(1)), expectedState);
        });
    
        it("change sign to firstArgument", function () {
            var actualState = { ...initialState,
                firstArgument: new Integer("42")
            };
    
            var expectedState = { ...initialState,
                firstArgument: new Integer("-42")
            };
    
            assert.deepEqual(DigitReducer(actualState, createAction("changeSign")()), expectedState);
        });
    
        it("change sign to firstArgument with zero", function () {
            var actualState = { ...initialState
            };
    
            var expectedState = { ...initialState
            };
    
            assert.deepEqual(DigitReducer(actualState, createAction("changeSign")()), expectedState);
        });
    
        it("change sign to secondArgument", function () {
            var actualState = { ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("21")
            };
    
            var expectedState = { ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("-21")
            };
    
            assert.deepEqual(DigitReducer(actualState, createAction("changeSign")()), expectedState);
        });
    
        it("change sign to secondArgument with zero", function () {
            var actualState = { ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer()
            };
    
            var expectedState = { ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer()
            };
    
            assert.deepEqual(DigitReducer(actualState, createAction("changeSign")()), expectedState);
        });
    
        it("change sign to result", function () {
            var actualState = { ...initialState,
                firstArgument: new Integer("42"),
                operator: "add",
                secondArgument: new Integer("21"),
                result: new Integer("63")
            };
    
            var expectedState = { ...initialState,
                firstArgument: new Integer("-63"),
                operator: "",
                secondArgument: null,
                result: null
            };
    
            actualState = DigitReducer(actualState, createAction("changeSign")());
            assert.deepEqual(actualState, expectedState);
        });
    });

    describe("Immutability", function(){
        it("action \"changeSign\" of first argument", function () {
            const initialTestState = { ...initialState,
                firstArgument: new Integer("4")
            };
    
            DigitReducer(initialTestState, createAction("changeSign")());

            assert.equal(initialTestState.firstArgument.isNegative, false);
        });
    });
});