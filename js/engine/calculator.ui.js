function CalculatorUI() {
    var calculatorStore = new CalculatorStore();
    var themer = new Themer();

    var init = function () {
        var setStartZero = function () {
            $('#output').val(0);
            $('#query').val(0);
        };

        applyDigits(calculatorStore);
        applyOperators(calculatorStore);
        applyClearing(calculatorStore);
        applyMemory(calculatorStore);
        applyHistory(calculatorStore);
        setStartZero();

        applyThemes(themer);
        Cookies.set('positive', true, {expires: 31});
    };

    init();
}