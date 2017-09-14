function IntegerTestSet() {
    var testSet = new TestSet();

    var addBigNumber = new TestItem();
    addBigNumber.name = 'Add big number';
    addBigNumber.author = 'Vitaly';

    addBigNumber.test = function () {
        var number = new Integer('1');
        return number.toString();
    };

    addBigNumber.expectedObject = (function () {
        return '2';
    })();
    testSet.addTestItem(addBigNumber);

    return testSet.test();
};