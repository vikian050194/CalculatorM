function ClearingReducer(previousState, action) {
    switch (action.type) {
        case 'clear':
            return {
                firstArgument: 0,
                secondArgument: null,
                operator: '',
                module: 0,
                memory: null,
                query: '',
                result: null
            };
            break;

        case 'deleteDigit':
            if (previousState.secondArgument === null)
                return Object.assign(previousState, {firstArgument: (previousState.firstArgument - previousState.firstArgument % 10) / 10});
            else
                return Object.assign(previousState, {secondArgument: (previousState.secondArgument - previousState.secondArgument % 10) / 10});
            break;

        default:
            return previousState;
    }
}