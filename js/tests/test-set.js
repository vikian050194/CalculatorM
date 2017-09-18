function TestSet() {
    this.name = '';
    var testItems = [];

    this.addTestItem = function (testItem) {
        testItems.push(testItem);
    };

    this.test = function () {
        var failed = 0;
        var failedTestNames = [];

        testItems.forEach(function (item) {
            try {
                var actual = item.test();
                assert.areEqual(item.expectedObject, actual);
            }
            catch (err) {
                failed++;
                failedTestNames.push(item.name + ' - ' + item.author + ': ' + err);
            }
        });

        return {passed: testItems.length - failed, failed: failed, failedTestNames: failedTestNames};
    }
}