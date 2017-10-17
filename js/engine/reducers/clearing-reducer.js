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
				result: null,
				positiveCookie: previousState.positiveCookie,
				moduleCookie: previousState.moduleCookie
            };
            break;

        case 'deleteDigit':
            if (previousState.result !== null && previousState.firstArgument === 0) {
                return $.extend({}, previousState, {
                    firstArgument: (previousState.result - previousState.result % 10) / 10,
                    result: null
                });
            }
            if (previousState.operator !== '' && previousState.secondArgument === null) {
                return previousState;
            }
            if (previousState.secondArgument === null) {
                return $.extend({}, previousState, {firstArgument: (previousState.firstArgument - previousState.firstArgument % 10) / 10});
            } else {
                return $.extend({}, previousState, {secondArgument: (previousState.secondArgument - previousState.secondArgument % 10) / 10});
            }
            break;

        default:
            return previousState;
    }
}

module.exports = ClearingReducer;