import QueryBuilder from "./../query-builder";
import Integer from "./../../integer/integer";

function QueryReducer(previousState, action) {
    let queryState = null;

    switch (action.type) {
        case "addOperator":
            queryState = {
                ...previousState,
                secondArgument: null
            };

            if (previousState.secondArgument !== null || previousState.result !== null) {
                return {
                    ...previousState,
                    firstArgument: new Integer("0"),
                    operator: "",
                    secondArgument: null,
                    result: null,
                    query: "ERROR1"
                };
            }

            return {
                ...previousState,
                query: new QueryBuilder().getQuery(queryState)
            };
        case "calculate":
            queryState = {
                ...previousState
            };

            if (queryState.operator === "mod") {
                queryState.operator = "";
                queryState.secondArgument = null;
            }
            
            var query = new QueryBuilder().getQuery(queryState);

            if (!previousState.moduleCookie) {
                previousState.module = new Integer();
            }

            return {
                ...previousState,
                firstArgument: new Integer(),
                operator: "",
                secondArgument: null,
                query: query
            };
        case "addDigit":
            previousState.result = null;

            return {
                ...previousState,
                query: new QueryBuilder().getQuery(previousState)
            };
        case "clear":
        case "deleteDigit":
        case "addToMemory":
        case "getFromMemory":
        case "clearMemory":
        case "changeSign":
            return {
                ...previousState,
                query: new QueryBuilder().getQuery(previousState)
            };
        default:
            return previousState;
    }
}

export default QueryReducer;