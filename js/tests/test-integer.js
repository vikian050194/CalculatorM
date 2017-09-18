function IntTestSet() {
    var testSet = new TestSet();

    var addNumber = new TestItem();
    addNumber.name = 'Add number';
    addNumber.author = 'Vitaly';

    addNumber.test = function () {
        var number = new Integer('2');
        return number.toString();
    };

    addNumber.expectedObject = (function () {
        return '2';
    })();
    testSet.addTestItem(addNumber);

    var addNegativeNumber = new TestItem();
    addNegativeNumber.name = 'Add negative number';
    addNegativeNumber.author = 'Vitaly';

    addNegativeNumber.test = function () {
        var number = new Integer('-2');
        return number.toString();
    };

    addNegativeNumber.expectedObject = (function () {
        return '-2';
    })();
    testSet.addTestItem(addNegativeNumber);

    var addBigNumber = new TestItem();
    addBigNumber.name = 'Add big number';
    addBigNumber.author = 'Vitaly';

    addBigNumber.test = function () {
        var number = new Integer('-210');
        return number.toString();
    };

    addBigNumber.expectedObject = (function () {
        return '-210';
    })();
    testSet.addTestItem(addBigNumber);

    var getAmount = new TestItem();
    getAmount.name = 'Get Amount';
    getAmount.author = 'Vitaly';

    getAmount.test = function () {
        var number = new Integer('210');
        var numberSecond = new Integer('95');
        var result = new Integer();
        result.getAdd(number, numberSecond);
        return result.toString();
    };

    getAmount.expectedObject = (function () {
        return '305';
    })();
    testSet.addTestItem(getAmount);

    var getAmountNegativeNumbers = new TestItem();
    getAmountNegativeNumbers.name = 'Get Amount';
    getAmountNegativeNumbers.author = 'Vitaly';

    getAmountNegativeNumbers.test = function () {
        var numberFirst = new Integer('-87');
        var numberSecond = new Integer('-59');
        var result = new Integer();
        result.getAdd(numberFirst, numberSecond);
        return result.toString();
    };

    getAmountNegativeNumbers.expectedObject = (function () {
        return '-146';
    })();
    testSet.addTestItem(getAmountNegativeNumbers);

    var getAmountBigNumbers = new TestItem();
    getAmountBigNumbers.name = 'Get Amount';
    getAmountBigNumbers.author = 'Vitaly';

    getAmountBigNumbers.test = function () {
        var numberFirst = new Integer('21037831813');
        var numberSecond = new Integer('959');
        var result = new Integer();
        result.getAdd(numberFirst, numberSecond);
        return result.toString();
    };

    getAmountBigNumbers.expectedObject = (function () {
        return '21037832772';
    })();
    testSet.addTestItem(getAmountBigNumbers);

    return testSet.test();
};