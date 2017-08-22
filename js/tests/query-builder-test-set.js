function QueryBuilderTestSet(initialState) {
    var testSet = new TestSet();

    var defaultModelTest = new TestItem();
    defaultModelTest.name = 'Empty query';
    defaultModelTest.test = function () {
        var queryBuilder = new QueryBuilder();
        var state = jQuery.extend(true, {}, initialState);
        return queryBuilder.getQuery(state);
    };

    defaultModelTest.expectedObject = (function () {
        return '0';
    })();

    defaultModelTest.author = 'Vitaly';
    testSet.addTestItem(defaultModelTest);


    var oneArgumentTest = new TestItem();
    oneArgumentTest.name = 'One argument';
    oneArgumentTest.test = function () {
        var queryBuilder = new QueryBuilder();
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 3;
        return queryBuilder.getQuery(state);
    };

    oneArgumentTest.expectedObject = (function () {
        return '3';
    })();

    oneArgumentTest.author = 'Vitaly';
    testSet.addTestItem(oneArgumentTest);


    var OneArgumentAndOperation = new TestItem();
    OneArgumentAndOperation.name = 'One argument and operation';
    OneArgumentAndOperation.test = function () {
        var queryBuilder = new QueryBuilder();
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 7;
        state.operator = 'add';
        state.secondArgument = 0;
        return queryBuilder.getQuery(state);
    };

    OneArgumentAndOperation.expectedObject = (function () {
        return '7 add 0';
    })();

    OneArgumentAndOperation.author = 'Vitaly';
    testSet.addTestItem(OneArgumentAndOperation);


    var twoNumberAndOperationTest = new TestItem();
    twoNumberAndOperationTest.name = 'Two arguments and operation';
    twoNumberAndOperationTest.test = function () {
        var queryBuilder = new QueryBuilder();
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 7;
        state.operator = 'add';
        state.secondArgument = 32;
        return queryBuilder.getQuery(state);
    };

    twoNumberAndOperationTest.expectedObject = (function () {
        return '7 add 32';
    })();

    twoNumberAndOperationTest.author = 'Vitaly';
    testSet.addTestItem(twoNumberAndOperationTest);


    var ModuleTest = new TestItem();
    ModuleTest.name = 'Test module';
    ModuleTest.test = function () {
        var queryBuilder = new QueryBuilder();
        var state = jQuery.extend(true, {}, initialState);
        state.module = 100;
        return queryBuilder.getQuery(state);
    };

    ModuleTest.expectedObject = (function () {
        return '0 mod 100';
    })();

    ModuleTest.author = 'Vitaly';
    testSet.addTestItem(ModuleTest);


    var ModuleAndArgumentTest = new TestItem();
    ModuleAndArgumentTest.name = 'Test module';
    ModuleAndArgumentTest.test = function () {
        var queryBuilder = new QueryBuilder();
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 72;
        state.module = 100;
        return queryBuilder.getQuery(state);
    };

    ModuleAndArgumentTest.expectedObject = (function () {
        return '72 mod 100';
    })();

    ModuleAndArgumentTest.author = 'Vitaly';
    testSet.addTestItem(ModuleAndArgumentTest);

    var ModuleAndTwoArgumentsTest = new TestItem();
    ModuleAndTwoArgumentsTest.name = 'Test module';
    ModuleAndTwoArgumentsTest.test = function () {
        var queryBuilder = new QueryBuilder();
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = 72;
        state.module = 100;
        state.operator = 'sub';
        state.secondArgument = 5;
        return queryBuilder.getQuery(state);
    };

    ModuleAndTwoArgumentsTest.expectedObject = (function () {
        return '72 sub 5 mod 100';
    })();

    ModuleAndTwoArgumentsTest.author = 'Vitaly';
    testSet.addTestItem(ModuleAndTwoArgumentsTest);

    return testSet.test();
}