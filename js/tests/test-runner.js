$(document).ready(function () {
    window.assert = new Assert();

    (function () {
        var testSets = [];

		testSets.push(HistoryTestSet);
		testSets.push(QueryBuilderTestSet);
		testSets.push(ClearingReducerTestSet);
		testSets.push(DigitReducerTestSet);
		testSets.push(MemoryReducerTestSet);
		testSets.push(OperatorReducerTestSet);
		testSets.push(QueryReducerTestSet);
		testSets.push(IntegerTestSet);

        var totalCount = 0;
        var passedCount = 0;
        var failedCount = 0;
        var failedHtml = '';
        var passedHtml = '';

        function getHtmlForInfo(info){
            var keys = ['name', 'author', 'incorrect', 'actual', 'expected'];
            var result = '';
            
            keys.forEach(function (key) {
                result += '<div><b>' + key +'</b>:&nbsp;'+ info[key]+ '</div>';
            });

            return result;
        }

        testSets.forEach(function (testSet) {
            var result = testSet();
            passedCount += result.passed;
            // result.passedTestNames.forEach(function (name) {
            //     passedHtml += '<div>' + name + '</div>';
            // });
            failedCount += result.failed;
            result.failedTests.forEach(function (info) {
                failedHtml += getHtmlForInfo(info) + '<hr/>';
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

function TestState(){
    this.firstArgument = 0;
    this.secondArgument =  null;
    this.operator = '';
    this.module = 0;
    this.memory = null;
    this.query = '';
    this.result = null;
	this.positiveCookie = false;
	this.moduleCookie = true;
};