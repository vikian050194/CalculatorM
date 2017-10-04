function OperatorReducerTestSet() {
    var testSet = new TestSet();
    var initialState = new TestState;

    var addOperatorEmptyTest = new TestItem();
    addOperatorEmptyTest.name = 'Action "addOperator" with empty input';
    addOperatorEmptyTest.author = 'Anna';

    addOperatorEmptyTest.test = function () {
        var state = $.extend(true, {}, initialState);
        return OperatorReducer(state, createAction('addOperator')('add'));
    };

    addOperatorEmptyTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {operator: 'add'});
    })();
    testSet.addTestItem(addOperatorEmptyTest);


    var addOperatorTest = new TestItem();
    addOperatorTest.name = 'Action "addOperator" without previous operator';
    addOperatorTest.author = 'Anna';

    addOperatorTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 42;
        return OperatorReducer(state, createAction('addOperator')('add'));
    };

    addOperatorTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 42, operator: 'add'});
    })();
    testSet.addTestItem(addOperatorTest);


    var addSeveralOperatorsTest = new TestItem();
    addSeveralOperatorsTest.name = 'Several actions "addOperator" in a row';
    addSeveralOperatorsTest.author = 'Anna';

    addSeveralOperatorsTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 42;
        state = OperatorReducer(state, createAction('addOperator')('add'));
        state = OperatorReducer(state, createAction('addOperator')('sub'));
        state = OperatorReducer(state, createAction('addOperator')('mul'));
        state = OperatorReducer(state, createAction('addOperator')('pow'));
        return OperatorReducer(state, createAction('addOperator')('div'));
    };

    addSeveralOperatorsTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 42, operator: 'div'});
    })();
    testSet.addTestItem(addSeveralOperatorsTest);


    var addOperatorWPrevTest = new TestItem();
    addOperatorWPrevTest.name = 'Action "addOperator" with previous operator';
    addOperatorWPrevTest.author = 'Anna';

    addOperatorWPrevTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.operator = 'add';
        state.secondArgument = 21;
        state = OperatorReducer(state, createAction('precalculate')());
        return OperatorReducer(state, createAction('addOperator')('mul'));
    };

    addOperatorWPrevTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 63, operator: 'mul'});
    })();
    testSet.addTestItem(addOperatorWPrevTest);


    var calculateWithoutSecArgTest = new TestItem();
    calculateWithoutSecArgTest.name = 'Calculate right after "addOperator"';
    calculateWithoutSecArgTest.author = 'Anna';

    calculateWithoutSecArgTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 42;
        state.operator = 'div';
        state = OperatorReducer(state, createAction('precalculate')());
        return OperatorReducer(state, createAction('calculate')());
    };

    calculateWithoutSecArgTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 42, operator: 'div', result: Infinity});
    })();
    testSet.addTestItem(calculateWithoutSecArgTest);


    var calculateTest = new TestItem();
    calculateTest.name = 'Action "calculate" with module';
    calculateTest.author = 'Anna';

    calculateTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 63;
        state.module = 5;
        return OperatorReducer(state, createAction('calculate')());
    };

    calculateTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 63, result: 3, module: 5});
    })();
    testSet.addTestItem(calculateTest);


    var calculateWFATest = new TestItem();
    calculateWFATest.name = 'Action "calculate" with first argument';
    calculateWFATest.author = 'Anna';

    calculateWFATest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 63;
        return OperatorReducer(state, createAction('calculate')());
    };

    calculateWFATest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 63, result: 63});
    })();
    testSet.addTestItem(calculateWFATest);


    var calculateWithoutModuleTest = new TestItem();
    calculateWithoutModuleTest.name = 'Calculate without module';
    calculateWithoutModuleTest.author = 'Anna';

    calculateWithoutModuleTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 63;
        return OperatorReducer(state, createAction('calculate')());
    };

    calculateWithoutModuleTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 63, result: 63});
    })();
    testSet.addTestItem(calculateWithoutModuleTest);


    var addOperatorAddTest = new TestItem();
    addOperatorAddTest.name = 'Add operator "add"';
    addOperatorAddTest.author = 'Anna';

    addOperatorAddTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 42;
        state = OperatorReducer(state, createAction('addOperator')('add'));
        state.secondArgument = 21;
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorAddTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 42, operator: 'add', secondArgument: 21, result: 63});
    })();
    testSet.addTestItem(addOperatorAddTest);


    var addOperatorSubTest = new TestItem();
    addOperatorSubTest.name = 'Add operator "sub"';
    addOperatorSubTest.author = 'Anna';

    addOperatorSubTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 42;
        state = OperatorReducer(state, createAction('addOperator')('sub'));
        state.secondArgument = 21;
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorSubTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 42, operator: 'sub', secondArgument: 21, result: 21});
    })();
    testSet.addTestItem(addOperatorSubTest);


    var addOperatorMulTest = new TestItem();
    addOperatorMulTest.name = 'Add operator "mul"';
    addOperatorMulTest.author = 'Anna';

    addOperatorMulTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 4;
        state = OperatorReducer(state, createAction('addOperator')('mul'));
        state.secondArgument = 2;
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorMulTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 4, operator: 'mul', secondArgument: 2, result: 8});
    })();
    testSet.addTestItem(addOperatorMulTest);


    var addOperatorDivTest = new TestItem();
    addOperatorDivTest.name = 'Add operator "div"';
    addOperatorDivTest.author = 'Anna';

    addOperatorDivTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 42;
        state = OperatorReducer(state, createAction('addOperator')('div'));
        state.secondArgument = 21;
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorDivTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 42, operator: 'div', secondArgument: 21, result: 2});
    })();
    testSet.addTestItem(addOperatorDivTest);


    var addOperatorPowTest = new TestItem();
    addOperatorPowTest.name = 'Add operator "pow"';
    addOperatorPowTest.author = 'Anna';

    addOperatorPowTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 3;
        state = OperatorReducer(state, createAction('addOperator')('pow'));
        state.secondArgument = 2;
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorPowTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 3, operator: 'pow', secondArgument: 2, result: 9});
    })();
    testSet.addTestItem(addOperatorPowTest);


    var addOperatorModTest = new TestItem();
    addOperatorModTest.name = 'Add operator "mod"';
    addOperatorModTest.author = 'Anna';

    addOperatorModTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 3;
        state = OperatorReducer(state, createAction('addOperator')('mod'));
        state.secondArgument = 2;
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorModTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 3, operator: 'mod', secondArgument: 2, module: 2, result: 1});
    })();
    testSet.addTestItem(addOperatorModTest);


    var addOperatorModWZeroTest = new TestItem();
    addOperatorModWZeroTest.name = 'Add operator "mod" with zero';
    addOperatorModWZeroTest.author = 'Anna';

    addOperatorModWZeroTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 0;
        state = OperatorReducer(state, createAction('addOperator')('mod'));
        state.secondArgument = 0;
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorModWZeroTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 0, operator: 'mod', secondArgument: 0});
    })();
    testSet.addTestItem(addOperatorModWZeroTest);


    var addOperatorModWZeroWPrevTest = new TestItem();
    addOperatorModWZeroWPrevTest.name = 'Add operator "mod" with zero with previous module';
    addOperatorModWZeroWPrevTest.author = 'Anna';

    addOperatorModWZeroWPrevTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 0;
        state.module = 78;
        state = OperatorReducer(state, createAction('addOperator')('mod'));
        state.secondArgument = 0;
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorModWZeroWPrevTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 0, operator: 'mod', secondArgument: 0});
    })();
    testSet.addTestItem(addOperatorModWZeroWPrevTest);


    var addOperatorModWPosCookieTest = new TestItem();
    addOperatorModWPosCookieTest.name = 'Add operator "mod" with positive cookie';
    addOperatorModWPosCookieTest.author = 'Anna';

    addOperatorModWPosCookieTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.positiveCookie = true;
        state.firstArgument = -17;
        state = OperatorReducer(state, createAction('addOperator')('mod'));
        state.secondArgument = 9;
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorModWPosCookieTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {
            firstArgument: -17,
            secondArgument: 9,
            operator: 'mod',
            module: 9,
            result: 1,
            positiveCookie: true
        });
    })();
    testSet.addTestItem(addOperatorModWPosCookieTest);


    var addOperatorWPosCookieTest = new TestItem();
    addOperatorWPosCookieTest.name = 'Add operator with positive cookie and module';
    addOperatorWPosCookieTest.author = 'Anna';

    addOperatorWPosCookieTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.positiveCookie = true;
        state.firstArgument = -18;
        state.module = 9;
        state = OperatorReducer(state, createAction('addOperator')('add'));
        state.secondArgument = 1;
        return OperatorReducer(state, createAction('precalculate')());
    };

    addOperatorWPosCookieTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {
            firstArgument: -18,
            secondArgument: 1,
            operator: 'add',
            module: 9,
            result: 1,
            positiveCookie: true
        });
    })();
    testSet.addTestItem(addOperatorWPosCookieTest);


    var calculateWPosCookieTest = new TestItem();
    calculateWPosCookieTest.name = 'Calculate with positive cookie and module';
    calculateWPosCookieTest.author = 'Anna';

    calculateWPosCookieTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.positiveCookie = true;
        state.firstArgument = -17;
        state.module = 9;
        return OperatorReducer(state, createAction('calculate')());
    };

    calculateWPosCookieTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: -17, module: 9, result: 1, positiveCookie: true});
    })();
    testSet.addTestItem(calculateWPosCookieTest);


    var calculateAfterModTest = new TestItem();
    calculateAfterModTest.name = 'Calculate right after "mod"';
    calculateAfterModTest.author = 'Anna';

    calculateAfterModTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state = OperatorReducer(state, createAction('addOperator')('mod'));
        return OperatorReducer(state, createAction('calculate')());
    };

    calculateAfterModTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {operator: 'mod', result: 0});
    })();
    testSet.addTestItem(calculateAfterModTest);


    var addOperatorAfterCalculateWModTest = new TestItem();
    addOperatorAfterCalculateWModTest.name = 'Add operator after calculate with "mod"';
    addOperatorAfterCalculateWModTest.author = 'Anna';

    addOperatorAfterCalculateWModTest.test = function () {
        var state = $.extend(true, {}, initialState);
        state.firstArgument = 78;
        state = OperatorReducer(state, createAction('addOperator')('mod'));
        state = QueryReducer(state, createAction('addOperator')('mod'));
        state.secondArgument = 72;
        state = OperatorReducer(state, createAction('precalculate')());
        state = OperatorReducer(state, createAction('calculate')());
        state = QueryReducer(state, createAction('calculate')());
        state = OperatorReducer(state, createAction('precalculate')());
        state = OperatorReducer(state, createAction('addOperator')('add'));
        return QueryReducer(state, createAction('addOperator')('add'));
    };

    addOperatorAfterCalculateWModTest.expectedObject = (function () {
        return $.extend(true, {}, initialState, {firstArgument: 6, operator: 'add', module: 72, query: '6 add _ mod 72'});
    })();
    testSet.addTestItem(addOperatorAfterCalculateWModTest);


    return testSet.test();
}