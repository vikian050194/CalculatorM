function OperatorReducerTestSet(initialState) {
    var testSet = new TestSet();

    var addOperatorTest = new TestItem();
    addOperatorTest.name = 'Action "addOperator" without previous operator';
    addOperatorTest.author = 'Anna';

    addOperatorTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        return OperatorReducer(state, createAction('addOperator')('add'));
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
        return OperatorReducer(state, createAction('addOperator')('mul'));
    };

    addOperatorWPrevTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 42, operator: 'mul', secondArgument: 21});
    })();
    testSet.addTestItem(addOperatorWPrevTest);


    var calculateTest = new TestItem();
    calculateTest.name = 'Action "calculate"';
    calculateTest.author = 'Anna';

    calculateTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 63;
        state.module = 5;
        return OperatorReducer(state, createAction('calculate')());
    };

    calculateTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 63, result: 3, module: 5});
    })();
    testSet.addTestItem(calculateTest);


    var calculateWithoutModuleTest = new TestItem();
    calculateWithoutModuleTest.name = 'Calculate without module';
    calculateWithoutModuleTest.author = 'Anna';

    calculateWithoutModuleTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 63;
        return OperatorReducer(state, createAction('calculate')());
    };

    calculateWithoutModuleTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 63, result: 63});
    })();
    testSet.addTestItem(calculateWithoutModuleTest);


    var addOperatorAddTest = new TestItem();
    addOperatorAddTest.name = 'Add operator "add"';
    addOperatorAddTest.author = 'Anna';

    addOperatorAddTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.secondArgument = 21;
        state.operator = 'add';
        state = OperatorReducer(state, createAction('addOperator')('add'));
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorAddTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 42, operator: 'add', secondArgument: 21, result: 63});
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
        state = OperatorReducer(state, createAction('addOperator')('sub'));
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorSubTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 42, operator: 'sub', secondArgument: 21, result: 21});
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
        state = OperatorReducer(state, createAction('addOperator')('mul'));
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorMulTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 4, operator: 'mul', secondArgument: 2, result: 8});
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
        state = OperatorReducer(state, createAction('addOperator')('div'));
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorDivTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 42, operator: 'div', secondArgument: 21, result: 2});
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
        state = OperatorReducer(state, createAction('addOperator')('pow'));
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperationPowTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 3, operator: 'pow', secondArgument: 2, result: 9});
    })();
    testSet.addTestItem(addOperationPowTest);

    return testSet.test();
}