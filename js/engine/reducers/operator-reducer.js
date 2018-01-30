var Integer = require('./../../integer/integer');

function OperatorReducer(previousState, action) {
    switch (action.type) {
        case 'addOperator':
            if (previousState.result !== null && !isNaN(previousState.result)) {
                previousState.firstArgument = previousState.result;
                previousState.result = null;
                previousState.secondArgument = null;
            }
            if (action.value === 'mod') {
                previousState.module = new Integer('0');
            }
            return $.extend({}, previousState, {operator: action.value}); 
            break;

        case 'precalculate':
 
            switch (previousState.operator) {
                case 'add':
                    previousState.result = Integer.add(previousState.firstArgument,previousState.secondArgument);
                    break;
                case 'sub':
                    previousState.result = Integer.sub(previousState.firstArgument, previousState.secondArgument);
                    break;
                case 'mul':
                    previousState.result = Integer.mul(previousState.firstArgument, previousState.secondArgument);
                    break;
                case 'div':
                    previousState.result = Integer.div(previousState.firstArgument,previousState.secondArgument);
                    break;
                case 'pow':
                    previousState.result = Integer.pow(previousState.firstArgument,previousState.secondArgument);
                    break;
                case 'mod':
                    if (previousState.secondArgument !== null && !previousState.secondArgument.isZero()) {
                        previousState.result = Integer.mod(previousState.firstArgument, previousState.secondArgument);
                        previousState.module = previousState.secondArgument;
                    }
                    if (previousState.secondArgument.isZero()) {
                        previousState.module = new Integer('0');
                    }
                    break;
            }
            if (!previousState.module.isZero()) {
                previousState.result =  Integer.mod(previousState.result, previousState.module);
                if (previousState.result.isNegative && previousState.positiveCookie) {
                    previousState.result = Integer.add(previousState.result,previousState.module);
                }
            }
            return previousState;
            break;

        case 'calculate':
            var result = previousState.result;
            if (previousState.result === null) {
                result = previousState.firstArgument;
            }
            if (!previousState.module.isZero()) {
                result =  Integer.mod(result, previousState.module);
                if (result.isNegative && previousState.positiveCookie) {
                    previousState.result = Integer.add(previousState.result,previousState.module);
                }
            }
            return $.extend({}, previousState, {result: result});
            break;

        default:
            return previousState;
    }
}

module.exports = OperatorReducer;