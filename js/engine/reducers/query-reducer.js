var QueryBuilder = require('../query-builder'),
    isSafeInteger = require('./../safe-integer');

function QueryReducer(previousState, action) {
    switch (action.type) {
        case 'addOperator':
            var queryState = $.extend(true, {}, previousState);
            queryState.secondArgument = null;
            if (!isSafeInteger(previousState.firstArgument)
                || (previousState.secondArgument !== null && !isSafeInteger(previousState.secondArgument))
                || (previousState.result !== null && !isSafeInteger(previousState.result))) {
                return $.extend({}, previousState, {
                    firstArgument: 0,
                    operator: '',
                    secondArgument: null,
                    result: null,
                    query: 'ERROR'
                });
            }
            return $.extend({}, previousState, {query: new QueryBuilder().getQuery(queryState)});
            break;

        case 'calculate':
            var queryState = $.extend(true, {}, previousState);
            if (queryState.secondArgument === null && queryState.operator !== '') {
                queryState.secondArgument = 0;
            }
            if (queryState.operator === 'mod') {
                queryState.operator = '';
                queryState.secondArgument = null;
            }
            var query = new QueryBuilder().getQuery(queryState);
            if (!isSafeInteger(queryState.result)) {
                previousState.result = null;
                query = 'ERROR';
            }
            if (!previousState.moduleCookie) {
                previousState.module = 0;
            }
            return $.extend({}, previousState, {
                firstArgument: 0,
                operator: '',
                secondArgument: null,
                query: query
            });
            break;

        case 'addDigit':
            previousState.result = null;
            if (!isSafeInteger(previousState.firstArgument)
                || (previousState.secondArgument !== null && !isSafeInteger(previousState.secondArgument))) {
                return $.extend({}, previousState, {
                    firstArgument: 0,
                    operator: '',
                    secondArgument: null,
                    result: null,
                    query: 'ERROR'
                });
            }
            return $.extend({}, previousState, {query: new QueryBuilder().getQuery(previousState)});
            break;

        case 'clear':
        case 'deleteDigit':
        case 'addToMemory':
        case 'getFromMemory':
        case 'clearMemory':
        case 'changeSign':
            return $.extend({}, previousState, {query: new QueryBuilder().getQuery(previousState)});
            break;

        default:
            return previousState;
    }
}

module.exports = QueryReducer;