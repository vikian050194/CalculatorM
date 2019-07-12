import initialState from "../initial-state";

const clearingReducer = (previousState, action) => {
    const result = {
        ...previousState
    };

    switch (action.type) {
        case "clear":
            return {
                ...initialState,
                settings: previousState.settings
            };

        case "deleteDigit":
            if (result.result !== null && result.firstArgument.isZero) {
                result.firstArgument = result.result.clone();
                result.firstArgument.pop();
                result.result = null;
                return result;
            }

            if (previousState.operator !== "" && previousState.secondArgument === null) {
                return {
                    ...previousState,
                    operator: ""
                };
            }

            if (result.secondArgument === null) {
                result.firstArgument = result.firstArgument.clone();
                result.firstArgument.pop();
                return result;
            } else {
                result.secondArgument = result.secondArgument.clone();
                result.secondArgument.pop();
                return result;
            }
        default:
            return previousState;
    }
};

export { clearingReducer };