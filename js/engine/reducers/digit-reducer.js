import Integer from "./../../integer";

const digitReducer = (previousState, action) => {
    const result = {
        ...previousState
    };

    switch (action.type) {
        case "addDigit":
            if (result.operator === null) {
                result.firstArgument = result.firstArgument.clone();
                result.firstArgument.push(action.value);

                return result;
            } else {
                if (result.secondArgument === null) {
                    result.secondArgument = new Integer();
                } else {
                    result.secondArgument = result.secondArgument.clone();
                }

                result.secondArgument.push(action.value);
                return result;
            }
        case "changeSign":
            if (result.result !== null) {
                result.result = result.result.clone();
                result.result.changeSign();

                result.firstArgument = result.result;
                result.result = null;
                result.secondArgument = null;
                result.operator = null;

                return result;
            }

            if (result.operator === null) {
                result.firstArgument = result.firstArgument.clone();
                result.firstArgument.changeSign();

                return result;
            } else {
                if (result.secondArgument === null) {
                    return result;
                }

                result.secondArgument = result.secondArgument.clone();
                result.secondArgument.changeSign();

                return result;
            }
        default:
            return previousState;
    }
};

export { digitReducer };