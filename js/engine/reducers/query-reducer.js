var QueryBuilder = require('./../query-builder'),
    Integer = require('./../../integer/integer');
    
function QueryReducer(previousState, action) {
    switch (action.type) {
        case 'addOperator':
            var queryState = $.extend(true, {}, previousState);
            queryState.secondArgument = null;
            if (previousState.secondArgument !== null || previousState.result !== null) {
                return $.extend({}, previousState, {
                    firstArgument: new Integer('0'),
                    operator: '',
                    secondArgument: null,
                    result: null,
                    query: 'ERROR1'
                });
            }
            return $.extend({}, previousState, {query: new QueryBuilder().getQuery(queryState)});
            break;

        case 'calculate':
            var queryState = $.extend(true, {}, previousState);
            
            if (queryState.operator === 'mod') {
                queryState.operator = '';
                queryState.secondArgument = null;
            }
            var query = new QueryBuilder().getQuery(queryState);
           
            if (!previousState.moduleCookie) {
                previousState.module = new Integer('0');
            }
            return $.extend({}, previousState, {
                firstArgument: new Integer('0'),
                operator: '',
                secondArgument: null,
                query: query
            });
            break;

        case 'addDigit':
            previousState.result = null;
   
            return $.extend({}, previousState, { query: new QueryBuilder().getQuery(previousState) });
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