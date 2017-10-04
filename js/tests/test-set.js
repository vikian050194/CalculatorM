function TestSet() {
    this.name = '';
    var testItems = [];

    this.addTestItem = function (testItem) {
        testItems.push(testItem);
    };

    function getFailedInfo(item, result) {

        return $.extend(getInfo(item), {
            incorrect: result.incorrect,
            actual: result.actual,
            expected: result.expected
        });
    }

    function getInfo(item) {

        return {
            name: item.name,
            author: item.author
        };
    }

    this.test = function () {
        var failedTests = [];
        var passedTests = [];
        testItems.forEach(function (item) {
            var actual = item.test();
            var isPassed = true;
            try {
                assert.areEqual(item.expectedObject, actual);
            } catch (e) {
                failedTests.push(getFailedInfo(item, e));
                isPassed = false;
            }
            if (isPassed) {
                passedTests.push(getInfo(item));
            }

        });

        return { passed: testItems.length - failedTests.length, failed: failedTests.length, failedTests: failedTests, passedTests: passedTests };
    }
}