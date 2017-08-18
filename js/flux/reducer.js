function Reducer(previousState, action) {
    switch (action.type) {
        case 'addDigit':
            if(previousState.operator === '') {
                previousState.firstArgument *= 10;
                previousState.firstArgument += action.digit;
                return Object.assign(previousState, {firstArgument: previousState.firstArgument});
            }
            else {
                if(previousState.secondArgument === null)
                    previousState.secondArgument = 0;
                previousState.secondArgument *= 10;
                previousState.secondArgument += action.digit;
                return Object.assign(previousState, {secondArgument: previousState.secondArgument});
            }
            break;

        case 'addOperator':
            switch (previousState.operator) {
                case 'add':
                    previousState.firstArgument += previousState.secondArgument;
                    break;
                case 'sub':
                    previousState.firstArgument -= previousState.secondArgument;
                    break;
                case 'mul':
                    previousState.firstArgument *= previousState.secondArgument;
                    break;
                case 'div':
                    previousState.firstArgument /= previousState.secondArgument;
                    break;
                case 'pow':
                    previousState.firstArgument = Math.pow(previousState.firstArgument, previousState.secondArgument);
                    break;
            }
            return Object.assign(previousState, {operator: action.operator, secondArgument: 0});
            break;

        case 'calculate':
            var result = previousState.firstArgument;
            if(previousState.module !== 0)
                result %= previousState.module;
            return Object.assign(previousState, {operator: '', firstArgument: result, secondArgument: null});
            break;

        case 'setModule':
            return Object.assign(previousState, {module: action.module});
            break;

        case 'clear':
            if(previousState.secondArgument === null)
                return Object.assign(previousState, {firstArgument: 0});
            else
                return Object.assign(previousState, {secondArgument: 0});
            break;

        case 'addToMemory':
            if(previousState.secondArgument === null)
                return Object.assign(previousState, {memory: previousState.firstArgument, firstArgument: 0});
            else
                return Object.assign(previousState, {memory: previousState.secondArgument, secondArgument: 0});
            break;

        case 'getFromMemory':
            if(previousState.secondArgument === null)
                return Object.assign(previousState, {memory: null, firstArgument: previousState.memory});
            else
                return Object.assign(previousState, {memory: null, secondArgument: previousState.memory});
            break;

        default:
            return previousState;
    }
}