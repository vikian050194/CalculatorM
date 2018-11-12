import TestState from "./../test-state";
import OperatorReducer from "./../../engine/reducers/operator-reducer";
import QueryReducer from "./../../engine/reducers/query-reducer";
import createAction from "./../../engine/action-creator";
import Integer from "./../../integer/integer";

import assert from "assert";

describe("Operator reducer", function () {

    var initialState = new TestState();

    it("action \"addOperator\" with empty input", function () {
        var actualState = { ...initialState
        };

        var expectedState = { ...initialState,
            operator: "add"
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("addOperator")("add")), expectedState);
    });

    it("action \"addOperator\" without previous operator", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("42")
        };

        var expectedState = { ...initialState,
            firstArgument: new Integer("42"),
            operator: "add"
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("addOperator")("add")), expectedState);
    });

    it("several actions \"addOperator\" in a row", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("42")
        };
        actualState = OperatorReducer(actualState, createAction("addOperator")("add"));
        actualState = OperatorReducer(actualState, createAction("addOperator")("sub"));
        actualState = OperatorReducer(actualState, createAction("addOperator")("mul"));
        actualState = OperatorReducer(actualState, createAction("addOperator")("pow"));

        var expectedState = { ...initialState,
            firstArgument: new Integer("42"),
            operator: "div"
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("addOperator")("div")), expectedState);
    });

    it("action \"addOperator\" with previous operator", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("21")
        };
        actualState = OperatorReducer(actualState, createAction("precalculate")());

        var expectedState = { ...initialState,
            firstArgument: new Integer("63"),
            operator: "mul"
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("addOperator")("mul")), expectedState);
    });

    it("calculate right after \"addOperator\"", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("42"),
            operator: "div"
        };
        actualState = OperatorReducer(actualState, createAction("precalculate")());

        var expectedState = { ...initialState,
            firstArgument: new Integer("42"),
            operator: "div",
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("calculate")()), expectedState);
    });

    it("action \"calculate\" with module", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("63"),
            module: new Integer("5")
        };

        var expectedState = { ...initialState,
            firstArgument: new Integer("63"),
            result: new Integer("3"),
            module: new Integer("5")
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("calculate")()), expectedState);
    });

    it("action \"calculate\" with first argument", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("63")
        };

        var expectedState = { ...initialState,
            firstArgument: new Integer("63"),
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("calculate")()), expectedState);
    });

    it("add operator \"add\"", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("42")
        };
        actualState = OperatorReducer(actualState, createAction("addOperator")("add"));
        actualState.secondArgument = new Integer("21");

        var expectedState = { ...initialState,
            firstArgument: new Integer("42"),
            operator: "add",
            secondArgument: new Integer("21"),
            result: new Integer("63")
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("precalculate")()), expectedState);
    });

    it("add operator \"sub\"", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("42")
        };
        actualState = OperatorReducer(actualState, createAction("addOperator")("sub"));
        actualState.secondArgument = new Integer("21");

        var expectedState = { ...initialState,
            firstArgument: new Integer("42"),
            operator: "sub",
            secondArgument: new Integer("21"),
            result: new Integer("21")
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("precalculate")()), expectedState);
    });

    it("add operator \"mul\"", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("4")
        };
        actualState = OperatorReducer(actualState, createAction("addOperator")("mul"));
        actualState.secondArgument = new Integer("2");

        var expectedState = { ...initialState,
            firstArgument: new Integer("4"),
            operator: "mul",
            secondArgument: new Integer("2"),
            result: new Integer("8")
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("precalculate")()), expectedState);
    });

    it("add operator \"div\"", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("4")
        };
        actualState = OperatorReducer(actualState, createAction("addOperator")("div"));
        actualState.secondArgument = new Integer("2");

        var expectedState = { ...initialState,
            firstArgument: new Integer("4"),
            operator: "div",
            secondArgument: new Integer("2"),
            result: new Integer("2")
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("precalculate")()), expectedState);
    });

    it("add operator \"pow\"", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("4")
        };
        actualState = OperatorReducer(actualState, createAction("addOperator")("pow"));
        actualState.secondArgument = new Integer("2");

        var expectedState = { ...initialState,
            firstArgument: new Integer("4"),
            operator: "pow",
            secondArgument: new Integer("2"),
            result: new Integer("16")
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("precalculate")()), expectedState);
    });

    it("add operator \"mod\"", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("3")
        };
        actualState = OperatorReducer(actualState, createAction("addOperator")("mod"));
        actualState.secondArgument = new Integer("2");

        var expectedState = { ...initialState,
            firstArgument: new Integer("3"),
            operator: "mod",
            secondArgument: new Integer("2"),
            module: new Integer("2"),
            result: new Integer("1")
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("precalculate")()), expectedState);
    });

    it("add operator \"mod\" with zero", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("3")
        };
        actualState = OperatorReducer(actualState, createAction("addOperator")("mod"));
        actualState.secondArgument = new Integer("0");

        var expectedState = { ...initialState,
            firstArgument: new Integer("3"),
            operator: "mod",
            secondArgument: new Integer("0")
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("precalculate")()), expectedState);
    });

    it("add operator \"mod\" with zero with previous module", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("3"),
            module: new Integer("78")
        };
        actualState = OperatorReducer(actualState, createAction("addOperator")("mod"));
        actualState.secondArgument = new Integer("0");

        var expectedState = { ...initialState,
            firstArgument: new Integer("3"),
            operator: "mod",
            secondArgument: new Integer("0")
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("precalculate")()), expectedState);
    });

    it("add operator \"mod\" with positive cookie", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("-17"),
            positiveCookie: true
        };
        actualState = OperatorReducer(actualState, createAction("addOperator")("mod"));
        actualState.secondArgument = new Integer("9");

        var expectedState = { ...initialState,
            firstArgument: new Integer("-17"),
            operator: "mod",
            secondArgument: new Integer("9"),
            result: new Integer("1"),
            module: new Integer("9"),
            positiveCookie: true
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("precalculate")()), expectedState);
    });

    it("add operator with positive cookie and module", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("18"),
            secondArgument: new Integer("1"),
            operator: "add",
            module: new Integer("9"),
            positiveCookie: true
        };

        var expectedState = { ...initialState,
            firstArgument: new Integer("18"),
            operator: "add",
            secondArgument: new Integer("1"),
            result: new Integer("1"),
            module: new Integer("9"),
            positiveCookie: true
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("precalculate")()), expectedState);
    });

    it("calculate with positive cookie and module", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("-17"),
            positiveCookie: true,
            module: new Integer("9")
        };

        var expectedState = { ...initialState,
            firstArgument: new Integer("-17"),
            result: new Integer("1"),
            module: new Integer("9"),
            positiveCookie: true
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("calculate")()), expectedState);
    });

    it("calculate right after \"mod\"", function () {
        var actualState = { ...initialState
        };
        actualState = OperatorReducer(actualState, createAction("addOperator")("mod"));

        var expectedState = { ...initialState,
            firstArgument: new Integer("0"),
            operator: "mod"
        };

        assert.deepEqual(OperatorReducer(actualState, createAction("calculate")()), expectedState);
    });

    it("add operator after calculate with \"mod\"", function () {
        var actualState = { ...initialState,
            firstArgument: new Integer("78")
        };
        actualState = OperatorReducer(actualState, createAction("addOperator")("mod"));
        actualState = QueryReducer(actualState, createAction("addOperator")("mod"));
        actualState.secondArgument = new Integer("72");
        actualState = OperatorReducer(actualState, createAction("precalculate")());
        actualState = OperatorReducer(actualState, createAction("calculate")());
        actualState = QueryReducer(actualState, createAction("calculate")());
        actualState = OperatorReducer(actualState, createAction("precalculate")());
        actualState = OperatorReducer(actualState, createAction("addOperator")("add"));

        var expectedState = { ...initialState,
            firstArgument: new Integer("6"),
            operator: "add",
            module: new Integer("72"),
            query: "6 add _ mod 72"
        };

        assert.deepEqual(QueryReducer(actualState, createAction("addOperator")("add")), expectedState);
    });
});