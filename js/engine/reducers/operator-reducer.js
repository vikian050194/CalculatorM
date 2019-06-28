import Integer from "./../../integer";

const operatorReducer = (previousState, action) => {
    switch (action.type) {
        case "addOperator":
            if (previousState.result !== null && !(previousState.result.isZero)) {
                previousState.firstArgument = previousState.result;
                previousState.result = null;
                previousState.secondArgument = null;
            }

            // if (action.value === "mod") {
            //     previousState.module = new Integer("0");
            // }

            return { ...previousState,
                operator: action.value
            };
        case "precalculate":
            if (previousState.secondArgument !== null) {
                switch (previousState.operator) {
                    case "add":
                        previousState.result = Integer.add(previousState.firstArgument, previousState.secondArgument);
                        break;
                    case "sub":
                        previousState.result = Integer.sub(previousState.firstArgument, previousState.secondArgument);
                        break;
                    case "mul":
                        previousState.result = Integer.mul(previousState.firstArgument, previousState.secondArgument);
                        break;
                    case "div":
                        previousState.result = Integer.div(previousState.firstArgument, previousState.secondArgument);
                        break;
                    case "pow":
                        previousState.result = Integer.pow(previousState.firstArgument, previousState.secondArgument);
                        break;
                    case "mod":
                        if (previousState.secondArgument !== null && !previousState.secondArgument.isZero) {
                            previousState.result = Integer.mod(previousState.firstArgument, previousState.secondArgument);
                            previousState.module = previousState.secondArgument;
                        }
                        if (previousState.secondArgument.isZero) {
                            previousState.module = new Integer("0");
                        }
                        break;
                }

                if (!previousState.module.isZero) {
                    previousState.result = Integer.mod(previousState.result, previousState.module);

                    if (previousState.result.isNegative && previousState.positiveCookie) {
                        previousState.result = Integer.add(previousState.result, previousState.module);
                    }
                }
            }
            return previousState;
        case "calculate":
            if (previousState.secondArgument === null && (previousState.module === null || previousState.module.isZero)) {
                return previousState;
            }

            // eslint-disable-next-line no-case-declarations
            let result = previousState.result;

            if (previousState.result === null) {
                result = previousState.firstArgument;
            }

            if (!previousState.module.isZero) {
                result = Integer.mod(result, previousState.module);
                if (result.isNegative && previousState.positiveCookie) {
                    result = Integer.add(result, previousState.module);
                }
            }

            return { ...previousState,
                result: result
            };
        default:
            return previousState;
    }
};

export { operatorReducer };