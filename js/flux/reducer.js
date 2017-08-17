function Reducer(previousState, action) {
    switch (action.type) {
        case 'addDigit':
            if(previousState.operator === '') {
                previousState.firstArgument *= 10;
                previousState.firstArgument += action.value;
                return Object.assign(previousState, {firstArgument: previousState.firstArgument});
            }
            else {
                previousState.secondArgument *= 10;
                previousState.secondArgument += action.value;
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
            return Object.assign(previousState, {operator: action.value, secondArgument: 0});
            break;

        case 'calculate':
            var result = previousState.firstArgument;
            if(previousState.module !== 0)
                result %= previousState.module;
            return Object.assign(previousState, {operator: '', firstArgument: result});
            break;

        case 'setModule':
            return Object.assign(previousState, {module: action.value});
            break;

        default:
            return previousState;
    }
}