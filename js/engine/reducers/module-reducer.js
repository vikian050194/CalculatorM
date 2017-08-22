function ModuleReducer(previousState, action) {
    switch (action.type) {
        case 'setToZero':
            if (previousState.secondArgument === null)
                return Object.assign(previousState, {firstArgument: 0});
            else
                return Object.assign(previousState, {secondArgument: 0});
            break;

        case 'setModule':
            return Object.assign(previousState, {module: action.value});
            break;

        default:
            return previousState;
    }
}