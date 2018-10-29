import Integer from "./../../integer/integer";

function MemoryReducer(previousState, action) {
    switch (action.type) {
        case "addToMemory":
            if (previousState.secondArgument === null) {
                return { ...previousState,
                    memory: new Integer(previousState.firstArgument.toString())
                };
            } else {
                return { ...previousState,
                    memory: new Integer(previousState.secondArgument.toString())
                };
            }
        case "getFromMemory":
            if (previousState.memory === null) {
                return previousState;
            }
            if (previousState.secondArgument === null) {
                return { ...previousState,
                    firstArgument: new Integer(previousState.memory.toString())
                };
            } else {
                return { ...previousState,
                    secondArgument: new Integer(previousState.memory.toString())
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