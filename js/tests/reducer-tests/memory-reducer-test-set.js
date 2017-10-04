function MemoryReducerTestSet() {
    var testSet = new TestSet();
    var initialState = new TestState;

    var addZeroToMemoryTest = new TestItem();
    addZeroToMemoryTest.name = 'Add zero to memory';
    addZeroToMemoryTest.author = 'Anna';

    addZeroToMemoryTest.test = function () {
        var state = $.extend(true, {}, initialState);
        return MemoryReducer(state, createAction('addToMemory')());
    };

    addZeroToMemoryTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {memory: 0});
    })();
    testSet.addTestItem(addZeroToMemoryTest);


    var addToMemoryTest = new TestItem();
    addToMemoryTest.name = 'Add to memory';
    addToMemoryTest.author = 'Anna';

    addToMemoryTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 42;
        return MemoryReducer(state, createAction('addToMemory')());
    };

    addToMemoryTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {memory: 42, firstArgument: 42});
    })();
    testSet.addTestItem(addToMemoryTest);


    var addToMemoryFromSecArgTest = new TestItem();
    addToMemoryFromSecArgTest.name = 'Add to memory from second argument';
    addToMemoryFromSecArgTest.author = 'Anna';

    addToMemoryFromSecArgTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.secondArgument = 21;
        state.operator = 'add';
        return MemoryReducer(state, createAction('addToMemory')());
    };

    addToMemoryFromSecArgTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {
            memory: 21,
            operator: 'add',
            firstArgument: 42,
            secondArgument: 21
        });
    })();
    testSet.addTestItem(addToMemoryFromSecArgTest);


    var addZeroToMemoryFromSecArgTest = new TestItem();
    addZeroToMemoryFromSecArgTest.name = 'Add zero to memory from second argument';
    addZeroToMemoryFromSecArgTest.author = 'Anna';

    addZeroToMemoryFromSecArgTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.secondArgument = 0;
        state.operator = 'add';
        return MemoryReducer(state, createAction('addToMemory')());
    };

    addZeroToMemoryFromSecArgTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {
            memory: 0,
            operator: 'add',
            firstArgument: 42,
            secondArgument: 0
        });
    })();
    testSet.addTestItem(addZeroToMemoryFromSecArgTest);


    var getFromEmptyMemoryTest = new TestItem();
    getFromEmptyMemoryTest.name = 'Try memory recall from empty memory';
    getFromEmptyMemoryTest.author = 'Anna';

    getFromEmptyMemoryTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 21;
        return MemoryReducer(state, createAction('getFromMemory')());
    };

    getFromEmptyMemoryTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 21});
    })();
    testSet.addTestItem(getFromEmptyMemoryTest);


    var getFromMemoryTest = new TestItem();
    getFromMemoryTest.name = 'Memory recall';
    getFromMemoryTest.author = 'Anna';

    getFromMemoryTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.memory = 21;
        return MemoryReducer(state, createAction('getFromMemory')());
    };

    getFromMemoryTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 21, memory: 21});
    })();
    testSet.addTestItem(getFromMemoryTest);


    var getFromMemoryToSecArgTest = new TestItem();
    getFromMemoryToSecArgTest.name = 'Memory recall to second argument';
    getFromMemoryToSecArgTest.author = 'Anna';

    getFromMemoryToSecArgTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.memory = 21;
        state.operator = 'add';
        state.secondArgument = 0;
        return MemoryReducer(state, createAction('getFromMemory')());
    };

    getFromMemoryToSecArgTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {
            secondArgument: 21,
            memory: 21,
            firstArgument: 42,
            operator: 'add'
        });
    })();
    testSet.addTestItem(getFromMemoryToSecArgTest);


    var clearMemoryTest = new TestItem();
    clearMemoryTest.name = 'Clear memory';
    clearMemoryTest.author = 'Anna';

    clearMemoryTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.memory = 21;
        return MemoryReducer(state, createAction('clearMemory')());
    };

    clearMemoryTest.expectedObject = (function () {
        return $.extend(true, {}, initialState);
    })();
    testSet.addTestItem(clearMemoryTest);


    var clearEmptyMemoryTest = new TestItem();
    clearEmptyMemoryTest.name = 'Clear empty memory';
    clearEmptyMemoryTest.author = 'Anna';

    clearEmptyMemoryTest.test = function () {
        var state = $.extend(true, {}, initialState);
        return MemoryReducer(state, createAction('clearMemory')());
    };

    clearEmptyMemoryTest.expectedObject = (function () {
        return $.extend(true, {}, initialState);
    })();
    testSet.addTestItem(clearEmptyMemoryTest);


    var clearMemoryWithArgsAndOpTest = new TestItem();
    clearMemoryWithArgsAndOpTest.name = 'Clear memory with arguments and operator';
    clearMemoryWithArgsAndOpTest.author = 'Anna';

    clearMemoryWithArgsAndOpTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.secondArgument = 21;
        state.operator = 'add';
        state.memory = 21;
        return MemoryReducer(state, createAction('clearMemory')());
    };

    clearMemoryWithArgsAndOpTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 42, secondArgument: 21, operator: 'add'});
    })();
    testSet.addTestItem(clearMemoryWithArgsAndOpTest);

    return testSet.test();
}