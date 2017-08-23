function CalculatorUI() {
    var calculatorStore = new CalculatorStore();

    var init = function () {
        var setStartZero = function () {
            $('#output').val(0);
        };

        applyDigits(calculatorStore);
        applyOperators(calculatorStore);
        applyModule(calculatorStore);
        applyClearing(calculatorStore);
        applyMemory(calculatorStore);
        applyHistory(calculatorStore);
        setStartZero();
    };

    init();
}