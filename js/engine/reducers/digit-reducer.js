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
                return $.extend({}, previousState, {firstArgument: previousState.result.changeSign(), result: null});
            }
            if (previousState.operator === '') {
                return $.extend({}, previousState, {firstArgument: previousState.firstArgument.changeSign()});
            } else {
                if (previousState.secondArgument === null) {
                    return previousState;
                }
                return $.extend({}, previousState, {secondArgument: previousState.secondArgument.changeSign()});
            }
            break;

        default:
            return previousState;
    }
}

module.exports = DigitReducer;