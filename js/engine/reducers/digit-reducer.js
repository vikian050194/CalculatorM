var Integer = require('./../../integer/integer');

function DigitReducer(previousState, action) {
    switch (action.type) {
        case 'addDigit':
            if (previousState.operator === '') {
                previousState.firstArgument.push(action.value);
               return $.extend({}, previousState, {firstArgument: previousState.firstArgument});

            } else {
                if (previousState.secondArgument === null) {
                    previousState.secondArgument = new Integer('0');
                }
               previousState.secondArgument.push(action.value);
               return $.extend({}, previousState, {secondArgument: previousState.secondArgument});
            }
            break;

        case 'changeSign':
            if(previousState.result !== null) {
                previousState.result.changeSign();
                return $.extend({}, previousState, {firstArgument: previousState.result, result: null, secondArgument: null});
            }
            if (previousState.operator === '') {
                previousState.firstArgument.changeSign()
                return $.extend({}, previousState, {firstArgument: previousState.firstArgument});
            } else {
                if (previousState.secondArgument === null) {
                    return previousState;
                }
                previousState.secondArgument.changeSign()
                return $.extend({}, previousState, {secondArgument: previousState.secondArgument});
            }
            break;

        default:
            return previousState;
    }
}

module.exports = DigitReducer;