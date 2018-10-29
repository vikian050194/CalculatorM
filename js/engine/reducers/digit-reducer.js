import Integer from "./../../integer/integer";

function DigitReducer(previousState, action) {
    const result = { ...previousState
    };

    switch (action.type) {
        case "addDigit":
            if (previousState.operator === "") {
                previousState.firstArgument.push(action.value);
                return { ...previousState,
                    firstArgument: previousState.firstArgument
                };

            } else {
                if (previousState.secondArgument === null) {
                    previousState.secondArgument = new Integer("0");
                }
                previousState.secondArgument.push(action.value);
                return { ...previousState,
                    secondArgument: previousState.secondArgument
                };
            }
        case "changeSign":
            if (previousState.result !== null) {
                previousState.result.changeSign();
                return { ...previousState,
                    firstArgument: previousState.result,
                    result: null,
                    secondArgument: null,
                    operator: ""
                };
            }
            if (previousState.operator === "") {
                result.firstArgument = result.firstArgument.clone();
                result.firstArgument.changeSign();

                return result;
            } else {
                if (previousState.secondArgument === null) {
                    return previousState;
                }
                previousState.secondArgument.changeSign();
                return { ...previousState,
                    secondArgument: previousState.secondArgument
                };
            }
        default:
            return previousState;
    }
}

export default DigitReducer;