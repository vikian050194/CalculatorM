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
                    expected.firstArgument = 0;

                    actual = engine.model();
                }
            },
            {
                name: 'One digit: zero',
                test: function () {
                    expected.firstArgument = 0;

                    engine.digit(0);

                    actual = engine.model();
                }
            },
            {
                name: 'One digit: not zero',
                test: function () {
                    expected.firstArgument = 2;

                    engine.digit(2);

                    actual = engine.model();
                }
            },
            {
                name: 'Few digits',
                test: function () {
                    expected.firstArgument = 42;

                    engine.digit(4);
                    engine.digit(2);

                    actual = engine.model();
                }
            },
            {
                name: 'First test operation',
                test: function () {
                    expected.firstArgument = 42;
                    expected.operator = 'add';

                    engine.digit(4);
                    engine.digit(2);
                    engine.operator('add');

                    actual = engine.model();
                }
            },

            {
                name: 'Two arguments and operation ADD',
                test: function () {
                    expected.firstArgument = 42;
                    expected.operator = 'add';
                    expected.secondArgument = 21;

                    engine.digit(4);
                    engine.digit(2);
                    engine.operator('add');
                    engine.digit(2);
                    engine.digit(1);

                    actual = engine.model();
                }
            },
            {
                name: 'Clean',
                test: function () {
                    expected.firstArgument = 0;
                    expected.operator = '';
                    expected.secondArgument = 0;
                    engine.digit(4);
                    engine.digit(2);
                    engine.operator('add');
                    engine.digit(2);
                    engine.digit(1);
                    engine.clean();

                    actual = engine.model();
                }
            },
            {
                name: 'Calculate +',
                test: function () {
                    expected.firstArgument = 0;
                    expected.operator = '';
                    expected.secondArgument = 0;
                    engine.digit(4);
                    engine.digit(2);
                    engine.operator('add');
                    engine.digit(2);
                    engine.digit(1);
                    engine.calculate();

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
                engine = new Engine();

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