function HistoryTestSet(initialState) {
    var testSet = new TestSet();
    var Reducer = combineReducers({
        clearing: ClearingReducer,
        digit: DigitReducer,
        memory: MemoryReducer,
        operator: OperatorReducer,
        query: QueryReducer
    });

    var undoTest = new TestItem();
    undoTest.name = 'Undo test';
    undoTest.author = 'Anna';

    undoTest.test = function () {
        var history = [
            $.extend({}, jQuery.extend(true, {}, initialState), {firstArgument: 42, query: '42_'}),
            $.extend({}, jQuery.extend(true, {}, initialState), {
                firstArgument: 42,
                operator: 'add',
                secondArgument: 0,
                query: '42 add 0_'
            })
        ];
        return HistoryReducer(Reducer)({history: history, currentIndex: 1}, createAction('undo')());
    };

    undoTest.expectedObject = (function () {
        var history = [
            $.extend({}, jQuery.extend(true, {}, initialState), {firstArgument: 42, query: '42_'}),
            $.extend({}, jQuery.extend(true, {}, initialState), {
                firstArgument: 42,
                operator: 'add',
                secondArgument: 0,
                query: '42 add 0_'
            })
        ];
        return {history: history, currentIndex: 0};
    })();
    testSet.addTestItem(undoTest);


    var undoWithNewTest = new TestItem();
    undoWithNewTest.name = 'Undo with new digit test';
    undoWithNewTest.author = 'Anna';

    undoWithNewTest.test = function () {
        var history = [
            $.extend({}, jQuery.extend(true, {}, initialState), {firstArgument: 42, query: '42_'}),
            $.extend({}, jQuery.extend(true, {}, initialState), {
                firstArgument: 42,
                operator: 'add',
                secondArgument: 0,
                query: '42 add 0_'
            })
        ];
        var state = HistoryReducer(Reducer)({history: history, currentIndex: 1}, createAction('undo')());
        return HistoryReducer(Reducer)(state, createAction('addDigit')(1));
    };

    undoWithNewTest.expectedObject = (function () {
        var history = [
            $.extend({}, jQuery.extend(true, {}, initialState), {firstArgument: 42, query: '42_'}),
            $.extend({}, jQuery.extend(true, {}, initialState), {firstArgument: 421, query: '421_'})
        ];
        return {history: history, currentIndex: 1};
    })();
    testSet.addTestItem(undoWithNewTest);


    var redoTest = new TestItem();
    redoTest.name = 'Redo test';
    redoTest.author = 'Anna';

    redoTest.test = function () {
        var history = [
            $.extend({}, jQuery.extend(true, {}, initialState), {firstArgument: 42, query: '42_'}),
            $.extend({}, jQuery.extend(true, {}, initialState), {
                firstArgument: 42,
                operator: 'add',
                secondArgument: 0,
                query: '42 add 0_'
            }),
            $.extend({}, jQuery.extend(true, {}, initialState), {
                firstArgument: 42,
                operator: 'add',
                secondArgument: 21,
                query: '42 add 21_'
            })
        ];
        return HistoryReducer(Reducer)({history: history, currentIndex: 1}, createAction('redo')());
    };

    redoTest.expectedObject = (function () {
        var history = [
            $.extend({}, jQuery.extend(true, {}, initialState), {firstArgument: 42, query: '42_'}),
            $.extend({}, jQuery.extend(true, {}, initialState), {
                firstArgument: 42,
                operator: 'add',
                secondArgument: 0,
                query: '42 add 0_'
            }),
            $.extend({}, jQuery.extend(true, {}, initialState), {
                firstArgument: 42,
                operator: 'add',
                secondArgument: 21,
                query: '42 add 21_'
            })
        ];
        return {history: history, currentIndex: 2};
    })();
    testSet.addTestItem(redoTest);

    return testSet.test();
}