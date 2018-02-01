Integer = require('./../../integer/integer');

function MemoryReducer(previousState, action) {
    switch (action.type) {
        case 'addToMemory':
            if (previousState.secondArgument === null) {
                return $.extend({}, previousState, {memory: new Integer(previousState.firstArgument.toString())});
			} else {
                return $.extend({}, previousState, {memory: new Integer(previousState.secondArgument.toString())});
			}
            break;

        case 'getFromMemory':
            if (previousState.memory === null) {
                return previousState;
			}
            if (previousState.secondArgument === null) {
                return $.extend({}, previousState, {firstArgument: new Integer(previousState.memory.toString())});
			} else {
                return $.extend({}, previousState, {secondArgument:new Integer(previousState.memory.toString())});
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