import { TOKEN_TYPE, ACTIONS } from "./../../constants";

const operatorReducer = (previousState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_OPERATOR:
            if (previousState.query.type === TOKEN_TYPE.OPERATOR) {
                return {
                    ...previousState,
                    query: { ...previousState.query, items: previousState.query.items.map((e, i) => previousState.query.index === i ? action.value : e) }
                };
            } else {
                return {
                    ...previousState,
                    query: { ...previousState.query, items: [...previousState.query.items, action.value], type: TOKEN_TYPE.OPERATOR, index: previousState.query.index + 1 }
                };
            }
        default:
            return previousState;
    }
};

export { operatorReducer };