function OperatorReducerTestSet(initialState) {
    var testSet = new TestSet();

    var addOperatorEmptyTest = new TestItem();
    addOperatorEmptyTest.name = 'Action "addOperator" with empty input';
    addOperatorEmptyTest.author = 'Anna';

    addOperatorEmptyTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        return OperatorReducer(state, createAction('addOperator')('add'));
    };

    addOperatorEmptyTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {operator: 'add'});
    })();
    testSet.addTestItem(addOperatorEmptyTest);


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
        return Object.assign(state, {firstArgument: 42, operator: 'add'});
    })();
    testSet.addTestItem(addOperatorTest);


    var addSeveralOperatorsTest = new TestItem();
    addSeveralOperatorsTest.name = 'Several actions "addOperator" in a row';
    addSeveralOperatorsTest.author = 'Anna';

    addSeveralOperatorsTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state = OperatorReducer(state, createAction('addOperator')('add'));
        state = OperatorReducer(state, createAction('addOperator')('sub'));
        return OperatorReducer(state, createAction('addOperator')('mul'));
    };

    addSeveralOperatorsTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 42, operator: 'mul'});
    })();
    testSet.addTestItem(addSeveralOperatorsTest);


    var addOperatorWPrevTest = new TestItem();
    addOperatorWPrevTest.name = 'Action "addOperator" with previous operator';
    addOperatorWPrevTest.author = 'Anna';

    addOperatorWPrevTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.operator = 'add';
        state.secondArgument = 21;
        state = OperatorReducer(state, createAction('precalculate')());
        return OperatorReducer(state, createAction('addOperator')('mul'));
    };

    addOperatorWPrevTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 63, operator: 'mul'});
    })();
    testSet.addTestItem(addOperatorWPrevTest);


    var calculateWithoutSecArgTest = new TestItem();
    calculateWithoutSecArgTest.name = 'Calculate right after "addOperator"';
    calculateWithoutSecArgTest.author = 'Anna';

    calculateWithoutSecArgTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.operator = 'div';
        state = OperatorReducer(state, createAction('precalculate')());
        return OperatorReducer(state, createAction('calculate')());
    };

    calculateWithoutSecArgTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 42, operator: 'div', result: Infinity});
    })();
    testSet.addTestItem(calculateWithoutSecArgTest);


    var calculateTest = new TestItem();
    calculateTest.name = 'Action "calculate" with module';
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


    var calculateWFATest = new TestItem();
    calculateWFATest.name = 'Action "calculate" with first argument';
    calculateWFATest.author = 'Anna';

    calculateWFATest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 63;
        return OperatorReducer(state, createAction('calculate')());
    };

    calculateWFATest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 63, result: 63});
    })();
    testSet.addTestItem(calculateWFATest);


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
        state = OperatorReducer(state, createAction('addOperator')('add'));
        state.secondArgument = 21;
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
        state = OperatorReducer(state, createAction('addOperator')('sub'));
        state.secondArgument = 21;
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
        state = OperatorReducer(state, createAction('addOperator')('mul'));
        state.secondArgument = 2;
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
        state = OperatorReducer(state, createAction('addOperator')('div'));
        state.secondArgument = 21;
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorDivTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 42, operator: 'div', secondArgument: 21, result: 2});
    })();
    testSet.addTestItem(addOperatorDivTest);


    var addOperatorPowTest = new TestItem();
    addOperatorPowTest.name = 'Add operator "pow"';
    addOperatorPowTest.author = 'Anna';

    addOperatorPowTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 3;
        state = OperatorReducer(state, createAction('addOperator')('pow'));
        state.secondArgument = 2;
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorPowTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 3, operator: 'pow', secondArgument: 2, result: 9});
    })();
    testSet.addTestItem(addOperatorPowTest);


    var addOperatorModTest = new TestItem();
    addOperatorModTest.name = 'Add operator "mod"';
    addOperatorModTest.author = 'Anna';

    addOperatorModTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 3;
        state = OperatorReducer(state, createAction('precalculate')());
        state = OperatorReducer(state, createAction('addOperator')('mod'));
        state.secondArgument = 2;
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorModTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 3, operator: 'mod', secondArgument: 2, module: 2, result: 1});
    })();
    testSet.addTestItem(addOperatorModTest);


    var calculateAfterModTest = new TestItem();
    calculateAfterModTest.name = 'Calculate right after "mod"';
    calculateAfterModTest.author = 'Anna';

    calculateAfterModTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state = OperatorReducer(state, createAction('precalculate')());
        state = OperatorReducer(state, createAction('addOperator')('mod'));
        state = OperatorReducer(state, createAction('precalculate')());
        return OperatorReducer(state, createAction('calculate')());
    };

    calculateAfterModTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {operator: 'mod', result: 0});
    })();
    testSet.addTestItem(calculateAfterModTest);


    var addOperatorAfterCalculateWModTest = new TestItem();
    addOperatorAfterCalculateWModTest.name = 'Add operator after calculate with "mod"';
    addOperatorAfterCalculateWModTest.author = 'Anna';

    addOperatorAfterCalculateWModTest.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 78;
        state = OperatorReducer(state, createAction('precalculate')());
        state = OperatorReducer(state, createAction('addOperator')('mod'));
        state = QueryReducer(state, createAction('addOperator')('add'));
        state.secondArgument = 72;
        state = OperatorReducer(state, createAction('precalculate')());
        state = OperatorReducer(state, createAction('calculate')());
        state = QueryReducer(state, createAction('calculate')());
        state = OperatorReducer(state, createAction('precalculate')());
        state = OperatorReducer(state, createAction('addOperator')('add'));
        return QueryReducer(state, createAction('addOperator')('add'));
    };

    addOperatorAfterCalculateWModTest.expectedObject = (function () {
        var state = jQuery.extend(true, {}, initialState);
        return Object.assign(state, {firstArgument: 6, operator: 'add', module: 72, query: '6 add mod 72'});
    })();
    testSet.addTestItem(addOperatorAfterCalculateWModTest);


    return testSet.test();
}