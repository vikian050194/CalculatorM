function QueryReducerTestSet(initialState) {
    var testSet = new TestSet();


    var addDigitQueryTest = new TestItem();
    addDigitQueryTest.name = 'Query after action "addDigit"';
    addDigitQueryTest.author = 'Anna';
    addDigitQueryTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        return QueryReducer(state, createAction('addDigit')(1));
    };
    addDigitQueryTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 1;
        return Object.assign(state, {query: new QueryBuilder().getQuery(state)});
    });


    return testSet.test();
}