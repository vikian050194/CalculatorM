import { ACTIONS } from "../../constants";

const navigationReducer = (previousState, action) => {
    switch (action.type) {
        case ACTIONS.MOVE_LEFT:
            if (previousState.query.index !== 0) {
                return {
                    ...previousState,
                    query: { ...previousState.query, index: previousState.query.index - 1 }
                };
            }

            return previousState;
        case ACTIONS.MOVE_RIGHT:
            if (previousState.query.index !== previousState.query.items.length) {
                return {
                    ...previousState,
                    query: { ...previousState.query, index: previousState.query.index + 1 }
                };
            }

            return previousState;
        default:
            return previousState;
    }
};

export { navigationReducer };