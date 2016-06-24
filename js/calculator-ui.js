function CalculatorUI() {
    var caclulator = new Calculator();

    var init = function () {
        $('#nextTheme').on('click', function () {
            $(document).trigger('nextTheme');
        });

        $('#setMod').on('click', function () {
            $(document).trigger('setMod');
        });

        for (var i = 0; i <= 9; i++) {
            var id = '#' + i;
            $(id).on('click', function (e) {
                var value = e.currentTarget.firstChild.data;
                $(document).trigger('clickDigit', value);
            });
        }

        var operators = ['add', 'mul', 'sub', 'div', 'mod', 'pow'];
        for (var i = 0; i <= operators.length; i++) {
            var id = '#' + operators[i];
            $(id).on('click', function (e) {
                var value = e.currentTarget.firstChild.data;
                $(document).trigger('clickOperator', value);
            });
        }

        $('#calculate').on('click', function () {
            $(document).trigger('calculate');
        });

        $('#clean').on('click', function () {
            $(document).trigger('clean');
        });

    }

    init();
}