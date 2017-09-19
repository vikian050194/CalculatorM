function CalculatorUI() {
    var calculatorStore = new CalculatorStore();
    var themer = new Themer();

    var init = function () {		
        applyMenu(calculatorStore, themer);
		
        applyDigits(calculatorStore);
        applyOperators(calculatorStore);
        applyClearing(calculatorStore);
        applyMemory(calculatorStore);
        applyHistory(calculatorStore);
    };

    init();
}