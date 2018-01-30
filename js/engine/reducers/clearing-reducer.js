var Integer = require('./../../integer/integer');

function ClearingReducer(previousState, action) {
    switch (action.type) {
        case 'clear':
            return {
                firstArgument: new Integer('0'),
				secondArgument: null,
				operator: '',
				module: new Integer('0'),
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
                    firstArgument: previousState.result.pop(),
                    result: null
                });
            }
            if (previousState.operator !== '' && previousState.secondArgument === null) {
                return $.extend({}, previousState, {operator: ''});
            }
            if (previousState.secondArgument === null) {
                return $.extend({}, previousState, {firstArgument: (previousState.firstArgument).pop() });
            } else {
                return $.extend({}, previousState, {secondArgument: (previousState.secondArgument).pop() });
            }
            break;

        default:
            return previousState;
    }
}

module.exports = ClearingReducer;