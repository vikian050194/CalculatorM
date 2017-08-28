function OperatorReducer(previousState, action) {
    switch (action.type) {
        case 'addOperator':
            if (previousState.result !== null) {
                previousState.firstArgument = previousState.result;
                previousState.result = null;
                previousState.secondArgument = null;
            }
            return Object.assign(previousState, {operator: action.value});
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
                    if (previousState.secondArgument !== null) {
                        previousState.result = previousState.firstArgument % previousState.secondArgument;
                        previousState.module = previousState.secondArgument;
                    }
                    break;
            }
            if (previousState.module !== 0 && previousState.result !== null) {
                previousState.result %= previousState.module;
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
            }
            return Object.assign(previousState, {result: result});
            break;

        default:
            return previousState;
    }
}