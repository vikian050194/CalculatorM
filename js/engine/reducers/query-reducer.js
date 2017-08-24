function QueryReducer(previousState, action) {
    switch (action.type) {
        case 'addOperator':
            var queryState = jQuery.extend(true, {}, previousState);
            queryState.secondArgument = null;
            return Object.assign(previousState, {query: new QueryBuilder().getQuery(queryState)});
            break;

        case 'calculate':
            var queryState = jQuery.extend(true, {}, previousState);
            if (queryState.secondArgument === null && queryState.operator !== '') {
                queryState.secondArgument = 0;
            }
            if (queryState.operator === 'mod') {
                queryState.operator = '';
                queryState.secondArgument = null;
            }
            return Object.assign(previousState, {
                firstArgument: previousState.result,
                operator: '',
                secondArgument: null,
                result: null,
                query: new QueryBuilder().getQuery(queryState)
            });
            break;

        case 'addDigit':
        case 'clear':
        case 'addToMemory':
        case 'getFromMemory':
        case 'clearMemory':
            return Object.assign(previousState, {query: new QueryBuilder().getQuery(previousState)});
            break;

        default:
            return previousState;
    }
}