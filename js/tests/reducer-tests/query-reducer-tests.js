// import TestState from "./../test-state";
// import QueryReducer from "./../../engine/reducers/query-reducer";
// import OperatorReducer from "./../../engine/reducers/operator-reducer";
// import QueryBuilder from "./../../engine/query-builder";
// import createAction from "./../../engine/action-creator";
// import Integer from "./../../integer";

// import assert from "assert";

// describe("Query reducer", function () {

//     var initialState = new TestState();

//     it("query after action \"addDigit\"", function () {
//         var actualState = { ...initialState,
//             firstArgument: new Integer("1")
//         };

//         var expectedState = { ...initialState,
//             firstArgument: new Integer("1")
//         };
//         expectedState.query = new QueryBuilder().getQuery(expectedState);

//         assert.deepEqual(QueryReducer(actualState, createAction("addDigit")(1)), expectedState);
//     });

//     it("query after action \"addOperator\"", function () {
//         var actualState = { ...initialState,
//             firstArgument: new Integer("1"),
//             operator: "add"
//         };

//         var expectedState = { ...initialState,
//             firstArgument: new Integer("1"),
//             operator: "add",
//             secondArgument: null
//         };
//         expectedState.query = new QueryBuilder().getQuery(expectedState);

//         assert.deepEqual(QueryReducer(actualState, createAction("addOperator")("add")), expectedState);
//     });

//     it("query after action \"calculate\"", function () {
//         var actualState = { ...initialState,
//             firstArgument: new Integer("1"),
//             operator: "add",
//             secondArgument: new Integer("2")
//         };
//         actualState = OperatorReducer(actualState, createAction("precalculate")());

//         var queryState = { ...initialState,
//             firstArgument: new Integer("1"),
//             operator: "add",
//             secondArgument: new Integer("2"),
//             result: new Integer("3")
//         };
//         var expectedState = { ...initialState,
//             result: new Integer("3"),
//             query: new QueryBuilder().getQuery(queryState)
//         };

//         assert.deepEqual(QueryReducer(actualState, createAction("calculate")()), expectedState);
//     });

//     it("query after action \"calculate\" with first argument", function () {
//         var actualState = { ...initialState,
//             firstArgument: new Integer("63")
//         };
//         actualState = OperatorReducer(actualState, createAction("calculate")());

//         var queryState = { ...initialState,
//             firstArgument: new Integer("63")
//         };
//         var expectedState = { ...initialState,
//             firstArgument: new Integer("0"),
//             query: new QueryBuilder().getQuery(queryState)
//         };

//         assert.deepEqual(QueryReducer(actualState, createAction("calculate")()), expectedState);
//     });

//     it("query after action \"calculate\" with first argument and module", function () {
//         var actualState = { ...initialState,
//             firstArgument: new Integer("63"),
//             module: new Integer("20")
//         };
//         actualState = OperatorReducer(actualState, createAction("calculate")());

//         var queryState = { ...initialState,
//             firstArgument: new Integer("63"),
//             result: new Integer("3"),
//             module: new Integer("20")
//         };
//         var expectedState = { ...initialState,
//             firstArgument: new Integer("0"),
//             result: new Integer("3"),
//             module: new Integer("20"),
//             query: new QueryBuilder().getQuery(queryState)
//         };

//         assert.deepEqual(QueryReducer(actualState, createAction("calculate")()), expectedState);
//     });

//     // it("query after action "calculate" with NaN result", function () {
//     //     var actualState = {...initialState,
//     //         firstArgument: new Integer("63"),
//     //         secondArgument: new Integer("21"),
//     //         operator: "add",
//     //         result: null
//     //     };
//     //     actualState = OperatorReducer(actualState, createAction("calculate")());

//     //     var expectedState = {...initialState,
//     //         query: "ERROR"
//     //     };

//     //     assert.deepEqual(QueryReducer(actualState, createAction("calculate")()), expectedState);
//     // });

//     // it("query after action "addOperator" with NaN result", function () {
//     //     var actualState = {...initialState,
//     //         firstArgument: new Integer("63"),
//     //         secondArgument: new Integer("21"),
//     //         operator: "add",
//     //         result: null
//     //     };
//     //     actualState = OperatorReducer(actualState, createAction("addOperator")("add"));

//     //     var expectedState = {...initialState,
//     //         query: "ERROR"
//     //     };

//     //     assert.deepEqual(QueryReducer(actualState, createAction("addOperator")("add")), expectedState);
//     // });

//     it("query after adding module with previous module", function () {
//         var actualState = { ...initialState,
//             firstArgument: new Integer("63"),
//             module: new Integer("6"),
//             operator: "mod"
//         };
//         actualState = OperatorReducer(actualState, createAction("addOperator")("mod"));

//         var expectedState = { ...initialState,
//             firstArgument: new Integer("63"),
//             operator: "mod",
//             module: new Integer("0"),
//             query: "63 mod _"
//         };

//         assert.deepEqual(QueryReducer(actualState, createAction("addOperator")("mod")), expectedState);
//     });
// });