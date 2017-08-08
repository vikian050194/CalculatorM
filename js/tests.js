$(document).ready(function () {
    (function () {
        var assert = new Assert();
        var engine = new Engine();

        var expected = undefined;
        var actual = undefined;


        var tests = [
            {
                name: 'Default model',
                test: function () {
                    expected.number = 0;

                    actual = engine.model();
                }
            },
            {
                name: 'One digit: zero',
                test: function () {
                    expected.number = 0;

                    engine.digit(0);

                    actual = engine.model();
                }
            },
            {
                name: 'One digit: not zero',
                test: function () {
                    expected.number = 2;

                    engine.digit(2);

                    actual = engine.model();
                }
            }
        ];

        var isTestFailed = false;

        var failed = 0;
        var passed = 0;

        var failedCount = $('#failedCount');
        var passedCount = $('#passedCount');
        var failedList = $('#failed');
        var passedList = $('#passed');

        $('#totalCount').html('total:' + tests.length);

        tests.forEach(function (testItem) {
            try {
                expected = new Model();

                testItem.test();

                assert.areEqual(expected, actual);
            }
            catch (err) {
                isTestFailed = true;
            }

            if (isTestFailed) {
                failed++;
                var content = failedList.html() + '<div>' + testItem.name + '</div>';
                failedList.html(content)
            } else {
                passed++;
                var content = passedList.html() + '<div>' + testItem.name + '</div>';
                passedList.html(content)
            }

            failedCount.html('failed:' + failed);
            passedCount.html('passed:' + passed);
        }, this);
    })();
});