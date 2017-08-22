function FluxTestSet(initialState) {
    var testSet = new TestSet();
    var Reducer = combineReducers({
        clearing: ClearingReducer,
        digit: DigitReducer,
        memory: MemoryReducer,
        module: ModuleReducer,
        operator: OperatorReducer
    });

    var addDigitTest = new TestItem();
    addDigitTest.name = 'Action "addDigit"';
    addDigitTest.author = 'Anna';

    addDigitTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        return Reducer(state, createAction('addDigit')(4));
    };

    addDigitTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 4});
    })();
    testSet.addTestItem(addDigitTest);


    var addFewDigitsTest = new TestItem();
    addFewDigitsTest.name = 'Few actions "addDigit"';
    addFewDigitsTest.author = 'Anna';

    addFewDigitsTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 4;
        return Reducer(state, createAction('addDigit')(2));
    };

    addFewDigitsTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 42});
    })();
    testSet.addTestItem(addFewDigitsTest);


    var addOperatorTest = new TestItem();
    addOperatorTest.name = 'Action "addOperator" without previous operator';
    addOperatorTest.author = 'Anna';

    addOperatorTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        return Reducer(state, createAction('addOperator')('add'));
    };

    addOperatorTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 42, operator: 'add', secondArgument: 0});
    })();
    testSet.addTestItem(addOperatorTest);


    var addOperatorWPrevTest = new TestItem();
    addOperatorWPrevTest.name = 'Action "addOperator" with previous operator';
    addOperatorWPrevTest.author = 'Anna';

    addOperatorWPrevTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.operator = 'add';
        state.secondArgument = 21;
        return Reducer(state, createAction('addOperator')('add'));
    };

    addOperatorWPrevTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 63, operator: 'add', secondArgument: 0});
    })();
    testSet.addTestItem(addOperatorWPrevTest);


    var twoArgumentsTest = new TestItem();
    twoArgumentsTest.name = 'Actions "addDigit" for 2 arguments';
    twoArgumentsTest.author = 'Anna';

    twoArgumentsTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.operator = 'add';
        return Reducer(state, createAction('addDigit')(1));
    };

    twoArgumentsTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 42, operator: 'add', secondArgument: 1});
    })();
    testSet.addTestItem(twoArgumentsTest);


    var calculateTest = new TestItem();
    calculateTest.name = 'Action "calculate"';
    calculateTest.author = 'Anna';

    calculateTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 63;
        state.operator = 'add';
        state.module = 5;
        return Reducer(state, createAction('calculate')());
    };

    calculateTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 3, module: 5});
    })();
    testSet.addTestItem(calculateTest);


    var setModuleTest = new TestItem();
    setModuleTest.name = 'Action "setModule"';
    setModuleTest.author = 'Anna';

    setModuleTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        return Reducer(state, createAction('setModule')(5));
    };

    setModuleTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {module: 5});
    })();
    testSet.addTestItem(setModuleTest);


    var setModuleWCalcTest = new TestItem();
    setModuleWCalcTest.name = 'Action "setModule" with calculation';
    setModuleWCalcTest.author = 'Anna';

    setModuleWCalcTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state = Reducer(state, createAction('setModule')(5));
        state.firstArgument = 63;
        return Reducer(state, createAction('calculate')());
    };

    setModuleWCalcTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {module: 5, firstArgument: 3});
    })();
    testSet.addTestItem(setModuleWCalcTest);


    var setModuleFromFirstArgumentTest = new TestItem();
    setModuleFromFirstArgumentTest.name = 'Action "setModule" from first argument';
    setModuleFromFirstArgumentTest.author = 'Anna';

    setModuleFromFirstArgumentTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 5;
        var module = state.firstArgument;
        state = Reducer(state, createAction('setToZero')());
        state = Reducer(state, createAction('setModule')(module));
        state.firstArgument = 63;
        return Reducer(state, createAction('calculate')());
    };

    setModuleFromFirstArgumentTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {module: 5, firstArgument: 3});
    })();
    testSet.addTestItem(setModuleFromFirstArgumentTest);


    var addOperatorAddTest = new TestItem();
    addOperatorAddTest.name = 'Add operator "add"';
    addOperatorAddTest.author = 'Anna';

    addOperatorAddTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.secondArgument = 21;
        state.operator = 'add';
        return Reducer(state, createAction('addOperator')('add'));
    };

    addOperatorAddTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 63, operator: 'add', secondArgument: 0});
    })();
    testSet.addTestItem(addOperatorAddTest);


    var addOperatorSubTest = new TestItem();
    addOperatorSubTest.name = 'Add operator "sub"';
    addOperatorSubTest.author = 'Anna';

    addOperatorSubTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.secondArgument = 21;
        state.operator = 'sub';
        return Reducer(state, createAction('addOperator')('sub'));
    };

    addOperatorSubTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 21, operator: 'sub', secondArgument: 0});
    })();
    testSet.addTestItem(addOperatorSubTest);


    var addOperatorMulTest = new TestItem();
    addOperatorMulTest.name = 'Add operator "mul"';
    addOperatorMulTest.author = 'Anna';

    addOperatorMulTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 4;
        state.secondArgument = 2;
        state.operator = 'mul';
        return Reducer(state, createAction('addOperator')('mul'));
    };

    addOperatorMulTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 8, operator: 'mul', secondArgument: 0});
    })();
    testSet.addTestItem(addOperatorMulTest);


    var addOperatorDivTest = new TestItem();
    addOperatorDivTest.name = 'Add operator "div"';
    addOperatorDivTest.author = 'Anna';

    addOperatorDivTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.secondArgument = 21;
        state.operator = 'div';
        return Reducer(state, createAction('addOperator')('div'));
    };

    addOperatorDivTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 2, operator: 'div', secondArgument: 0});
    })();
    testSet.addTestItem(addOperatorDivTest);


    var addOperationPowTest = new TestItem();
    addOperationPowTest.name = 'Add operator "pow"';
    addOperationPowTest.author = 'Anna';

    addOperationPowTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 3;
        state.secondArgument = 2;
        state.operator = 'pow';
        return Reducer(state, createAction('addOperator')('pow'));
    };

    addOperationPowTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 9, operator: 'pow', secondArgument: 0});
    })();
    testSet.addTestItem(addOperationPowTest);


    var clearTest = new TestItem();
    clearTest.name = 'Clear';
    clearTest.author = 'Anna';

    clearTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 3;
        state.operator = 'add';
        state.secondArgument = 5;
        return Reducer(state, createAction('clear')());
    };

    clearTest.expectedObject = (function () {
        return jQuery.extend(true, {}, initialState);
    })();
    testSet.addTestItem(clearTest);


    var addToMemoryTest = new TestItem();
    addToMemoryTest.name = 'Add to memory';
    addToMemoryTest.author = 'Anna';

    addToMemoryTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        return Reducer(state, createAction('addToMemory')());
    };

    addToMemoryTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {memory: 42});
    })();
    testSet.addTestItem(addToMemoryTest);


    var addToMemoryFromSecArgTest = new TestItem();
    addToMemoryFromSecArgTest.name = 'Add to memory from second argument';
    addToMemoryFromSecArgTest.author = 'Anna';

    addToMemoryFromSecArgTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.secondArgument = 21;
        state.operator = 'add';
        return Reducer(state, createAction('addToMemory')());
    };

    addToMemoryFromSecArgTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {memory: 21, operator: 'add', firstArgument: 42, secondArgument: 0});
    })();
    testSet.addTestItem(addToMemoryFromSecArgTest);


    var getFromMemoryTest = new TestItem();
    getFromMemoryTest.name = 'Memory recall';
    getFromMemoryTest.author = 'Anna';

    getFromMemoryTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.memory = 21;
        return Reducer(state, createAction('getFromMemory')());
    };

    getFromMemoryTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 21, memory: 21});
    })();
    testSet.addTestItem(getFromMemoryTest);


    var getFromMemoryToSecArgTest = new TestItem();
    getFromMemoryToSecArgTest.name = 'Memory recall to second argument';
    getFromMemoryToSecArgTest.author = 'Anna';

    getFromMemoryToSecArgTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.memory = 21;
        state.secondArgument = 0;
        return Reducer(state, createAction('getFromMemory')());
    };

    getFromMemoryToSecArgTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {secondArgument: 21, memory: 21, firstArgument: 42});
    })();
    testSet.addTestItem(getFromMemoryToSecArgTest);


    var clearMemoryTest = new TestItem();
    clearMemoryTest.name = 'Clear memory';
    clearMemoryTest.author = 'Anna';

    clearMemoryTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.memory = 21;
        return Reducer(state, createAction('clearMemory')());
    };

    clearMemoryTest.expectedObject = (function () {
        return jQuery.extend(true, {}, initialState);
    })();
    testSet.addTestItem(clearMemoryTest);


    var clearMemoryWithArgsAndOpTest = new TestItem();
    clearMemoryWithArgsAndOpTest.name = 'Clear memory with arguments and operator';
    clearMemoryWithArgsAndOpTest.author = 'Anna';

    clearMemoryWithArgsAndOpTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.secondArgument = 21;
        state.operator = 'add';
        state.memory = 21;
        return Reducer(state, createAction('clearMemory')());
    };

    clearMemoryWithArgsAndOpTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 42, secondArgument: 21, operator: 'add'});
    })();
    testSet.addTestItem(clearMemoryWithArgsAndOpTest);


    var backspaceFATest = new TestItem();
    backspaceFATest.name = 'Backspace with first argument';
    backspaceFATest.author = 'Anna';

    backspaceFATest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        return Reducer(state, createAction('deleteDigit')());
    };

    backspaceFATest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 4});
    })();
    testSet.addTestItem(backspaceFATest);


    var backspaceFAToZeroTest = new TestItem();
    backspaceFAToZeroTest.name = 'Backspace to zero with first argument';
    backspaceFAToZeroTest.author = 'Anna';

    backspaceFAToZeroTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 4;
        return Reducer(state, createAction('deleteDigit')());
    };

    backspaceFAToZeroTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 0});
    })();
    testSet.addTestItem(backspaceFAToZeroTest);


    var backspaceSATest = new TestItem();
    backspaceSATest.name = 'Backspace with second argument';
    backspaceSATest.author = 'Anna';

    backspaceSATest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.operator = 'add';
        state.secondArgument = 21;
        return Reducer(state, createAction('deleteDigit')());
    };

    backspaceSATest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {secondArgument: 2, firstArgument: 42, operator: 'add'});
    })();
    testSet.addTestItem(backspaceSATest);


    var backspaceSAToZeroTest = new TestItem();
    backspaceSAToZeroTest.name = 'Backspace to zero with second argument';
    backspaceSAToZeroTest.author = 'Anna';

    backspaceSAToZeroTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.operator = 'add';
        state.secondArgument = 2;
        return Reducer(state, createAction('deleteDigit')());
    };

    backspaceSAToZeroTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {secondArgument: 0, firstArgument: 42, operator: 'add'});
    })();
    testSet.addTestItem(backspaceSAToZeroTest);


    var undoTest = new TestItem();
    undoTest.name = 'Undo test';
    undoTest.author = 'Anna';

    undoTest.test = function () {
        var history = [
            Object.assign(jQuery.extend(true, {}, initialState), {firstArgument: 42}),
            Object.assign(jQuery.extend(true, {}, initialState), {
                firstArgument: 42,
                operator: 'add',
                secondArgument: 0
            })
        ];
        return HistoryReducer(Reducer)({history: history, currentIndex: 1}, createAction('undo')());
    };

    undoTest.expectedObject = (function () {
        var history = [
            Object.assign(jQuery.extend(true, {}, initialState), {firstArgument: 42}),
            Object.assign(jQuery.extend(true, {}, initialState), {
                firstArgument: 42,
                operator: 'add',
                secondArgument: 0
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
            Object.assign(jQuery.extend(true, {}, initialState), {firstArgument: 42}),
            Object.assign(jQuery.extend(true, {}, initialState), {
                firstArgument: 42,
                operator: 'add',
                secondArgument: 0
            })
        ];
        var state = HistoryReducer(Reducer)({history: history, currentIndex: 1}, createAction('undo')());
        return HistoryReducer(Reducer)(state, createAction('addDigit')(1));
    };

    undoWithNewTest.expectedObject = (function () {
        var history = [
            Object.assign(jQuery.extend(true, {}, initialState), {firstArgument: 42}),
            Object.assign(jQuery.extend(true, {}, initialState), {firstArgument: 421})
        ];
        return {history: history, currentIndex: 1};
    })();
    testSet.addTestItem(undoWithNewTest);


    var redoTest = new TestItem();
    redoTest.name = 'Redo test';
    redoTest.author = 'Anna';

    redoTest.test = function () {
        var history = [
            Object.assign(jQuery.extend(true, {}, initialState), {firstArgument: 42}),
            Object.assign(jQuery.extend(true, {}, initialState), {
                firstArgument: 42,
                operator: 'add',
                secondArgument: 0
            }),
            Object.assign(jQuery.extend(true, {}, initialState), {
                firstArgument: 42,
                operator: 'add',
                secondArgument: 21
            })
        ];
        return HistoryReducer(Reducer)({history: history, currentIndex: 1}, createAction('redo')());
    };

    redoTest.expectedObject = (function () {
        var history = [
            Object.assign(jQuery.extend(true, {}, initialState), {firstArgument: 42}),
            Object.assign(jQuery.extend(true, {}, initialState), {
                firstArgument: 42,
                operator: 'add',
                secondArgument: 0
            }),
            Object.assign(jQuery.extend(true, {}, initialState), {
                firstArgument: 42,
                operator: 'add',
                secondArgument: 21
            })
        ];
        return {history: history, currentIndex: 2};
    })();
    testSet.addTestItem(redoTest);

    return testSet.test();
}