function CalculatorUI() {
    var calculator = new Calculator();

    var init = function () {
        for (var i = 0; i <= 9; i++) {
            (function () {
                var value = i;
                var id = '#' + value;
                $(id).on('click', function (e) {
                    calculator.digit(value);
                });
            })();
        }

        var operators = ['add', 'mul', 'sub', 'div', 'mod', 'pow', 'calc'];

        for (var i = 0; i <= operators.length; i++) {
            (function () {
                var value = operators[i];
                var id = '#' + value;
                $(id).on('click', function (e) {
                    calculator.operator(value);
                });
            })();
        }

        var memory = ['memoryAdd', 'memoryClean', 'memoryRecall'];

        for (var i = 0; i <= memory.length; i++) {
            (function () {
                var value = memory[i];
                var id = '#' + value;
                $(id).on('click', function (e) {
                    calculator.memory(value);
                });
            })();
        }

        // $('#clean').on('click', function () {
        //     $(document).trigger('clean');
        // });

        // $('#backward').on('click', function () {
        //     $(document).trigger('backward');
        // });

        // $('#nextTheme').on('click', function () {
        //     $(document).trigger(commonAction, args('theme'));
        // });

        // $('#setMod').on('click', function () {
        //     $(document).trigger(commonAction, args('setMod'));
        // });
    }

    init();
}