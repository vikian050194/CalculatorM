function ModuleReducerTestSet(initialState) {
    var testSet = new TestSet();

    var setModuleTest = new TestItem();
    setModuleTest.name = 'Action "setModule"';
    setModuleTest.author = 'Anna';

    setModuleTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        return ModuleReducer(state, createAction('setModule')(5));
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
        state = ModuleReducer(state, createAction('setModule')(5));
        state.firstArgument = 63;
        return OperatorReducer(state, createAction('calculate')());
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
        state = ModuleReducer(state, createAction('setToZero')());
        state = ModuleReducer(state, createAction('setModule')(module));
        state.firstArgument = 63;
        return OperatorReducer(state, createAction('calculate')());
    };

    setModuleFromFirstArgumentTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {module: 5, firstArgument: 3});
    })();
    testSet.addTestItem(setModuleFromFirstArgumentTest);


    var setModuleFromSecondArgumentTest = new TestItem();
    setModuleFromSecondArgumentTest.name = 'Action "setModule" from second argument';
    setModuleFromSecondArgumentTest.author = 'Anna';

    setModuleFromSecondArgumentTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 21;
        state.operator = 'add';
        state.secondArgument = 5;
        var module = state.secondArgument;
        state = ModuleReducer(state, createAction('setToZero')());
        state = ModuleReducer(state, createAction('setModule')(module));
        state.secondArgument = 63;
        state = OperatorReducer(state, createAction('addOperator')('add'));
        return OperatorReducer(state, createAction('calculate')());
    };

    setModuleFromSecondArgumentTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 4, module: 5});
    })();
    testSet.addTestItem(setModuleFromSecondArgumentTest);

    return testSet.test();
}