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
        return Object.assign(state, {firstArgument: 63, operator: 'mul', secondArgument: 0});
    })();
    testSet.addTestItem(addOperatorWPrevTest);


    var calculateTest = new TestItem();
    calculateTest.name = 'Action "calculate"';
    calculateTest.author = 'Anna';

    calculateTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 63;
        state.operator = 'add';
        state.module = 5;
        return OperatorReducer(state, createAction('calculate')());
    };

    calculateTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 3, module: 5});
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
        return Object.assign(state, {firstArgument: 63});
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
        return OperatorReducer(state, createAction('addOperator')('add'));
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
        return OperatorReducer(state, createAction('addOperator')('sub'));
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
        return OperatorReducer(state, createAction('addOperator')('mul'));
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
        return OperatorReducer(state, createAction('addOperator')('div'));
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
        return OperatorReducer(state, createAction('addOperator')('pow'));
    };

    addOperationPowTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 9, operator: 'pow', secondArgument: 0});
    })();
    testSet.addTestItem(addOperationPowTest);

    return testSet.test();
}