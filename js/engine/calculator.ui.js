function CalculatorUI() {
    var calculator = new Calculator();

    var init = function () {
        var setStartZero = function () {
            $('#output').val(0);
            $('#query').val(0);
        };

        applyDigits(calculator);
        applyOperators(calculator);
        applyModule(calculator);
        applyClearing(calculator);
        applyMemory(calculator);
        applyHistory(calculator);
        setStartZero();
    };

    init();
}