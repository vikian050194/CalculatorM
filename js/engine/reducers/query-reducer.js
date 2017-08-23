function QueryReducer(previousState, action) {
    switch (action.type) {
        case 'addOperator':
            var queryState = jQuery.extend(true, {}, previousState);
            queryState.secondArgument = null;
            return Object.assign(previousState, {query: new QueryBuilder().getQuery(queryState)});
            break;

        case 'addDigit':
        case 'clear':
        case 'deleteDigit':
        case 'addToMemory':
        case 'getFromMemory':
        case 'clearMemory':
        case 'setToZero':
        case 'setModule':
            return Object.assign(previousState, {query: new QueryBuilder().getQuery(previousState)});
            break;

        default:
            return previousState;
    }
}