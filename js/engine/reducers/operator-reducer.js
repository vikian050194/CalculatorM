function OperatorReducer(previousState, action) {
    switch (action.type) {
        case 'addOperator':
            if (previousState.result !== null && !isNaN(previousState.result)) {
                previousState.firstArgument = previousState.result;
                previousState.result = null;
                previousState.secondArgument = null;
            }
            if (action.value === 'mod') {
                previousState.module = 0;
            }
            return $.extend({}, previousState, {operator: action.value});
            break;

        case 'precalculate':
            switch (previousState.operator) {
                case 'add':
                    previousState.result = previousState.firstArgument + previousState.secondArgument;
                    break;
                case 'sub':
                    previousState.result = previousState.firstArgument - previousState.secondArgument;
                    break;
                case 'mul':
                    previousState.result = previousState.firstArgument * previousState.secondArgument;
                    break;
                case 'div':
                    previousState.result = previousState.firstArgument / previousState.secondArgument;
                    break;
                case 'pow':
                    previousState.result = Math.pow(previousState.firstArgument, previousState.secondArgument);
                    break;
                case 'mod':
                    if (previousState.secondArgument !== null && previousState.secondArgument !== 0) {
                        previousState.result = previousState.firstArgument % previousState.secondArgument;
                        previousState.module = previousState.secondArgument;
                    }
                    if (previousState.secondArgument === 0) {
                        previousState.module = 0;
                    }
                    break;
            }
            if (previousState.module !== 0 && previousState.result !== null) {
                previousState.result %= previousState.module;
                if (previousState.result < 0 && Cookies.get('positive') === 'true') {
                    previousState.result += previousState.module;
                }
            }
            return previousState;
            break;

        case 'calculate':
            var result = previousState.result;
            if (previousState.result === null) {
                result = previousState.firstArgument;
            }
            if (previousState.module !== 0) {
                result %= previousState.module;
                if (result < 0 && Cookies.get('positive') === 'true') {
                    result += previousState.module;
                }
            }
            return $.extend({}, previousState, {result: result});
            break;

        default:
            return previousState;
    }
}