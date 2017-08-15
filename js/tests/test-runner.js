$(document).ready(function () {
    window.assert = new Assert();

    (function () {
        var testSets = [];

        testSets.push(EngineTestSet);

        var totalCount = 0;
        var passedCount = 0;
        var failedCount = 0;
        var failedHtml = '';
        var passedHtml = '';

        testSets.forEach(function (testSet) {
            var result =  testSet();
            passedCount += result.passed;
            // result.passedTestNames.forEach(function (name) {
            //     passedHtml += '<div>' + name + '</div>';
            // });
            failedCount += result.failed;
            result.failedTestNames.forEach(function (name) {
                failedHtml += '<div>' + name + '</div>';
            });
            totalCount += passedCount + failedCount;
        }, this);

        $('#totalCount').html('total:' + totalCount);
        $('#passedCount').html('passed:' + passedCount);
        // $('#passed').html(passedHtml);
        $('#failedCount').html('failed:' + failedCount);
        $('#failed').html(failedHtml);
    })();
});