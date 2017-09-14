function testInt() {
    var testSet = new TestSet();

    var addBigNumber = new TestItem();
    addBigNumber.name = 'Add big number';
    addBigNumber.author = 'Vitaly';

    addBigNumber.test = function () {
       
       var firstArgument = Int('534534534534543534543543534534543');
        return testInt(state, createAction('clear')());
    };

    addBigNumber.expectedObject = (function () {
        return jQuery.extend(true, {}, initialState)
    })();
    testSet.addTestItem(addBigNumber);

    return testSet.test();
};