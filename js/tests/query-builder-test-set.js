function QueryBuilderTestSet() {
    var testSet = new TestSet();

    var defaultModelTest = new TestItem();
    defaultModelTest.name = 'Empty query';
    defaultModelTest.test = function () {
        var queryBuilder = new QueryBuilder();
        var model = new Model();
        return queryBuilder.getQuery(model);
    };

    defaultModelTest.expectedObject = (function () {
        return 0;
    })();

    defaultModelTest.author = 'Vitaly';
    testSet.addTestItem(defaultModelTest);


    var oneArgumentTest = new TestItem();
    oneArgumentTest.name = 'One argument';
    oneArgumentTest.test = function () {
        var queryBuilder = new QueryBuilder();
        var model = new Model();
        model.firstArgument = 7;
        return queryBuilder.getQuery(model);
    };

    oneArgumentTest.expectedObject = (function () {
        return 7;
    })();

    oneArgumentTest.author = 'Vitaly';
    testSet.addTestItem(oneArgumentTest);


    var OneArgumentAndOperation = new TestItem();
    OneArgumentAndOperation.name = 'One argument and operation';
    OneArgumentAndOperation.test = function () {
        var queryBuilder = new QueryBuilder();
        var model = new Model();
        model.firstArgument = 7;
        model.operator = 'add'
        return queryBuilder.getQuery(model);
    };

    OneArgumentAndOperation.expectedObject = (function () {
        return '7add0';
    })();

    OneArgumentAndOperation.author = 'Vitaly';
    testSet.addTestItem(OneArgumentAndOperation);


    var twoNumberAndOperationTest = new TestItem();
    twoNumberAndOperationTest.name = 'Two arguments and operation';
    twoNumberAndOperationTest.test = function () {
        var queryBuilder = new QueryBuilder();
        var model = new Model();
        model.firstArgument = 7;
        model.operator = 'add'
        model.secondArgument = 32;
        return queryBuilder.getQuery(model);
    };

    twoNumberAndOperationTest.expectedObject = (function () {
        return '7add32';
    })();

    twoNumberAndOperationTest.author = 'Vitaly';
    testSet.addTestItem(twoNumberAndOperationTest);


    var ModuleTest = new TestItem();
    ModuleTest.name = 'Test module';
    ModuleTest.test = function () {
        var queryBuilder = new QueryBuilder();
        var model = new Model();
        model.module = 100
        return queryBuilder.getQuery(model);
    };

    ModuleTest.expectedObject = (function () {
        return '0mod100';
    })();

    ModuleTest.author = 'Vitaly';
    testSet.addTestItem(ModuleTest);


    var ModuleAndArgumentTest = new TestItem();
    ModuleAndArgumentTest.name = 'Test module';
    ModuleAndArgumentTest.test = function () {
        var queryBuilder = new QueryBuilder();
        var model = new Model();
        model.firstArgument = 72;
        model.module = 100
        return queryBuilder.getQuery(model);
    };

    ModuleAndArgumentTest.expectedObject = (function () {
        return '72mod100';
    })();

    ModuleAndArgumentTest.author = 'Vitaly';
    testSet.addTestItem(ModuleAndArgumentTest);

     var ModuleAndTwoArgumentsTest = new TestItem();
    ModuleAndTwoArgumentsTest.name = 'Test module';
    ModuleAndTwoArgumentsTest.test = function () {
        var queryBuilder = new QueryBuilder();
        var model = new Model();
        model.firstArgument = 72;
        model.module = 100
        model.operator = 'sub'
        model.secondArgument = 5;
        return queryBuilder.getQuery(model);
    };

    ModuleAndTwoArgumentsTest.expectedObject = (function () {
        return '72sub5mod100';
    })();

    ModuleAndTwoArgumentsTest.author = 'Vitaly';
    testSet.addTestItem(ModuleAndTwoArgumentsTest);

    return testSet.test();
}