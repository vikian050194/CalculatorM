function MemoryReducer(previousState, action) {
    switch (action.type) {
        case 'addToMemory':
            if (previousState.secondArgument === null) {
                return $.extend({}, previousState, {memory: previousState.firstArgument});
			} else {
                return $.extend({}, previousState, {memory: previousState.secondArgument});
			}
            break;

        case 'getFromMemory':
            if (previousState.memory === null) {
                return previousState;
			}
            if (previousState.secondArgument === null) {
                return $.extend({}, previousState, {firstArgument: previousState.memory});
			} else {
                return $.extend({}, previousState, {secondArgument: previousState.memory});
			}
            break;

        case 'clearMemory':
            return $.extend({}, previousState, {memory: null});
            break;

        default:
            return previousState;
    }
}

module.exports = MemoryReducer;