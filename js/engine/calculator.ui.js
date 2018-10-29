import CalculatorStore from "./calculator-store";
import Themer from "./../ui/themer";
import applyMenu from "./applicators/menu-applicator";
import applyDigits from "./applicators/digit-applicator";
import applyOperators from "./applicators/operator-applicator";
import applyClearing from "./applicators/clearing-applicator";
import applyMemory from "./applicators/memory-applicator";
import applyHistory from "./applicators/history-applicator";

function CalculatorUI() {
    var cookiesSettings = {
        expires: 31
    };

    var positiveCookie = Cookies.get("positive");
    if (positiveCookie === undefined) {
        Cookies.set("positive", false, cookiesSettings);
        positiveCookie = "false";
    }

    var moduleCookie = Cookies.get("module");
    if (moduleCookie === undefined) {
        Cookies.set("positive", false, cookiesSettings);
        moduleCookie = "false";
    }

    var initialState = {
        firstArgument: 0,
        secondArgument: null,
        operator: "",
        module: 0,
        memory: null,
        query: "_",
        result: null,
        positiveCookie: (positiveCookie === "true"),
        moduleCookie: (moduleCookie === "true")
    };

    var calculatorStore = new CalculatorStore(initialState); //send initstate
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

export default CalculatorUI;