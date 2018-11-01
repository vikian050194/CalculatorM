function MemoryReducer(previousState, action) {
    switch (action.type) {
        case "addToMemory":
            if (previousState.secondArgument === null) {
                return { ...previousState,
                    memory: previousState.firstArgument.clone()
                };
            } else {
                return { ...previousState,
                    memory: previousState.secondArgument.clone()
                };
            }
        case "getFromMemory":
            if (previousState.memory === null) {
                return previousState;
            }
            if (previousState.secondArgument === null) {
                return { ...previousState,
                    firstArgument: previousState.memory.clone()
                };
            } else {
                return { ...previousState,
                    secondArgument: previousState.memory.clone()
                };
            }
        case "clearMemory":
            return { ...previousState,
                memory: null
            };
        default:
            return previousState;
    }
}

export default MemoryReducer;