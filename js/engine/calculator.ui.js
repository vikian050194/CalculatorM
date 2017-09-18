function CalculatorUI() {
    var calculatorStore = new CalculatorStore();
    var themer = new Themer();

    var init = function () {
        applyDigits(calculatorStore);
        applyOperators(calculatorStore);
        applyClearing(calculatorStore);
        applyMemory(calculatorStore);
        applyHistory(calculatorStore);

        applyMenu(themer);
    };

    init();
}