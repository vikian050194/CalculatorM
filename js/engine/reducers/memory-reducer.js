function MemoryReducer(previousState, action) {
    switch (action.type) {
        case 'addToMemory':
            if (previousState.secondArgument === null)
                return Object.assign(previousState, {memory: previousState.firstArgument, firstArgument: 0});
            else
                return Object.assign(previousState, {memory: previousState.secondArgument, secondArgument: 0});
            break;

        case 'getFromMemory':
            if (previousState.memory === null)
                return previousState;
            if (previousState.secondArgument === null)
                return Object.assign(previousState, {firstArgument: previousState.memory});
            else
                return Object.assign(previousState, {secondArgument: previousState.memory});
            break;

        case 'clearMemory':
            return Object.assign(previousState, {memory: null});
            break;

        default:
            return previousState;
    }
}