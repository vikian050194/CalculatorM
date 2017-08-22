function Reducer(previousState, action) {
    var state = jQuery.extend(true, {}, previousState);
    switch (action.type) {
        case 'addDigit':
            if(state.operator === '') {
                state.firstArgument *= 10;
                state.firstArgument += action.value;
                return Object.assign(state, {firstArgument: state.firstArgument});
            }
            else {
                if(state.secondArgument === null)
                    state.secondArgument = 0;
                state.secondArgument *= 10;
                state.secondArgument += action.value;
                return Object.assign(state, {secondArgument: state.secondArgument});
            }
            break;

        case 'addOperator':
            switch (state.operator) {
                case 'add':
                    state.firstArgument += state.secondArgument;
                    break;
                case 'sub':
                    state.firstArgument -= state.secondArgument;
                    break;
                case 'mul':
                    state.firstArgument *= state.secondArgument;
                    break;
                case 'div':
                    state.firstArgument /= state.secondArgument;
                    break;
                case 'pow':
                    state.firstArgument = Math.pow(state.firstArgument, state.secondArgument);
                    break;
            }
            return Object.assign(state, {operator: action.value, secondArgument: 0});
            break;

        case 'calculate':
            var result = state.firstArgument;
            if(state.module !== 0)
                result %= state.module;
            return Object.assign(state, {operator: '', firstArgument: result, secondArgument: null});
            break;

        case 'setToZero':
            if(state.secondArgument === null)
                return Object.assign(state, {firstArgument: 0});
            else
                return Object.assign(state, {secondArgument: 0});
            break;

        case 'setModule':
            return Object.assign(state, {module: action.value});
            break;

        case 'clear':
            return {
                firstArgument: 0,
                secondArgument: null,
                operator: '',
                module: 0,
                memory: null
            };
            break;

        case 'addToMemory':
            if(state.secondArgument === null)
                return Object.assign(state, {memory: state.firstArgument, firstArgument: 0});
            else
                return Object.assign(state, {memory: state.secondArgument, secondArgument: 0});
            break;

        case 'getFromMemory':
            if(state.memory === null)
                return state;
            if(state.secondArgument === null)
                return Object.assign(state, {firstArgument: state.memory});
            else
                return Object.assign(state, {secondArgument: state.memory});
            break;

        case 'clearMemory':
            return Object.assign(state, {memory: null});
            break;

        case 'deleteDigit':
            if(state.secondArgument === null)
                return Object.assign(state, {firstArgument: (state.firstArgument - state.firstArgument % 10) / 10});
            else
                return Object.assign(state, {secondArgument: (state.secondArgument - state.secondArgument % 10) / 10});
            break;

        default:
            return state;
    }
}