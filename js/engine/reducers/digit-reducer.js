function DigitReducer(previousState, action) {
    switch (action.type) {
        case 'addDigit':
            if (previousState.operator === '') {
                previousState.firstArgument *= 10;
                previousState.firstArgument += action.value;
                return Object.assign(previousState, {firstArgument: previousState.firstArgument});
            }
            else {
                if (previousState.secondArgument === null)
                    previousState.secondArgument = 0;
                previousState.secondArgument *= 10;
                previousState.secondArgument += action.value;
                return Object.assign(previousState, {secondArgument: previousState.secondArgument});
            }
            break;

        default:
            return previousState;
    }
}