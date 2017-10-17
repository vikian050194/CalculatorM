var CalculatorStore = require('./calculator-store'),
    Themer = require('./../ui/themer'),
    applyMenu = require('./applicators/menu-applicator'),
    applyDigits = require('./applicators/digit-applicator'),
    applyOperators = require('./applicators/operator-applicator'),
    applyClearing = require('./applicators/clearing-applicator'),
    applyMemory = require('./applicators/memory-applicator'),
    applyHistory = require('./applicators/history-applicator');

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

module.exports = CalculatorUI;