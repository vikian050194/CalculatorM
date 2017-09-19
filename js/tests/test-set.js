function TestSet() {
    this.name = '';
    var testItems = [];

    this.addTestItem = function (testItem) {
        testItems.push(testItem);
    };

function getFailedInfo(item, result){
    return {
        name: item.name,
        author: item.author,
        incorrect: result.incorrect,
        actual: result.actual,
        expected: result.expected
    };
}

    this.test = function () {
        var failedTests = [];

        testItems.forEach(function (item) {
                var actual = item.test();
                var result = assert.areEqual(item.expectedObject, actual);
                if(result.areEqual === false){
                    failedTests.push(getFailedInfo(item, result));
                }
        });

        return {passed: testItems.length - failedTests.length, failed: failedTests.length, failedTests: failedTests};
    }
}