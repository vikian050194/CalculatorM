$(document).ready(function () {
    window.assert = new Assert();

    (function () {
        var testSets = [];

        testSets.push(HistoryTestSet);
        testSets.push(QueryBuilderTestSet);

        testSets.push(ClearingReducerTestSet);
        testSets.push(DigitReducerTestSet);
        testSets.push(MemoryReducerTestSet);
        testSets.push(ModuleReducerTestSet);
        testSets.push(OperatorReducerTestSet);
        testSets.push(QueryReducerTestSet);

        var totalCount = 0;
        var passedCount = 0;
        var failedCount = 0;
        var failedHtml = '';
        var passedHtml = '';

        var initialState = {
            firstArgument: 0,
            secondArgument: null,
            operator: '',
            module: 0,
            memory: null,
            query: '',
            result: null
        };

        testSets.forEach(function (testSet) {
            var result = testSet(initialState);
            passedCount += result.passed;
            // result.passedTestNames.forEach(function (name) {
            //     passedHtml += '<div>' + name + '</div>';
            // });
            failedCount += result.failed;
            result.failedTestNames.forEach(function (name) {
                failedHtml += '<div>' + name + '</div>';
            });
        }, this);

        totalCount = passedCount + failedCount;

        $('#totalCount').html('total:' + totalCount);
        $('#passedCount').html('passed:' + passedCount);
        // $('#passed').html(passedHtml);
        $('#failedCount').html('failed:' + failedCount);
        $('#failed').html(failedHtml);
    })();
});