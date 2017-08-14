$(document).ready(function () {
    (function () {
        var assert = new Assert();
        var engine = new Engine();

        var testSets = [];

        var digits = function (engine, number) {
            var digitList = [];
            while(number > 0) {
                digitList.push(number%10);
                number = Math.floor(number/10);
            }
            digitList.reverse();
            digitList.forEach(function (value) {
                engine.digit(value);
            });
        };

        var tests = [
            {
                name: 'Default model',
                test: function () {
                    engine = new Engine();
                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 0;

                    return expected;
                })(),
                author: 'Kirill'
            },
            {
                name: 'One digit: zero',
                test: function () {
                    engine = new Engine();

                    engine.digit(0);

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 0;

                    return expected;
                })(),
                author: 'Kirill'
            },
            {
                name: 'One digit: not zero',
                test: function () {
                    engine = new Engine();

                    engine.digit(2);

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 2;

                    return expected;
                })(),
                author: 'Kirill'
            },
            {
                name: 'Few digits',
                test: function () {
                    engine = new Engine();

                    digits(engine, 42);

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 42;

                    return expected;
                })(),
                author: 'Kirill'
            },
            {
                name: 'First test operation',
                test: function () {
                    engine = new Engine();

                    digits(engine, 42);
                    engine.operator('add');

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 42;
                    expected.operator = 'add';

                    return expected;
                })(),
                author: 'Vitaly'
            },

            {
                name: 'Two arguments and click ADD',
                test: function () {
                    engine = new Engine();

                    digits(engine, 42);
                    engine.operator('add');
                    digits(engine, 21);

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 42;
                    expected.operator = 'add';
                    expected.secondArgument = 21;

                    return expected;
                })(),
                author: 'Vitaly'
            },
            {
                name: 'Two arguments and click MUL',
                test: function () {
                    engine = new Engine();

                    digits(engine, 42);
                    engine.operator('mul');
                    digits(engine, 21);

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 42;
                    expected.operator = 'mul';
                    expected.secondArgument = 21;

                    return expected;
                })(),
                author: 'Vitaly'
            },
            {
                name: 'Two arguments and click SUB',
                test: function () {
                    engine = new Engine();

                    digits(engine, 42);
                    engine.operator('sub');
                    digits(engine, 21);

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 42;
                    expected.operator = 'sub';
                    expected.secondArgument = 21;

                    return expected;
                })(),
                author: 'Vitaly'
            },
            {
                name: 'Two arguments and click DIV',
                test: function () {
                    engine = new Engine();

                    digits(engine, 42);
                    engine.operator('div');
                    digits(engine, 21);

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 42;
                    expected.operator = 'div';
                    expected.secondArgument = 21;

                    return expected;
                })(),
                author: 'Vitaly'
            },
            {
                name: 'Two arguments and click MOD',
                test: function () {
                    engine = new Engine();

                    digits(engine, 42);
                    engine.operator('mod');
                    digits(engine, 21);

                    return engine.model();
                },
                 expected: (function () {
                     var expected = new Model();
                     expected.firstArgument = 42;
                     expected.operator = 'mod';
                     expected.secondArgument = 21;

                     return expected;
                 })(),
                 author: 'Vitaly'
            },
            {
                name: 'Two arguments and click POW',
                test: function () {
                    engine = new Engine();

                    engine.digit(4);
                    engine.operator('pow');
                    digits(engine, 21);

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 4;
                    expected.operator = 'pow';
                    expected.secondArgument = 21;

                    return expected;
                })(),
                author: 'Vitaly'
            },
            {
                name: 'Clear',
                test: function () {
                    engine = new Engine();

                    digits(engine, 42);
                    engine.operator('add');
                    digits(engine, 21);
                    engine.clear();

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 0;
                    expected.operator = '';
                    expected.secondArgument = 0;

                    return expected;
                })(),
                author: 'Vitaly'
            },
            {
                name: 'Set module',
                test: function () {
                    engine = new Engine();

                    digits(engine, 1000);
                    engine.setMod();

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 0;
                    expected.operator = '';
                    expected.secondArgument = 0;
                    expected.module = 1000;

                    return expected;
                })(),
                author: 'Vitaly'
            },
            {
                name: 'Calculate ADD',
                test: function () {
                    engine = new Engine();

                    digits(engine, 1000);
                    engine.setMod();
                    digits(engine, 42);
                    engine.operator('add');
                    digits(engine, 21);
                    engine.calculate();

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 63;
                    expected.operator = '';
                    expected.secondArgument = 0;
                    expected.module = 1000;

                    return expected;
                })(),
                author: 'Vitaly'
            },
            {
                name: 'Calculate SUB',
                test: function () {
                    engine = new Engine();

                    digits(engine, 1000);
                    engine.setMod();
                    digits(engine, 42);
                    engine.operator('sub');
                    digits(engine, 21);
                    engine.calculate();

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 21;
                    expected.operator = '';
                    expected.secondArgument = 0;
                    expected.module = 1000;

                    return expected;
                })(),
                author: 'Vitaly'
            },
            {
                name: 'Calculate MUL',
                test: function () {
                    engine = new Engine();

                    digits(engine, 1000);
                    engine.setMod();
                    engine.digit(4);
                    engine.operator('mul');
                    engine.digit(9);
                    engine.calculate();

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 36;
                    expected.operator = '';
                    expected.secondArgument = 0;
                    expected.module = 1000;

                    return expected;
                })(),
                author: 'Vitaly'
            },
            {
                name: 'Calculate DIV',
                test: function () {
                    engine = new Engine();

                    digits(engine, 1000);
                    engine.setMod();
                    digits(engine, 42);
                    engine.operator('div');
                    engine.digit(2);
                    engine.calculate();

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 21;
                    expected.operator = '';
                    expected.secondArgument = 0;
                    expected.module = 1000;

                    return expected;
                })(),
                author: 'Vitaly'
            },
            {
                name: 'Calculate MOD',
                test: function () {
                    engine = new Engine();

                    digits(engine, 1000);
                    engine.setMod();
                    digits(engine, 41);
                    engine.operator('mod');
                    engine.digit(2);
                    engine.calculate();

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 1;
                    expected.operator = '';
                    expected.secondArgument = 0;
                    expected.module = 1000;

                    return expected;
                })(),
                author: 'Vitaly'
            },
            {
                name: 'Calculate POW',
                test: function () {
                    engine = new Engine();

                    digits(engine, 1000);
                    engine.setMod();
                    engine.digit(4);
                    engine.operator('pow');
                    engine.digit(2);
                    engine.calculate();

                    return engine.model();
                },
                expected: (function () {
                    var expected = new Model();
                    expected.firstArgument = 16;
                    expected.operator = '';
                    expected.secondArgument = 0;
                    expected.module = 1000;

                    return expected;
                })(),
                author: 'Vitaly'
            }
        ];

        var engineTestSet = new TestSet();
        tests.forEach(function (test) {
           var tempTestItem = new TestItem();
           tempTestItem.initializeTestItem(test);
           engineTestSet.addTestItem(tempTestItem);
        });
        testSets.push(engineTestSet);

        var totalCount = 0;
        var passedCount = 0;
        var failedCount = 0;
        var failedHtml = '';
        var passedHtml = '';

        testSets.forEach(function (testSet) {
            var result =  testSet.test(assert);
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