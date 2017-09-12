function testInt () {
    var testSet = new TestSet();
    var nums = new Int("534534534534543534543543534534543");
    var addBigNumber = new TestItem();
    addBigNumber.name = 'Add big number';
    addBigNumber.author = 'Vitaly';

    addBigNumber.test = function () {
        var state = jQuery.extend(true, {}, initialState);
        state.firstArgument = Int("124123");
        return testInt(state, createAction('clear')());
    };

    /*addBigNumber.expectedObject = (function () {
       return jQuery.extend(true, {}, initialState)
    })();*/
    testSet.addTestItem(addBigNumber);
return testSet.test();
};