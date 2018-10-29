import Integer from "./../../integer/integer";

function ClearingReducer(previousState, action) {
    switch (action.type) {
        case "clear":
            return {
                firstArgument: new Integer("0"),
                secondArgument: null,
                operator: "",
                module: new Integer("0"),
                memory: previousState.memory,
                query: "",
                result: null,
                positiveCookie: previousState.positiveCookie,
                moduleCookie: previousState.moduleCookie
            };

        case "deleteDigit":
            if (previousState.result !== null && previousState.firstArgument === 0) {
                return { ...previousState,
                    firstArgument: previousState.result.pop(),
                    result: null
                };
            }
            if (previousState.operator !== "" && previousState.secondArgument === null) {
                return { ...previousState,
                    operator: ""
                };
            }
            if (previousState.secondArgument === null) {
                previousState.firstArgument.pop();
                return previousState; 
            } else {
                previousState.secondArgument.pop();
                return previousState; 
            }
        default:
            return previousState;
    }
}

export default ClearingReducer;