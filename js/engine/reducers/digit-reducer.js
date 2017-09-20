function DigitReducer(previousState, action) {
    switch (action.type) {
        case 'addDigit':
            if (previousState.operator === '') {
                previousState.firstArgument *= 10;
                if (previousState.firstArgument >= 0) {
                    previousState.firstArgument += action.value;
                } else {
                    previousState.firstArgument -= action.value;
                }
                return $.extend({}, previousState, {firstArgument: previousState.firstArgument});
            } else {
                if (previousState.secondArgument === null) {
                    previousState.secondArgument = 0;
                }
                previousState.secondArgument *= 10;
                if (previousState.secondArgument >= 0) {
                    previousState.secondArgument += action.value;
                } else {
                    previousState.secondArgument -= action.value;
                }
                return $.extend({}, previousState, {secondArgument: previousState.secondArgument});
            }
            break;

        case 'changeSign':
            if(previousState.result !== null && previousState.firstArgument === 0) {
                return $.extend({}, previousState, {firstArgument: previousState.result * (-1), result: null});
            }
            if (previousState.operator === '') {
                return $.extend({}, previousState, {firstArgument: previousState.firstArgument * (-1)});
            } else {
                if (previousState.secondArgument === null) {
                    return previousState;
                }
                return $.extend({}, previousState, {secondArgument: previousState.secondArgument * (-1)});
            }
            break;

        default:
            return previousState;
    }
}