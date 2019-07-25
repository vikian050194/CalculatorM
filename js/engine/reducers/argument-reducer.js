import { ACTIONS, TOKEN_TYPE } from "./../../constants";

const addDigit = (query, digit) => {
    const index = query.index === null ? 0 : query.type === TOKEN_TYPE.OPERATOR ? query.index + 1 : query.index;
    const subindex = query.subindex === null ? 0 : query.subindex + 1;
    const type = query.type === TOKEN_TYPE.OPERATOR ? TOKEN_TYPE.ARGUMENT : query.type;
    const items = query.index === null ?
        [`${digit}`] : query.type === TOKEN_TYPE.OPERATOR ? [...query.items, `${digit}`] : query.items.map((item, i) => i === query.index ? `${item.slice(0, query.subindex + 1)}${digit}${item.slice(query.subindex + 1)}` : item);

    return {
        index,
        subindex,
        items,
        type
    };
};

const argumentReducer = (previousState, action) => {
    const result = {
        ...previousState
    };

    switch (action.type) {
        case ACTIONS.ADD_DIGIT:
            return {
                ...previousState,
                query: addDigit(previousState.query, action.value)
            };
        case ACTIONS.CHANGE_SIGN:
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

export { argumentReducer };